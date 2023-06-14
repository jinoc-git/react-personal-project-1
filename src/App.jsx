import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "가나다",
      body: "가나다",
      isDone: false,
    },
  ]);

  return (
    <Layout>
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default App;
