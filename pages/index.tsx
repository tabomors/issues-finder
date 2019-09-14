import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import get from 'lodash/get'; // TODO: Try to use https://github.com/tc39/proposal-optional-chaining
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import { useApolloClient } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';

import Layout from '../components/Layout';
import { LanguageSelect } from '../components/Selects';
import { IssueItem } from '../components/Issue';
import { withApollo } from '../lib/withApollo';
import { useGetLanguageQuery } from '../graphql/language/getLanguage.generated';
import { useSetLanguageMutation } from '../graphql/language/setLanguage.generated';
import { useGetLabelsQuery } from '../graphql/label/getLabels.generated';
import { useAddLabelMutation } from '../graphql/label/addLabel.generated';
import {
  useFindIssuesQuery,
  FindIssuesQuery
} from '../graphql/issue/findIssues.generated';
import addLabelResolver from '../graphql/label/addLabel.resolver';
import getLanguageResolver from '../graphql/language/getLanguage.resolver';
import setLanguageResolver from '../graphql/language/setLanguage.resolver';
import { Stepper } from '../components/Stepper';

const resolvers = merge(
  addLabelResolver,
  getLanguageResolver,
  setLanguageResolver
);

const useStyles = makeStyles(theme => ({
  input: {
    width: '100%',
    padding: 40,
    marginTop: 100
  },
  labels: {
    marginTop: 20,
    marginLeft: 20
  },
  issue: {
    marginTop: 20
  },
  labelList: {
    display: 'inline-flex',
    padding: 0
  },
  label: {
    backgroundColor: '#556CD6',
    marginLeft: 15,
    borderRadius: 15,
    padding: '5px 15px',
    color: 'white',
    listStyleType: 'none'
  },
  inputLabelControls: {
    marginTop: 20
  },
  clearButton: {
    marginLeft: 10
  },
  issuesContainer: {
    marginTop: 50
  }
}));

const buildQuery = (language: string, labels: string[]): string => {
  const languageWithPrefix = `language:${language}`;
  const labelsWithPrefix = labels.map(label => `label:${label}`).join(' ');
  return `${languageWithPrefix} ${labelsWithPrefix}`;
};

const useFindIssues = (defaultLanguage: string, defaultLabels: string[]) => {
  const client = useApolloClient();

  useEffect(() => {
    client.addResolvers(resolvers as any);
  }, []);

  const { data: languagesData } = useGetLanguageQuery();
  let language = (languagesData && languagesData.language) || defaultLanguage;
  const [setLanguage] = useSetLanguageMutation();

  const { data: labelsData } = useGetLabelsQuery();
  let labels = (labelsData && labelsData.labels) || [];
  labels = labels.length ? labels : defaultLabels;
  const [addLabel] = useAddLabelMutation();

  const shouldRunQuery = language && labels.length > 0;
  const query = buildQuery(language, labels as string[]);
  const { fetchMore, ...issuesData } = useFindIssuesQuery({
    variables: { query },
    notifyOnNetworkStatusChange: true,
    skip: !shouldRunQuery
  });

  const fetchNextIssues = () => {
    const endCursor = get(
      issuesData.data,
      'search.pageInfo.endCursor',
      ''
    ) as string;
    fetchMore({
      variables: {
        query,
        after: endCursor
      },
      updateQuery: (prev, { fetchMoreResult }): FindIssuesQuery => {
        if (!fetchMoreResult) return prev;
        const prevEdges = get(prev, 'search.edges', []);

        fetchMoreResult.search.edges = [
          ...prevEdges,
          ...(fetchMoreResult.search.edges || [])
        ];

        return fetchMoreResult;
      }
    });
  };

  return [
    { labels, language, issuesData },
    { setLanguage, addLabel, fetchNextIssues }
  ] as const;
};

const queryStringLabelsToList = (labels: string) => {
  const parsedLabels = decodeURIComponent(labels)
    .split(',')
    .filter(Boolean)
    .map((str: string) => str.trim());
  return parsedLabels;
};

interface RouteParams {
  language?: string;
  labels?: string;
}

const IndexPage: NextPage = () => {
  const classes = useStyles();
  const inputEl = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const {
    language: defaultLanguage = '',
    labels: defaultLabels = ''
  }: RouteParams = router ? router.query : {};

  const [
    {
      language: updatedLanguage,
      labels,
      issuesData: { loading, data }
    },
    { setLanguage, addLabel, fetchNextIssues }
  ] = useFindIssues(defaultLanguage, queryStringLabelsToList(defaultLabels));

  const edges = get(data, 'search.edges', []);

  const handleLanguageSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
    const language = e.target.value as string;
    setLanguage({ variables: { language } });
    const href = {
      pathname: router.pathname,
      query: { ...router.query, language }
    };
    router.push(href, href);
  };

  const handleAddLabel = () => {
    if (!inputEl.current) return;
    const val = inputEl.current.value;
    if (val) {
      addLabel({ variables: { label: val } });
      const updatedLabels = router.query.labels
        ? `${router.query.labels},${val}`
        : val;
      const href = {
        pathname: router.pathname,
        query: { ...router.query, labels: updatedLabels }
      };
      router.push(href, href);
      inputEl.current.value = '';
    }
  };

  return (
    <Layout title="Issues finder">
      <Stepper steps={['Select issue language', 'Select issue labels']}>
        {({ activeStep, classes: stepperClasses, handleBack, handleNext }) => {
          return (
            <>
              {activeStep === 0 && (
                <LanguageSelect
                  language={updatedLanguage}
                  handleLanguageSelect={handleLanguageSelect}
                />
              )}
              <div className={stepperClasses.buttonGroup}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                {activeStep === 0 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={!updatedLanguage}
                  >
                    Next
                  </Button>
                )}
              </div>

              {activeStep > 0 && (
                <>
                  <div className={classes.labels}>
                    <span>Labels:</span>
                    {labels.length > 0 && (
                      <ul className={classes.labelList}>
                        {labels.map((label, i) => (
                          <li key={i} className={classes.label}>
                            {label}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className={classes.inputLabelControls}>
                      <Input
                        inputRef={inputEl}
                        placeholder="Place for your label"
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddLabel}
                        size="small"
                      >
                        Add label
                      </Button>
                      <Button
                        className={classes.clearButton}
                        variant="contained"
                        size="small"
                      >
                        Clear All
                      </Button>
                    </div>
                  </div>
                  {loading && edges.length === 0 ? <p>Loading...</p> : null}
                  <div className={classes.issuesContainer}>
                    {edges.map((edge: any) => (
                      <Card key={edge.node.id} className={classes.issue}>
                        <CardContent>
                          <IssueItem
                            {...pick(edge.node, [
                              'state',
                              'url',
                              'body',
                              'publishedAt',
                              'repository',
                              'id'
                            ])}
                            labels={get(edge.node, 'labels.nodes', [])}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {loading && edges.length > 0 ? <p>Loading...</p> : null}
                  {edges.length > 0 && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={fetchNextIssues}
                    >
                      Fetch {edges.length > 0 ? 'more' : ''}
                    </Button>
                  )}
                </>
              )}
            </>
          );
        }}
      </Stepper>
    </Layout>
  );
};

export default withApollo(IndexPage);
