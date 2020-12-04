import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useFindOneIssueQuery } from '../graphql/issue/findIssues.generated';
import { IssueItem } from '../components/Issue';
import Layout from '../components/Layout';
import { Label } from '../types/types';
import { IssueContentFragment } from '../graphql/issue/findIssues.generated';

const IssuePage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading } = useFindOneIssueQuery({
    skip: !id,
    variables: { id: id as string },
  });

  const node = data?.node as IssueContentFragment | undefined;

  return (
    <Layout title="Issue">
      {loading && <p>Loading...</p>}
      {node && (
        <IssueItem {...node} labels={(node.labels?.nodes || []) as Label[]} />
      )}
    </Layout>
  );
};

export default IssuePage;
