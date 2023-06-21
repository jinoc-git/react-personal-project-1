import { useState } from "react";
import Form from "./Form";
import { styled } from "styled-components";
import uuid from "react-uuid";

function Header({ todos, setLsData }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const bodyHandler = ({ target }) => {
    setBody(target.value);
  };

  const afterSubmit = () => {
    setTitle("");
    setBody("");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.length === 0 || body.length === 0) {
      alert("제목과 내용을 입력해 주세요.");
      return false;
    }
    const data = {
      id: uuid(),
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
