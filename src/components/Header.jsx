import { useState } from "react";

function Header({ todos, setLsData }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const getLsNum = () => {
    const lsNumData = JSON.parse(localStorage.getItem("num"));
    if (lsNumData === null) return false;
    return lsNumData;
  };
  const setLsNum = (num) => {
    localStorage.setItem("num", JSON.stringify(num));
    setNextid(getLsNum);
  };
  const [nextid, setNextid] = useState(getLsNum() ? getLsNum() : 2);
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const bodyHandler = ({ target }) => {
    setBody(target.value);
  };

  const afterSubmit = () => {
    setTitle("");
    setBody("");
    setLsNum(nextid + 1);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.length === 0 || body.length === 0) {
      alert("제목과 내용을 입력해 주세요.");
      return false;
    }
    const data = {
      id: nextid,
      title,
      body,
      isDone: false,
    };
    setLsData([...todos, data]);
    afterSubmit();
  };

  return (
    <header>
      <div className="title">
        <h1>My Todo List</h1>
        <p>React</p>
      </div>
      <form
        name="todolist-form"
        className="todolist-form"
        onSubmit={onSubmitHandler}>
        <div>
          <label>
            제목
            <input value={title} onChange={titleHandler} />
          </label>
          <label>
            내용
            <input value={body} onChange={bodyHandler} />
          </label>
        </div>
        <button type="submit">추가하기</button>
      </form>
    </header>
  );
}

export default Header;
