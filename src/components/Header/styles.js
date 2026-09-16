import styled from "styled-components";

export const Container = styled.header` 
height: 64px;
border-bottom: 1px solid #e2e8f0;
background-color: #fff;
padding: 0 32px;
display: flex ;
align-items: center;
justify-content: space-between;
`

export const Title = styled.h1`
font-size:1.125rem;
font-weight: 600;
color: #1e293b;
`


export const RightSection = styled.div`

display: flex;
align-items: center;
gap: 16px;

`

export const IconButton = styled.button`
background: transparent;
border: none;
padding: 8px;
border-radius: 50%;
color: #64748b;
display: flex;

&:hover{
    background-color: #f1f5f9;
}
`


export const Avatar = styled.div`
width: 32px;
height: 32px;
border-radius:50% ;
background-color: #4f46e5;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`