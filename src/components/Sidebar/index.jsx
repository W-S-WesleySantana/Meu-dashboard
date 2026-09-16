import { Link } from "react-router-dom";
import { LayoutDashboard, User, Settings} from "lucide-react";
import { Container,Logo, Nav, NavLink } from "./styles";


export function Sidebar(){

    return(

        <Container>
        
        <Logo> Meu app Pro </Logo>

            <Nav>

                <NavLink as={Link} to={"/"}>

                    <LayoutDashboard size={20}/>
                    <span>Dashboard</span>

                </NavLink>

                <NavLink as={Link} to={"/perfil"}>
                <User size={20}/>
                <span>Perfil</span>

                </NavLink>
            

                <NavLink as={Link} to={"/configuracoes"}>
                <Settings size={20}/>
                <span>Configuraçoes</span>
                </NavLink>

            </Nav>

        </Container>

    )
}