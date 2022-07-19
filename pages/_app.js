import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href={prefix+"/favicon.ico"} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
