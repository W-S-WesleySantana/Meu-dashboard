import axios from "axios";
import { BookOpen, User, Search } from "lucide-react";
import { Header } from "../../components/Header"; 
import { Sidebar } from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { AvatarImage, Container, Grid, IconWarapper, Layout, MainContent, ProfileCard, StatCard } from "./styles";

export function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("octocat");
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        const controller = new AbortController();

        async function fetchUserData() {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`, { signal: controller.signal });
                setUser(response.data);
            } catch (error) {
                if (error.name !== 'CanceledError') {
                    console.error('Erro ao buscar usuário:', error);
                    setUser(null);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
        return () => controller.abort();
    }, [username]);

    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            setUsername(searchQuery.trim());
        }
    }

    return (
       <Layout>
        <Sidebar/>
        <MainContent>
            <Header/>
            <Container>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    <input 
                        type="text" 
                        placeholder="Digite o usuário do GitHub..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', flex: 1 }}
                    />
                    <button type="submit" style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Search size={18} /> Buscar
                    </button>
                </form>

                {loading ? (
                    <p>Carregando...</p>
                ) : user ? (
                    <>
                    <ProfileCard>
                        <AvatarImage src={user.avatar_url} alt={user.name || user.login} />
                        <div>
                            <h2>{user.name || user.login}</h2>
                            <p>{user.bio || "Sem biografia disponível."}</p>
                        </div>
                    </ProfileCard>

                    <Grid>
                        <StatCard>
                            <div>
                                <span>Seguidores</span>
                                <p>{user.followers}</p>
                            </div>
                            <IconWarapper $bgColor="#e0e7ff" color="#4f46e5">
                                <User size={24} />
                            </IconWarapper>
                        </StatCard>

                        <StatCard>
                            <div>
                                <span>Repositórios</span>
                                <p>{user.public_repos}</p>
                            </div>
                            <IconWarapper>
                                <BookOpen size={24}/>
                            </IconWarapper>
                        </StatCard>
                    </Grid>
                    </>
                ) : (
                    <p>Usuário não encontrado.</p>
                )}
            </Container>
        </MainContent>
       </Layout>
    );
}