import { useEventNew } from "./useEventNew";
import {
  Container,
  Header,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Row,
  MapWrapper,
  PhotoButton,
  PhotoPreview,
  PhotoPreviewImg,
  ToggleRow,
  ToggleLabel,
  ToggleSwitch,
  SubmitButton,
} from "./EventNew.styles";

export const EventNew = () => {
  const {
    form,
    setForm,
    handleLocationChange,
    searching,
    photoPreview,
    handlePhotoChange,
    handleSubmit,
    saving,
  } = useEventNew();

  return (
    <Container>
      <Header>
        <Title>Nuevo Evento</Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Título</Label>
          <Input
            placeholder="Nombre del evento"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Descripción</Label>
          <TextArea
            placeholder="Descripción del evento"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label>Fecha</Label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>Hora</Label>
            <Input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Lugar</Label>
          <Input
            placeholder="Buscar lugar en el mapa"
            value={form.location}
            onChange={(e) => handleLocationChange(e.target.value)}
          />
          {searching && <span style={{ fontSize: 12, color: "#A0A0A0" }}>Buscando...</span>}
        </InputGroup>

        <InputGroup>
          <Label>Ubicación en el mapa</Label>
          <MapWrapper>
            <div id="event-map" style={{ width: "100%", height: "100%" }} />
          </MapWrapper>
          {form.latitude && form.longitude && (
            <span style={{ fontSize: 12, color: "#A0A0A0" }}>
              {form.latitude.toFixed(5)}, {form.longitude.toFixed(5)}
            </span>
          )}
        </InputGroup>

        <InputGroup>
          <Label>Foto</Label>
          {photoPreview ? (
            <PhotoPreview>
              <PhotoPreviewImg src={photoPreview} alt="Preview" />
              <PhotoButton type="button" onClick={() => {
                setForm({ ...form, photoUrl: "" });
                handlePhotoChange({ target: { files: null } } as any);
              }}>
                Quitar
              </PhotoButton>
            </PhotoPreview>
          ) : (
            <PhotoButton as="label" htmlFor="photo-input">
              Subir foto
              <input
                id="photo-input"
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoChange}
              />
            </PhotoButton>
          )}
        </InputGroup>

        <ToggleRow>
          <ToggleLabel>Guardar como plantilla</ToggleLabel>
          <ToggleSwitch
            $active={form.isTemplate}
            onClick={() => setForm({ ...form, isTemplate: !form.isTemplate })}
          />
        </ToggleRow>

        <SubmitButton type="submit" disabled={saving}>
          {saving ? "Guardando..." : "Crear Evento"}
        </SubmitButton>
      </Form>
    </Container>
  );
};
