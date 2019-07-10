import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { gql } from "apollo-boost";

import { Query } from "react-apollo";

const IndexPage: NextPage = () => {
  return (
    <Query query={gql`
      { viewer { login }}
    `}>
      {({ data } : any) => {
        console.log(data);
        
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
      }}
    </Query>
  );
};

export default IndexPage;
