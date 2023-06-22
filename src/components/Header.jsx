import Form from "./Form";
import { styled } from "styled-components";

function Header() {
  return (
    <StHeader>
      <StTitleDiv>
        <h1>My Todo List</h1>
        <p>React</p>
      </StTitleDiv>
      <Form />
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
