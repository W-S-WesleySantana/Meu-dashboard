import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Layout, MainContent, Container} from '../Dashboard/styles';


export function Perfil() {
    return(
        <Layout>
            <Sidebar/>
            <MainContent>
                <Header/>
                <Container>
                    <h2>Meu Perfil</h2>
                    <p>Aqui voce pode edita seus dados pessoais</p>
                    
                </Container>
            </MainContent>
        </Layout>
    )
}