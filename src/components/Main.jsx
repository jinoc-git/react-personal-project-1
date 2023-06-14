import Working from "./Working";
import Done from "./Done";

function Main({ todos, setTodos }) {
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
    <main>
      <Working
        todos={todos}
        onChangeHandler={onChangeHandler}
        removeHandler={removeHandler}
      />
      <Done
        todos={todos}
        onChangeHandler={onChangeHandler}
        removeHandler={removeHandler}
      />
    </main>
  );
}

export default Main;
