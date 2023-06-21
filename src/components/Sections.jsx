import { styled } from "styled-components";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";

function Sections({ todos, onChangeHandler, removeHandler, section }) {
  const { h2, isDone } = section;
  const todoState = useSelector((state) => {
    return state.changeStateHandler;
  });
  console.log(todoState);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>{h2}</h2>
      <StDiv>
        {todoState
          .filter((item) => {
            return item.isDone === isDone;
          })
          .map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
                onChangeHandler={onChangeHandler}
                removeHandler={removeHandler}
              />
            );
          })}
      </StDiv>
    </section>
  );
}

export default Sections;

const StDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 0 20px;
`;
