import { useState } from "react";
import "./App.css";
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
    <div className="container">
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
