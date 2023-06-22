import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, deleteTodo } from "../redux/modules/changeTodosHandler";

function Todo({ item }) {
  const todos = useSelector((state) => {
    return state.todosHandler;
  });
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <BtnWrapper>
        <Button
          color={"red"}
          onClick={() => {
            dispatch(deleteTodo({ todos, id: item.id }));
          }}>
          삭제하기
        </Button>
        <Button
          color={item.isDone ? "yellow" : "green"}
          onClick={() => {
            dispatch(changeTodo({ todos, id: item.id }));
          }}>
          {item.isDone ? "취소" : "완료"}
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

export default Todo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 275px;
  height: 200px;
  padding: 20px;
  border: 3px solid teal;
  box-shadow: rgba(0, 255, 191, 0.39) 0px 3px 8px;
  border-radius: 15px;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 50%;
  height: 40px;
  color: #fff;
  border: 2px solid
    ${({ color }) => {
      switch (color) {
        case "red":
          return "rgba(255, 0, 0, 1)";
        case "green":
          return "rgba(0, 202, 0, 1)";
        case "yellow":
          return "rgba(255, 255, 0, 1)";
      }
    }};
  border-radius: 10px;
  box-shadow: ${({ color }) => {
    switch (color) {
      case "red":
        return "rgba(255, 0, 0, 0.6) 0px 3px 8px";
      case "green":
        return "rgba(0, 255, 0, 0.24) 0px 3px 8px";
      case "yellow":
        return "rgba(255, 255, 0, 0.4) 0px 3px 8px";
    }
  }};
  background-color: transparent;
`;
