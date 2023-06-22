import { styled } from "styled-components";
import sectionList from "../sectionsList";
import Form from "./Form";
import Sections from "./Sections";

function Main() {
  return (
    <StMain>
      <Form />
      {sectionList.map((section) => {
        return <Sections key={section.id} section={section} />;
      })}
    </StMain>
  );
}

export default Main;

export const StMain = styled.main`
  margin-top: 64px;
`