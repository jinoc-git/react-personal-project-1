import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/changeTodosHandler";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const bodyHandler = ({ target }) => {
    setBody(target.value);
  };
  const dispatch = useDispatch();

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
    dispatch(createTodo(data));
    afterSubmit();
  };
  
  return (
    <StForm name="todolist-form" onSubmit={onSubmitHandler}>
      <div>
        <StLable>
          제목
          <StInput value={title} onChange={titleHandler} />
        </StLable>
        <StLable>
          내용
          <StInput value={body} onChange={bodyHandler} />
        </StLable>
      </div>
      <StSubmitBtn>추가하기</StSubmitBtn>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 20px;
  border: 3px solid teal;
  border-radius: 20px;
  box-shadow: rgba(0, 128, 128, 0.9) 0px 3px 8px;
  background-color: rgba(0, 128, 128, 0.2);
`;

const StLable = styled.label`
  font-weight: bold;
  margin-right: 20px;
`;

const StInput = styled.input`
  width: 250px;
  height: 40px;
  margin-left: 20px;
  padding-left: 15px;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: teal;
`

const StSubmitBtn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: teal;
`