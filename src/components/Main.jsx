import sectionList from "../sectionsList";
import Sections from "./Sections";

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
    setTodos(chageTodo);
  };

  const removeHandler = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <main>
      {sectionList.map((section) => {
        return (
          <Sections
            key={section.id}
            todos={todos}
            onChangeHandler={onChangeHandler}
            removeHandler={removeHandler}
            section={section}
          />
        );
      })}
    </main>
  );
}

export default Main;
