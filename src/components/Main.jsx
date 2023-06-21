import sectionList from "../sectionsList";
import Sections from "./Sections";

function Main({ todos, setLsData }) {
  const onChangeHandler = (id) => {
    const chageTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setLsData(chageTodo);
  };

  const removeHandler = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setLsData(newTodos);
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
