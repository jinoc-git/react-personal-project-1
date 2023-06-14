import { DoneButton } from "./Button";

function Todo({ item, onChangeHandler, removeHandler }) {
  return (
    <div className="box" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <div>
        <button
          className="delete-btn"
          onClick={() => {
            removeHandler(item.id);
          }}>
          삭제하기
        </button>
        <DoneButton item={item} onChangeHandler={onChangeHandler} />
      </div>
    </div>
  );
}

export default Todo;
