import React from 'react'
import { PostType } from '../../types/postType';
import { Container, Logo, Img, Text } from './style'


export const Header = () => {
    return <>
        <Container>
            <Logo>
                <Img>πΆβπ«οΈ</Img>
            </Logo>
            <Text>Juciyp <span>πΉ</span> Gossipy</Text>
        </Container>
    </>
}
