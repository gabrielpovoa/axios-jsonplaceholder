import styled from 'styled-components';

export const Container = styled.main`
    padding: 2rem 5%;
`;

export const Post = styled.section`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(50rem, 1fr));
    gap: 4rem;

    @media screen and (max-width:450px){
        grid-template-columns:repeat(auto-fit, minmax(30rem, 1fr));
    }
`;


