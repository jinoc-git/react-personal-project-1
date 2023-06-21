import React from "react";
import { styled } from "styled-components";

function Form({ onSubmitHandler, titleHandler, bodyHandler, title, body }) {
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