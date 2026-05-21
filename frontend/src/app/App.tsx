import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../shared/components/Navbar";

const Main = styled.main`
  padding-bottom: 72px;

  @media (min-width: 768px) {
    padding-bottom: 0;
    padding-left: 80px;
  }
`;

const App = () => {
  return (
    <Main>
      <Outlet />
      <Navbar />
    </Main>
  );
};

export default App;
