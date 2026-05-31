import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  padding-bottom: 72px;

  @media (min-width: 768px) {
    padding-bottom: 0;
    padding-left: 80px;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.textMuted};
`