import * as React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="content">{children}</main>
    <footer>
      Created by <a href="https://github.com/tabomors">tabomors</a> @{' '}
      {new Date().getFullYear()}
    </footer>
  </div>
);

export default Layout;
