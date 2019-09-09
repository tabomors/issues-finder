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
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
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
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
