import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { useApp } from '../../contexts/AppContext';
import { Layout, MainContent, Container } from '../Dashboard/styles';
import { Moon, Sun } from 'lucide-react';

export function Configuracoes() {
  const { isDarkMode, toggleTheme } = useApp();

  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <Header />
        <Container>
          <h2>Configurações do Sistema</h2>
          <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Aparência da Aplicação:</span>
            <button 
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: isDarkMode ? '#3b82f6' : '#0f172a',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              {isDarkMode ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
            </button>
          </div>
        </Container>
      </MainContent>
    </Layout>
  );
}