import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { useFindIssuesQuery } from "../generated/graphql";

const IndexPage: NextPage = () => {
  const issuesData = useFindIssuesQuery({
    variables: { query: "language:javascript label:good-first-issue" }
  });
  console.log(issuesData.data)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
