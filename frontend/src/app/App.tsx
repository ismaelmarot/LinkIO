import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../shared/components/Navbar";
import { OfflineBanner } from "../shared/components/OfflineBanner";
import { useNetworkStatus } from "../shared/hooks/useNetworkStatus";
import { sync } from "../lib/sync";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-bottom: 72px;

  @media (min-width: 768px) {
    padding-bottom: 0;
    padding-left: 80px;
  }
`;

const App = () => {
  const { isOnline } = useNetworkStatus();

  useEffect(() => {
    if (isOnline) {
      sync.processQueue();
    }
  }, [isOnline]);

  return (
    <Wrapper>
      {!isOnline && <OfflineBanner />}
      <Main>
        <Outlet />
        <Navbar />
      </Main>
    </Wrapper>
  );
};

export default App;
