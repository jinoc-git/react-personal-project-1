import { styled } from "styled-components";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function Sections({ section }) {
  const { h2, isDone } = section;
  const todos = useSelector((state) => {
    return state.todosHandler;
  });
  return (
    <section>
      <h2>{h2}</h2>
      <StDiv>
        {todos
          .filter((item) => {
            return item.isDone === isDone;
          })
          .map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
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
