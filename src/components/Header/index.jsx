import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Container, Avatar, IconButton, RightSection, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title>Visão Geral</Title>

      <RightSection>
        <IconButton as={Link} to={"notificacoes"}>
          <Bell size={20} />
        </IconButton>
        <Avatar as={Link} to={"/perfil"}>WS</Avatar>
      </RightSection>
    </Container>
  );
}

