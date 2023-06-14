import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sections from "./components/Sections";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "가나다",
      body: "가나다",
      isDone: false,
    },
  ]);

  return (
    <div className="container">
      <Header todos={todos} setTodos={setTodos} />
      <main>
        <Sections todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
