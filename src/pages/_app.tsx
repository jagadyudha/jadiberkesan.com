import type { AppProps } from 'next/app';
import Layout from '@/components/layoutComponents/landingLayout';
import { dataSeo, dataOpenGraph, dataCardTwitter } from '@/lib/dummy';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import nprogress from 'nprogress';
import Router from 'next/router';

// style
import '../styles/globals.css';
import '../styles/mockup.css';
import '../styles/device.css';
import '../styles/nprogress.css';
import '../styles/template.css';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  // nprogress
  Router.events.on('routeChangeStart', nprogress.start);
  Router.events.on('routeChangeError', nprogress.done);
  Router.events.on('routeChangeComplete', nprogress.done);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        ></meta>
      </Head>
      <DefaultSeo
        title={dataSeo.title}
        description={dataSeo.description}
        canonical={`${process.env.NEXT_PUBLIC_URL}${appProps.router.asPath}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_URL}${appProps.router.asPath}`,
          ...dataOpenGraph,
        }}
        twitter={dataCardTwitter}
      />
      <Layout key={appProps.router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
