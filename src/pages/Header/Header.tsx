import React from 'react'
import { PostType } from '../../types/postType';
import { Container, Logo, Img, Text } from './style'


export const Header = () => {
    return <>
        <Container>
            <Logo>
                <Img>😶‍🌫️</Img>
            </Logo>
            <Text>Juciyp <span>🍹</span> Gossipy</Text>
        </Container>
    </>
}
