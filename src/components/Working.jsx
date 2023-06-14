import Todo from "./components/Todo";

function Working({ todos, setTodos }) {
  return (
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
  );
}
