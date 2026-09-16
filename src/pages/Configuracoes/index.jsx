import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Layout, MainContent, Container} from '../Dashboard/styles';


export function Configuracoes() {
    return(
        <Layout>
            <Sidebar/>
            <MainContent>
                <Header/>
                <Container>
                    <h2>Configuração do Sistema</h2>
                    <p>Altere temas, senhas, e preferências do aplicativo.</p>
                    
                </Container>
            </MainContent>
        </Layout>
    )
}