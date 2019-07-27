import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { NextPage } from 'next';
// TODO: Try to use https://github.com/tc39/proposal-optional-chaining
import get from 'lodash/get';
import merge from 'lodash/merge';
import { useApolloClient } from 'react-apollo-hooks';

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

const resolvers = merge(
  addLabelResolver,
  getLanguageResolver,
  setLanguageResolver
);

const buildQuery = (language: string, labels: string[]): string => {
  const languageWithPrefix = `language:${language}`;
  const labelsWithPrefix = labels.map(label => `label:${label}`).join(' ');
  return `type:issue ${languageWithPrefix} ${labelsWithPrefix}`;
};

const useFindIssues = () => {
  const client = useApolloClient();

  useEffect(() => {
    console.log('Adding resolvers...');
    client.addResolvers(resolvers as any);
  }, []);

  const { data: language } = useGetLanguageQuery();
  const [setLanguage] = useSetLanguageMutation();

  const { data: labelsData } = useGetLabelsQuery();
  const labels = (labelsData && labelsData.labels) || [];
  const [addLabel] = useAddLabelMutation();

  console.log('language', language);
  console.log('labels', labels);

  const shouldRunQuery = language && labels.length > 0;

  const query = buildQuery(language as string, labels as string[]);
  const { fetchMore, ...issuesData } = useFindIssuesQuery({
    variables: { query },
    notifyOnNetworkStatusChange: true,
    skip: !shouldRunQuery
  });

  const fetchNextIssues = () => {
    fetchMore({
      variables: {
        query,
        after: get(issuesData.data, 'search.pageInfo.endCursor', null)
      },
      updateQuery: (prev, { fetchMoreResult }): FindIssuesQuery => {
        if (!fetchMoreResult) return prev;

        const prevEdges = get(prev, 'search.edges', []);
        const nextEdges = get(fetchMoreResult, 'search.edges', []);

        const prevCopy = { ...prev };
        prevCopy.search.edges = [...prevEdges, ...nextEdges];
        return prevCopy;
      }
    });
  };

  return [
    { labels, language, issuesData },
    { setLanguage, addLabel, fetchNextIssues }
  ] as const;
};

const IndexPage: NextPage = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [
    {
      labels,
      issuesData: { loading, data }
    },
    { setLanguage, addLabel, fetchNextIssues }
  ] = useFindIssues();

  const edges = get(data, 'search.edges', []);

  const handleLanguageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setLanguage({ variables: { language } });
  };

  const handleAddLabel = () => {
    if (!inputEl.current) return;
    const val = inputEl.current.value;
    if (val) {
      addLabel({ variables: { label: val } });
      inputEl.current.value = '';
    }
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        <div>
          <select
            name="languageSelect"
            id="languageSelect"
            onChange={handleLanguageSelect}
          >
            <option value="">Choose your language</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
          </select>

          <div>
            <p>Labels:</p>

            {labels.length > 0 && (
              <ul>
                {labels.map((label, i) => (
                  <li key={i}>{label}</li>
                ))}
              </ul>
            )}

            <input ref={inputEl} type="text" placeholder="Label" />
            <button type="button" onClick={handleAddLabel}>
              Add label
            </button>
          </div>
        </div>
        {(() => {
          if (loading && edges.length === 0) {
            return <p>Loading...</p>;
          }

          return (
            <>
              {edges.map((edge: any) => {
                return (
                  <pre key={edge.node.id}>
                    {JSON.stringify(edge, null, '\t')}
                  </pre>
                );
              })}
              {loading && <p>Loading...</p>}
            </>
          );
        })()}
        <button
          disabled={!edges.length}
          type="submit"
          onClick={fetchNextIssues}
        >
          Fetch more
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
