import { useState } from "react";

function Header({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [nextid, setNextid] = useState(2)
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
      id: setNextid(nextid + 1),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, data]);
    setTitle("");
    setBody("");
  };
  return (
    <header>
      <div className="title">
        <h1>My Todo List</h1>
        <p>React</p>
      </div>
      <form name="tofolist-form" className="tofolist-form">
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
