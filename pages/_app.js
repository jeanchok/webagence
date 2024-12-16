import Layout from "../components/Layout";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
