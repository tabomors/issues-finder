import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
  nav: { href: string; label: string }[];
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  nav
}) => (
  <div className="container">
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }
        ul,
        ol {
          list-style-type: none;
          padding: 0;
        }
      `}
    </style>
    <style jsx>
      {`
        .container {
          max-width: 600px;
          margin: auto;
        }
        .content {
          margin-bottom: 20px;
        }
        .header {
          margin-bottom: 15px;
        }
      `}
    </style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="header">
      <nav>
        {nav.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a>{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
    <main className="content">{children}</main>
    <footer>
      Created by <a href="https://github.com/tabomors">tabomors</a> @{' '}
      {new Date().getFullYear()}
    </footer>
  </div>
);

export default Layout;
