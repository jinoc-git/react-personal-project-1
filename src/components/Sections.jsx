import Todo from "./Todo";

function Sections({ todos, onChangeHandler, removeHandler, section }) {
  const { name, h2, isDone } = section;

  return (
    <section className={name + "-wrap"}>
      <h2>{h2}</h2>
      <div className={name}>
        {todos
          .filter((item) => {
            return item.isDone === isDone;
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

export default Sections;
