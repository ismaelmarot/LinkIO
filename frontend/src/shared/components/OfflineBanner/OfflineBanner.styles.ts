import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.warning};
  color: #121212;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  z-index: 200;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Text = styled.span`
  text-align: center;
`;
