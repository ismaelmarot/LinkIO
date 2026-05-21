import { useLocation, useNavigate } from "react-router-dom";
import { FiGrid, FiUser, FiCalendar, FiMapPin, FiSettings } from "react-icons/fi";
import { Container, NavItem, Icon, Label } from "./Navbar.styles";

const items = [
  { path: "/dashboard", label: "Dashboard", icon: FiGrid },
  { path: "/profile", label: "Perfil", icon: FiUser },
  { path: "/events", label: "Evento", icon: FiCalendar },
  { path: "/track", label: "Track", icon: FiMapPin },
  { path: "/settings", label: "Configuración", icon: FiSettings },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {items.map(({ path, label, icon: IconComponent }) => (
        <NavItem
          key={path}
          $active={location.pathname === path}
          onClick={() => navigate(path)}
        >
          <Icon as={IconComponent} $active={location.pathname === path} />
          <Label>{label}</Label>
        </NavItem>
      ))}
    </Container>
  );
};
