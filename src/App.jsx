import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/styles/global';


import { Dashboard } from './pages/Dashboard';
import { Perfil } from './pages/Perfil';
import { Configuracoes } from './pages/Configuracoes';
import { Notificacoes } from './pages/Notificacoes';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/configuracoes' element={<Configuracoes />} />
        <Route path='/notificacoes' element={<Notificacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;