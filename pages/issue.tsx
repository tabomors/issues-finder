import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import { useFindOneIssueQuery } from '../graphql/issue/findIssues.generated';
import { withApollo } from '../lib/withApollo';

const IssuePage: NextPage = () => {
  let {
    query: { id }
  } = useRouter();
  id = typeof id === 'string' ? id : id[0];
  const { data, loading } = useFindOneIssueQuery({
    skip: !id,
    variables: { id }
  });

  return (
    <Layout title="Issue" nav={[{href: '/', label: 'Home'}]}>
      {(() => {
        if (loading) return <p>Loading...</p>;
        return data ? JSON.stringify(data, null, '\t') : <p>No such issue</p>;
      })()}
    </Layout>
  );
};

export default withApollo(IssuePage);
