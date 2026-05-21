import { useTrack } from "./useTrack";
import { Container, MapWrapper, BottomBar, TrackButton } from "./Track.styles";

export const Track = () => {
  const { isTracking, handleToggleTrack } = useTrack();

  return (
    <Container>
      <MapWrapper>
        <div id="track-map" style={{ width: "100%", height: "100%" }} />
      </MapWrapper>
      <BottomBar>
        <TrackButton onClick={handleToggleTrack}>
          {isTracking ? "STOP" : "TRACK"}
        </TrackButton>
      </BottomBar>
    </Container>
  );
};
