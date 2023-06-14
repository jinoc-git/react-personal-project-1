import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "가나다",
      body: "가나다",
      isDone: false,
    },
  ]);

  const onChangeHandler = (id) => {
    const chageTodo = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.isDone === false) {
          todo.isDone = true;
        } else {
          todo.isDone = false;
        }
      }
      return todo;
    });
    setTodos([...chageTodo]);
  };

  const removeHandler = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Header todos={todos} setTodos={setTodos} />
      <main>
        <section className="working-box-wrap">
          <h2>Working</h2>
          <div className="working-box">
            {todos
              .filter((item) => {
                return item.isDone === false;
              })
              .map((item) => {
                return (
                  <Todo
                    key={item.id}
                    item={item}
                    onChangeHandler={onChangeHandler}
                    removeHandler={removeHandler}
                  />
                );
              })}
          </div>
        </section>
        <section className="done-box-wrap">
          <h2>Done</h2>
          <div className="done-box">
            {todos
              .filter((item) => {
                return item.isDone === true;
              })
              .map((item) => {
                return (
                  <Todo
                    key={item.id}
                    item={item}
                    onChangeHandler={onChangeHandler}
                    removeHandler={removeHandler}
                  />
                );
              })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
