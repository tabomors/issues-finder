import { useState } from 'react';
import Head from 'next/head';
import { useInfiniteFindIssuesQuery } from '@/graphql/issues/findIssues.generated';
import { Label, Repository } from '@/types/graphqlTypes';
import { Form, defaultFormValues, FormValues } from '@/components/Form';
import {
  Container,
  Title,
  AppShell,
  Button,
  Flex,
  Card,
  Group,
  Badge,
  Text,
} from '@mantine/core';
import { RichText } from '@/components/RichText';

export function buildQuery(language: string, text?: string, label?: string) {
  const languageQuery = `language:\"${language}\"`;
  const textQuery = text ? `\"${text}\"` : '';
  const labelQuery = label ? `label:\"${label}\"` : '';

  return `state:\"open\" ${textQuery} ${languageQuery} ${labelQuery}`.replace(
    /\s+/g,
    ' '
  );
}

interface Issue {
  labels: Pick<Label, 'name' | 'color'>[];
  id: string;
  createdAt: Date;
  body: string;
  url: string;
  repository: Pick<Repository, 'name' | 'url'>;
  title: string;
  commentsCount: number;
}

export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>({
    language: defaultFormValues.language,
    text: defaultFormValues.text,
    label: defaultFormValues.label,
  });

  const onSubmit = (nextFormValues: FormValues) => {
    setFormValues(nextFormValues);
  };

  const { data, error, isLoading, fetchNextPage, isFetching } =
    useInfiniteFindIssuesQuery(
      'after',
      {
        query: buildQuery(
          formValues.language as string,
          formValues.text,
          formValues.label
        ),
      },
      {
        staleTime: Infinity,
        getNextPageParam: (lastPage) => {
          return lastPage.search.pageInfo.hasNextPage
            ? { after: lastPage.search.pageInfo.endCursor }
            : null;
        },
      }
    );

  const issues = (data?.pages || []).flatMap((page) => {
    return (page.search.edges || []).reduce<Issue[]>((acc, edge) => {
      if (edge?.node?.__typename === 'Issue') {
        const node = edge.node;
        acc.push({
          labels: (node.labels?.nodes || []) as Issue['labels'],
          id: node.id,
          createdAt: node.createdAt,
          body: node.body,
          url: node.url,
          repository: node.repository,
          title: node.title,
          commentsCount: node.comments.totalCount,
        });
      }
      return acc;
    }, []);
  });

  console.log('issues', issues);

  const hasNextPage = !!data?.pages?.at(-1)?.search?.pageInfo?.hasNextPage;

  return (
    <>
      <Head>
        <title>Issues finder</title>
        <meta name="description" content="Issues finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell padding="sm">
          <Container size="xs" px="xs">
            <Title size="h3" align="center" color="indigo" weight="bolder">
              Find issues on Github you want to work on
            </Title>
            <Form
              onSubmit={onSubmit}
              label={formValues.label}
              language={formValues.language}
              text={formValues.text}
              isLoading={isLoading}
            />
            {issues.map((issue) => {
              return (
                <Card
                  key={issue.id}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  mb={'md'}
                >
                  <Text weight={500} align="center">
                    <RichText text={issue.title} />
                  </Text>
                  <Group position="center" mt="md" mb="xs">
                    {issue.labels.map((label) => (
                      <Badge
                        key={label.name}
                        color={label.color}
                        variant="light"
                      >
                        {label.name}
                      </Badge>
                    ))}
                  </Group>

                  <Text size="sm" color="dimmed">
                    <RichText text={issue.body} />
                  </Text>

                  <Flex justify={'space-between'} align="center" mb="md">
                    <Text color="dimmed">💬 {issue.commentsCount}</Text>
                    <Text component='a' color="indigo" weight="bolder" target="_blank" href={issue.repository.url}>
                      {issue.repository.name}
                    </Text>
                  </Flex>

                  <Button
                    fullWidth
                    variant="gradient"
                    color="blue"
                    radius="md"
                    target="_blank"
                    component="a"
                    href={issue.url}
                  >
                    Open issue
                  </Button>
                </Card>
              );
            })}
            {hasNextPage ? (
              <Flex justify="center">
                <Button
                  disabled={isFetching}
                  onClick={(e) => {
                    fetchNextPage();
                  }}
                >
                  Fetch next
                </Button>
              </Flex>
            ) : null}
          </Container>
        </AppShell>
      </main>
    </>
  );
}
