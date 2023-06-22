import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import Header from "../components/Header";
import DetailMain from "../components/DetailMain";
import { useParams } from "react-router-dom";

function DetailTodo() {
  const { id } = useParams();

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Layout>
        <Header />
        <DetailMain id={id} />
      </Layout>
    </>
  );
}

export default DetailTodo;
