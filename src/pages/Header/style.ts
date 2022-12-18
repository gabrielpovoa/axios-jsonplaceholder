import styled from 'styled-components';

export const Container = styled.header`
    background-color: #FFF;
    padding: 2rem 5%;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    display: flex;
    align-items: flex-end;
    gap: .8rem;
`;

export const Logo = styled.div`
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;
export const Img = styled.div`
    font-size: 4rem;
    cursor: pointer;
`;
export const Text = styled.h3`
    font-weight: bolder;
    color: #778;
    letter-spacing: .1rem;
    border-bottom: #778 .2rem solid;
    cursor: pointer;

    & span {
        font-size: 2.4rem;
    }
`;