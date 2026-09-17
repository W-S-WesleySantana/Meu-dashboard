import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { useApp } from '../../contexts/AppContext';
import { Layout, MainContent, Container } from '../Dashboard/styles';
import { CheckCircle } from 'lucide-react';

export function Notificacoes() {
  const { notificacoes, marcarComoLida } = useApp();

  return (
    <Layout>
      <Sidebar />
      <MainContent>
        <Header />
        <Container>
          <h2>Central de Notificações</h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
            {notificacoes.map(item => (
              <div 
                key={item.id} 
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: item.lida ? '#f8fafc' : '#e0e7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ color: item.lida ? '#64748b' : '#1e293b', fontWeight: item.lida ? 'normal' : 'bold' }}>
                  {item.texto}
                </span>
                {!item.lida && (
                  <button 
                    onClick={() => marcarComoLida(item.id)}
                    style={{ background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <CheckCircle size={16} /> Marcar como lida
                  </button>
                )}
              </div>
            ))}
          </div>
        </Container>
      </MainContent>
    </Layout>
  );
}