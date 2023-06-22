import Button from "./Button";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, deleteTodo } from "../redux/modules/changeTodosHandler";
import { Link } from "react-router-dom";

function Todo({ item }) {
  const todos = useSelector((state) => {
    return state.todosHandler;
  });
  const dispatch = useDispatch();
  const deleteBtnHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo({ todos, id: item.id }));
  };
  const chageStateBtnHandler = (e) => {
    e.preventDefault();
    dispatch(changeTodo({ todos, id: item.id }));
  };
  return (
    <Wrapper>
      <StLink to={`/todo/${item.id}`}>
        <StH3>{item.title}</StH3>
        <StP>{item.body}</StP>
        <StBtnWrapper>
          <Button colors={"red"} eventFnc={deleteBtnHandler}>
            삭제하기
          </Button>
          <Button
            colors={item.isDone ? "yellow" : "green"}
            eventFnc={chageStateBtnHandler}>
            {item.isDone ? "취소" : "완료"}
          </Button>
        </StBtnWrapper>
      </StLink>
    </Wrapper>
  );
}

export default Todo;

const Wrapper = styled.div`
  border: 3px solid teal;
  box-shadow: rgba(0, 255, 191, 0.39) 0px 3px 8px;
  border-radius: 15px;
`;
const StLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 275px;
  height: 200px;
  padding: 20px;
  color: #fff;
`;
const StH3 = styled.h3`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StP = styled.p`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const StButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: #fff;
  border: 2px solid
    ${({ colors }) => {
      switch (colors) {
        case "red":
          return "rgba(255, 0, 0, 1)";
        case "green":
          return "rgba(0, 202, 0, 1)";
        case "yellow":
          return "rgba(255, 255, 0, 1)";
        default:
          return "rgba(0, 128, 128, 1)";
      }
    }};
  border-radius: 10px;
  box-shadow: ${({ colors }) => {
    switch (colors) {
      case "red":
        return "rgba(255, 0, 0, 0.6) 0px 3px 8px";
      case "green":
        return "rgba(0, 255, 0, 0.24) 0px 3px 8px";
      case "yellow":
        return "rgba(255, 255, 0, 0.4) 0px 3px 8px";
      default:
        return "rgba(0, 128, 128, 0.5) 0px 3px 8px;";
    }
  }};
  background-color: ${({ colors }) =>
    colors === "teal" ? "teal" : "transparent"};
`;
