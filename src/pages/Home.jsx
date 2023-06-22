import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </>
  );
}

export default Home;
