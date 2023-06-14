import Todo from "./Todo";

function Done({ todos, onChangeHandler, removeHandler }) {
  return (
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
  );
}

export default Done;
