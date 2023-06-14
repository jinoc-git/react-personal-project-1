export function DoneButton({ item, onChangeHandler }) {
  if(item.isDone === false) {
    return (
      <button
        className="done-btn"
        onClick={() => {
          onChangeHandler(item.id);
        }}>
        완료
      </button>
    );
  } else {
    return (
      <button
        className="done-btn"
        onClick={() => {
          onChangeHandler(item.id);
        }}>
        취소
      </button>
    );
  }
}

