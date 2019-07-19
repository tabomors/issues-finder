import React, { useState, useRef } from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import { NextPage } from "next";
import get from "lodash/get";
import { useGetLanguageQuery } from "../graphql/language/getLanguage.generated";
import { useSetLanguageMutation } from "../graphql/language/setLanguage.generated";
import { useGetLabelsQuery } from "../graphql/label/getLabels.generated";
import { useAddLabelMutation } from "../graphql/label/addLabel.generated";
import { useFindIssuesQuery, FindIssuesQuery } from "../graphql/issue/findIssues.generated";

const buildQuery = (language: any, labels: any): string => {
  const languageWithPrefix = `language:${language}`;
  const labelsWithPrefix = labels
    .map((label: any) => `label:${label}`)
    .join(" ");
  return `${languageWithPrefix} ${labelsWithPrefix}`;
};

const IndexPage: NextPage = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  const { data: language } = useGetLanguageQuery();
  const [setLanguage] = useSetLanguageMutation();

  const { data: labelsData } = useGetLabelsQuery();
  const labels = (labelsData && labelsData.labels) || [];
  const [addLabel] = useAddLabelMutation();

  console.log('language', language)
  console.log('labels', labels)

  const shouldRunQuery = language && labels.length > 0;

  const { data, loading, fetchMore } = useFindIssuesQuery({
    variables: { query: buildQuery(language, labels) },
    notifyOnNetworkStatusChange: true,
    skip: !shouldRunQuery
  });
  const edges = get(data, "search.edges", []);

  console.log(edges);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        <div>
          <select
            name="languageSelect"
            id="languageSelect"
            onChange={e => {
              const language = e.target.value;
              setLanguage({ variables: { language } });
            }}
          >
            <option value="" />
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
            <button
              type="button"
              onClick={e => {
                if (!inputEl.current) return;
                const val = inputEl.current.value;
                if (val) {
                  addLabel({ variables: { label: val } });
                  inputEl.current.value = '';
                }
              }}
            >
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
                    {JSON.stringify(edge, null, "\t")}
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
          onClick={e => {
            fetchMore({
              variables: {
                query: "language:javascript label:good-first-issue",
                after: get(data, "search.pageInfo.endCursor")
              },
              updateQuery: (prev, { fetchMoreResult }): FindIssuesQuery => {
                if (!fetchMoreResult) return prev;

                const prevEdges = get(prev, "search.edges", []);
                const nextEdges = get(fetchMoreResult, "search.edges", []);

                const prevCopy = { ...prev };
                prevCopy.search.edges = [...prevEdges, ...nextEdges];
                return prevCopy;
              }
            });
          }}
        >
          Fetch more
        </button>
      </div>
    </Layout>
  );
};

export default IndexPage;
