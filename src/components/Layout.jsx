import { styled } from "styled-components";

const StLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;
