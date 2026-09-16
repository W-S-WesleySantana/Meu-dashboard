import styled from "styled-components";

export const Container = styled.aside`

width: 250px;
background-color: #0d172a;
color: #FFF;
height: 100vh;
padding: 24px;
display: flex;
flex-direction: column;
gap: 24px;

`

export const Logo = styled.h2`
font-size: 1.25rem;
font-weight: bold;
color: #818cf8;

`

export const Nav = styled.nav`
display: flex;
flex-direction: column;
gap: 16px;
`

export const NavLink = styled.a`
display: flex;
align-items: center;
gap: 12px;
color: #94a3b8;
font-size: 0.95rem;

&:hover{
    color: #fff;
}

`






