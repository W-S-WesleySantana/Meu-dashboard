import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({children}) {

    const [perfil, setPerfil] = useState({
        nome: 'Wesley Santana',
        bio:'Desenvolvedor React em formaçao',
        email: 'Wesleymemo7@gmail.com'
    })

    const [ isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(prev => !prev);

    const [notificacoes, setNotificacoes] = useState([
        {id: 1, texto: 'Bem-vindo ao seu novo Dashboard!', lida: false},
        {id: 2, texto: 'Sua API respondeu com sucesso', lida: false},
        {id: 3, texto: 'Perfil atualizado recentemente', lida: false}
    ]);

    const marcarComoLida = (id) => {
        setNotificacoes(prev => prev.map(item => item.id === id
                ? {...item, lida: true}
                : item
        ));
    };

    const naoLidaCount = notificacoes.filter(n => !n.lida).length;

    return(
        <AppContext.Provider value={{
            perfil,
            setPerfil,
            isDarkMode,
            toggleTheme,
            notificacoes,
            marcarComoLida,
            naoLidaCount
        }}>
            {children}
        </AppContext.Provider>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);

