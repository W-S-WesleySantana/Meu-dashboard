import { useApp } from "../../contexts/AppContext";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Container, Avatar, IconButton, RightSection, Title, Badge } from "./styles";

export function Header() {

  const { perfil, naoLidaCount} = useApp();

const iniciais = perfil?.nome 
  ? perfil.nome.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() 
  : "";

  
  return (
    <Container>
      <Title>Visão Geral</Title>

      <RightSection>
        <IconButton as={Link} to="/notificacoes" style={{position: 'relative'}}>
          <Bell size={20} />
          {naoLidaCount > 0 && <Badge>{naoLidaCount} </Badge>}
        </IconButton >

        <IconButton as={Link} to="/perfil">
        <Avatar>{iniciais}</Avatar>
        </IconButton>
      </RightSection>
    </Container>
  );
}

