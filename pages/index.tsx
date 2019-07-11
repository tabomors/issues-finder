import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { useFindIssuesQuery, FindIssuesQuery } from "../generated/graphql";
import get from "lodash/get";

const IndexPage: NextPage = () => {
  const { data, loading } = useFindIssuesQuery({
    variables: { query: "language:javascript label:good-first-issue" }
  });

  const edges = get(data, "search.edges", []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          edges.map((edge: any) => {
            return (
              <pre key={edge.node.id}>{JSON.stringify(edge, null, "\t")}</pre>
            );
          })
        )}

        {/* <Link href="/about">
          <a>About</a>
        </Link> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
