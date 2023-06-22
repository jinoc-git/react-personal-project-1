import React from "react";
import { styled } from "styled-components";
import { StMain } from "./Main";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, deleteTodo } from "../redux/modules/changeTodosHandler";
import { useNavigate } from "react-router-dom";

function DetailMain({ id }) {
  const navigate = useNavigate();
  const todos = useSelector((state) => {
    return state.todosHandler;
  });
  const todo = todos.find((item) => {
    return item.id === id;
  });
  const goToHome = () => {
    navigate("/");
  };
  const dispatch = useDispatch();
  const deleteBtnHandler = () => {
    dispatch(deleteTodo({ todos, id }));
  };
  const chageStateBtnHandler = () => {
    dispatch(changeTodo({ todos, id }));
  };
  return (
    <StMain>
      <StSection>
        <StCard>
          <StCardHeader>
            <p>id: {id}</p>
            <Button colors={"teal"} eventFnc={goToHome}>
              홈으로
            </Button>
          </StCardHeader>
          <StCardBody>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </StCardBody>
          <StCardFooter>
            <Button
              colors={"red"}
              eventFnc={() => {
                goToHome();
                deleteBtnHandler();
              }}>
              삭제하기
            </Button>
            <Button
              colors={todo.isDone ? "yellow" : "green"}
              eventFnc={chageStateBtnHandler}>
              {todo.isDone ? "완료취소" : "완료"}
            </Button>
          </StCardFooter>
        </StCard>
      </StSection>
    </StMain>
  );
}

export default DetailMain;

const StSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
`;
const StCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 400px;
  padding: 20px;
  border: 3px solid teal;
  border-radius: 10px;
  box-shadow: rgba(0, 128, 128, 0.9) 0px 3px 8px;
`;
const StCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow: hidden;
`;
const StCardFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;
