import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const MapWrapper = styled.div`
  flex: 1;
  position: relative;

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TrackButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
