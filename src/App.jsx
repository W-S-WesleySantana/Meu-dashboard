import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppProvider, useApp } from './contexts/AppContext';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Dashboard } from './pages/Dashboard';
import { Perfil } from './pages/Perfil';
import { Configuracoes } from './pages/Configuracoes';
import { Notificacoes } from './pages/Notificacoes';

// Componente interno para consumir o tema dinamicamente
function AppRoutes() {
  const { isDarkMode } = useApp();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
      </Routes>
    </ThemeProvider>
  );
}

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

