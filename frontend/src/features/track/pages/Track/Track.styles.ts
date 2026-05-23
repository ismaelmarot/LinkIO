import styled, { css, createGlobalStyle, keyframes } from "styled-components";

const pulseKeyframes = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
`;

export const PulseStyle = createGlobalStyle`
  .gps-marker {
    animation: ${pulseKeyframes} 2s ease-in-out infinite;
  }
`;

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

export const MetricsOverlay = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  z-index: 10;
`;

export const MetricRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MetricItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MetricLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const MetricValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const GpsIndicator = styled.div<{ $quality: "good" | "weak" | "lost" | "searching" }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: rgba(0, 0, 0, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  z-index: 10;
`;

export const GpsDot = styled.span<{ $quality: "good" | "weak" | "lost" | "searching" }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $quality, theme }) =>
    $quality === "good"
      ? theme.colors.gpsActive
      : $quality === "weak"
      ? theme.colors.gpsWeak
      : $quality === "lost"
      ? theme.colors.gpsLost
      : theme.colors.textMuted};
`;

export const GpsText = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TrackButton = styled.button<{
  $variant: "start" | "pause" | "resume";
  disabled?: boolean;
}>`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.2s, opacity 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  background: ${({ $variant, theme }) =>
    $variant === "start" || $variant === "resume"
      ? theme.colors.primary
      : theme.colors.gpsActive};

  color: ${({ theme }) => theme.colors.textInverse};

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  ${({ $variant }) =>
    $variant === "pause" &&
    css`
      animation: pulse 2s infinite;

      @keyframes pulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.5);
        }
        50% {
          box-shadow: 0 0 0 12px rgba(46, 204, 113, 0);
        }
      }
    `}
`;

export const StopButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IdleHint = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;
