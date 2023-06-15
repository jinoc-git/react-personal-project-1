import { useState } from "react";

function Header({ todos, setLsData }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const getLsNum = () => {
    const lsNumData = JSON.parse(localStorage.getItem("num"));
    return lsNumData;
  };
  const setLsNum = (num) => {
    localStorage.setItem("num", JSON.stringify(num));
    setNextid(getLsNum);
  };
  const dataNumCount = () => {
    let count = getLsNum();
    if (count === null) return 0;
    return count.length;
  };
  const [nextid, setNextid] = useState(dataNumCount() !== 0 ? getLsNum() : 2);
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyHandler = (event) => {
    setBody(event.target.value);
  };

  const afterSubmit = () => {
    setTitle("");
    setBody("");
    setLsNum(nextid + 1);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
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
      <form name="todolist-form" className="todolist-form">
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
        <button onClick={onSubmitHandler}>추가하기</button>
      </form>
    </header>
  );
}

export default Header;
