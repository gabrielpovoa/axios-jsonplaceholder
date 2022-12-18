import styled from 'styled-components';


export const PostArea = styled.div`
    margin-block: 2rem;
    display: flex;
    flex-wrap: wrap;
`;

export const Hero = styled.form`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: .8rem;
`;

export const Box = styled.input`
    width: 32rem;
    background-color: #f2f2f2;
    padding: .8rem;
    border-radius: .4rem;  
    text-transform: none;
    font-weight: bold;

    &::placeholder {
        font-weight: normal;
    }

     @media screen and (max-width:450px) {
        width: 100%;
    }
`;

export const BoxText = styled.textarea`
    background-color: #f2f2f2;
    padding: .8rem;
    border-radius: .4rem;  
    resize: none;
    height: 15rem; 
    text-transform: none;
`;

export const Button = styled.input`
    padding: .8rem;
    border-radius: .4rem;
    background-color: #333280;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: #333240;
    }
`;

export const GossipImage = styled.div`
    width: 60rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:769px) {
        width: 20rem;
    }
`;

export const Img = styled.img`
    max-width: 100%;
    object-fit: cover;
    pointer-events: none;
`;
