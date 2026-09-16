import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Layout, MainContent, Container } from '../Dashboard/styles';

export function Notificacoes() {
    return (
        <Layout>
            <Sidebar />
            <MainContent>
                <Header />
                <Container>
                    <h2>Central de Notificações</h2>
                    <p>Veja seus avisos e alertas recentes do seu painel</p>
                </Container>
            </MainContent>
        </Layout>
    );
}