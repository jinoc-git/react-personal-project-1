import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <StHeader>
      <StTitleNav>
        <h1 onClick={goToHome}>My Todo List</h1>
        <p>React</p>
      </StTitleNav>      
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(25, 25, 25);
`;

const StTitleNav = styled.nav`
  cursor: default;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
