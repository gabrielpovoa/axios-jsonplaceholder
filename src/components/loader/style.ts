import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  pointer-events: none;
  background-color: #f1f2f3;
`;

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    pointer-events: none;
    width: 50rem;
    height: 50rem;
    max-width: 100%;
  & img {
    width: 100%;
  }
  & h2 {
    font-size: 4rem;
    text-align: center;
}
`;
