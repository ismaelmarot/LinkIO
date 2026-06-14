import { FiUser, FiMoon, FiGlobe, FiInfo } from 'react-icons/fi'
import { useSettings } from './useSettings'
import {
  Container,
  Header,
  Title,
  OptionCard,
  OptionLeft,
  OptionIcon,
  OptionInfo,
  OptionLabel,
  OptionDescription,
  Toggle,
  Badge,
} from './Settings.styles'

export const Settings = () => {
  const { mode, handleToggleTheme } = useSettings()

  return (
    <Container>
      <Header>
        <Title>Configuración</Title>
      </Header>

      <OptionCard onClick={() => {}}>
        <OptionLeft>
          <OptionIcon><FiUser size={18} /></OptionIcon>
          <OptionInfo>
            <OptionLabel>Editar perfil</OptionLabel>
            <OptionDescription>Nombre, email, foto</OptionDescription>
          </OptionInfo>
        </OptionLeft>
      </OptionCard>

      <OptionCard onClick={handleToggleTheme}>
        <OptionLeft>
          <OptionIcon><FiMoon size={18} /></OptionIcon>
          <OptionInfo>
            <OptionLabel>Modo oscuro</OptionLabel>
            <OptionDescription>
              {mode === "dark" ? "Activado" : "Desactivado"}
            </OptionDescription>
          </OptionInfo>
        </OptionLeft>
        <Toggle $active={mode === 'dark'} />
      </OptionCard>

      <OptionCard onClick={() => {}}>
        <OptionLeft>
          <OptionIcon><FiGlobe size={18} /></OptionIcon>
          <OptionInfo>
            <OptionLabel>Idioma</OptionLabel>
            <OptionDescription>Español</OptionDescription>
          </OptionInfo>
        </OptionLeft>
      </OptionCard>

      <OptionCard onClick={() => {}}>
        <OptionLeft>
          <OptionIcon><FiInfo size={18} /></OptionIcon>
          <OptionInfo>
            <OptionLabel>Información de la app</OptionLabel>
            <OptionDescription>Versión 1.0.0</OptionDescription>
          </OptionInfo>
        </OptionLeft>
        <Badge>v1.0.0</Badge>
      </OptionCard>
    </Container>
  )
}