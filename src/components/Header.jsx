import { useState } from "react";
import Form from "./Form";
import { styled } from "styled-components";

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
    <StHeader>
      <StTitleDiv>
        <h1>My Todo List</h1>
        <p>React</p>
      </StTitleDiv>
      <Form
        onSubmitHandler={onSubmitHandler}
        titleHandler={titleHandler}
        bodyHandler={bodyHandler}
        title={title}
        body={body}
      />
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

const StTitleDiv = styled.div`
  cursor: default;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
