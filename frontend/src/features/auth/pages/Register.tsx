import { SignUp } from "@clerk/clerk-react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Register = () => {
  return (
    <Wrapper>
      <SignUp 
        signInUrl="/login"
        fallbackRedirectUrl="/dashboard"
      />
    </Wrapper>
  );
};
