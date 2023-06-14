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
        <button
          className="done-btn"
          onClick={() => {
            onChangeHandler(item.id);
          }}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
