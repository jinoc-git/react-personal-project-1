import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const getLsData = () => {
    const lsData = JSON.parse(localStorage.getItem("todo"));
    if (lsData === null) return false;
    return lsData;
  };
  const setLsData = (data) => {
    localStorage.setItem("todo", JSON.stringify(data));
    setTodos(getLsData());
  };
  const firstData = [
    {
      id: 1,
      title: "리액트 강의 복습",
      body: "리액트 입문 강의 복습하기",
      isDone: false,
    },
  ];
  const [todos, setTodos] = useState(getLsData() ? getLsData() : firstData);
  return (
    <Layout>
      <Header todos={todos} setLsData={setLsData} />
      <Main todos={todos} setLsData={setLsData} />
    </Layout>
  );
}

export default App;
