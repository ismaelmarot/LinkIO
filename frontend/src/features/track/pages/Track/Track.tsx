import { useTrack } from './useTrack'
import { formatDistance, formatDuration } from '@/utils/geo'
import {
  Container,
  MapWrapper,
  PulseStyle,
  MetricsOverlay,
  MetricRow,
  MetricItem,
  MetricLabel,
  MetricValue,
  BottomBar,
  ButtonGroup,
  TrackButton,
  StopButton,
  GpsIndicator,
  GpsDot,
  GpsText,
  IdleHint,
} from './Track.styles'

export const Track = () => {
  const {
    status,
    metrics,
    elapsed,
    error,
    gpsQuality,
    position,
    handleStart,
    handlePause,
    handleResume,
    handleStop,
  } = useTrack()

  const quality = gpsQuality()
  const displayDuration = formatDuration(elapsed)

  return (
    <Container>
      <PulseStyle />
      <MapWrapper>
        <div id="track-map" style={{ width: "100%", height: "100%" }} />

       <GpsIndicator $quality={quality}>
         <GpsDot $quality={quality} />
         <GpsText>
           {quality === "searching"
             ? "Buscando GPS..."
             : quality === "good"
               ? "GPS buena"
               : quality === "weak"
                 ? "GPS débil"
                 : error
                   ? "Error GPS"
                   : "GPS perdida"}
         </GpsText>
       </GpsIndicator>

        {status !== "idle" && (
          <MetricsOverlay>
            <MetricRow>
              <MetricItem>
                <MetricValue>{formatDistance(metrics.distance)}</MetricValue>
                <MetricLabel>Distancia</MetricLabel>
              </MetricItem>
              <MetricItem>
                <MetricValue>{displayDuration}</MetricValue>
                <MetricLabel>Tiempo</MetricLabel>
              </MetricItem>
            </MetricRow>
            <MetricRow>
              <MetricItem>
                <MetricValue>
                  {metrics.avgSpeed > 0
                    ? `${metrics.avgSpeed.toFixed(1)} km/h`
                    : "—"}
                </MetricValue>
                <MetricLabel>Promedio</MetricLabel>
              </MetricItem>
              <MetricItem>
                <MetricValue>
                  {metrics.maxSpeed > 0
                    ? `${metrics.maxSpeed.toFixed(1)} km/h`
                    : "—"}
                </MetricValue>
                <MetricLabel>Máxima</MetricLabel>
              </MetricItem>
            </MetricRow>
          </MetricsOverlay>
        )}
      </MapWrapper>

      <BottomBar>
        {status === "idle" && (
       <ButtonGroup>
             <TrackButton
               $variant="start"
               onClick={handleStart}
               disabled={!position || !!error}
             >
               TRACK
             </TrackButton>
             {!position && !error && (
               <IdleHint>Esperando GPS...</IdleHint>
             )}
             {error && (
               <ButtonGroup>
                 <TrackButton $variant="start" onClick={handleStart} disabled={!position}>
                   REINTENTAR GPS
                 </TrackButton>
               </ButtonGroup>
             )}
           </ButtonGroup>
        )}

        {status === "tracking" && (
          <ButtonGroup>
            <TrackButton $variant="pause" onClick={handlePause}>
              PAUSE
            </TrackButton>
          </ButtonGroup>
        )}

        {status === "paused" && (
          <ButtonGroup>
            <TrackButton $variant="resume" onClick={handleResume}>
              RESUME
            </TrackButton>
            <StopButton onClick={handleStop}>STOP</StopButton>
          </ButtonGroup>
        )}
      </BottomBar>
    </Container>
  )
}