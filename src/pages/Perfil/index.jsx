import { useState } from "react";
import {useApp} from '../../contexts/AppContext'
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Layout, MainContent, Container} from '../Dashboard/styles';


export function Perfil() {

    const {perfil, setPerfil} = useApp()
    const [form, setForm] = useState(perfil);

    const handleSubmit = (e) => {

        e.preventDefault()
        setPerfil(form)
        alert('Perfil atualizado com Sucesso!')
    };


   return (
    <Layout>
      <Sidebar />
      <MainContent>
        <Header />
        <Container>
          <h2 style={{ marginBottom: '16px' }}>Editar Perfil</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div>
              <label>Nome:</label>
              <input 
                type="text" 
                value={form.nome} 
                onChange={e => setForm({ ...form, nome: e.target.value })}
                style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Bio:</label>
              <textarea 
                value={form.bio} 
                onChange={e => setForm({ ...form, bio: e.target.value })}
                style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>E-mail:</label>
              <input 
                type="email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '6px', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Salvar Alterações
            </button>
          </form>
        </Container>
      </MainContent>
    </Layout>
  );
}