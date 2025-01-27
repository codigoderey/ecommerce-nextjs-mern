import Head from "next/head";
import { Container } from "semantic-ui-react";
import Header from "./Header";


function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/public/styles.css" />
        <link rel="stylesheet" type="text/css" href="/public/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>ReactReserve</title>
      </Head>
      <Header />
      <Container text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
