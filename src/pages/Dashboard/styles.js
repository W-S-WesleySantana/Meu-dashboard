import styled from "styled-components";


export const Layout = styled.div`
display: flex;
min-height: 100vh;
`

export const MainContent = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`

export const Container = styled.main`
padding: 32px;
`


export const ProfileCard = styled.div`
background-color: #fff;
padding: 24px;
border-radius: 12px;
border: 1px solid #e2e8f0;
align-items: center;
gap:16px;
margin-bottom: 24px;

`

export const AvatarImage = styled.div`
width: 64px;
height: 64px;
border-radius:50% ;
`

export const UseInfo = styled.div`
h2{
    font-size:1.25rem;
    color: #0f172a;
}

p{
    color: #64748b;
    font-size: 0%.875rem;
}
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 24px;
`

export const StatCard = styled.div`
background-color: #fff;
padding: 24px;
border-radius: 12px;
border: 1px solid #e2e8f0;
display: flex;
align-items: center;
justify-content: space-between;

p{
    font-size: 1.875rem;
    font-weight: bold;
    color: #0f172a;
}

`



export const IconWarapper = styled.div`

padding: 12px;
border-radius: 8px;
background-color: ${props => props.$bgColor || '#f1f579'};
color: ${props => props.color || '#0f172a'};

`