import { styled } from "styled-components";
import Todo from "./Todo";

function Sections({ todos, onChangeHandler, removeHandler, section }) {
  const { name, h2, isDone } = section;

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
