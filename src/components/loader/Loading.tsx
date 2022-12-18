import React from 'react'
import { Container, Hero } from './style'
import load from '../../assets/load.gif';
import noPost from '../../assets/noPost.png'

export const Loading = () => {
  return (
    <Container>
        <img src={load} alt="" />
    </Container>
  )
}

export const NoPost = () => {
    return (
        <Hero>
            <img src={noPost} alt="" />
            <h2>There's no Post to be shown here</h2>
        </Hero>
    )
}
