import React, { useState } from 'react'
import gossip from '../../assets/gossip.png'
import { Hero, Box, BoxText, Button, GossipImage, Img, Label, PostArea } from './style'

type Props = {
  onAdd: ( title: string, piece: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState<string>('')
  const [piece, setPiece] = useState<string>('')


  const handleSubmitPost = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(title && piece) {
      onAdd(title, piece,)
      setTitle('');
      setPiece('');
    } else {
      alert('You need to fill out the fields')
    }
  }

  return (
    <PostArea>
      <Hero method='POST'>
        <h2>Enter a new Piece</h2>

        <Label htmlFor="title"> Enter the Title of your Feature
          <Box
            type="text"
            id="title"
            placeholder='Enter the Title of your Feature'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Label>
        <Label htmlFor="feature">
          Wrote a Piece
          <BoxText
            id="feature"
            placeholder='Wrote a Piece'
            value={piece}
            onChange={(e) => setPiece(e.target.value)}
          >
          </BoxText>
        </Label>
        <Button type="submit" value="Send Post" onClick={handleSubmitPost} />
      </Hero>
      <GossipImage>
        <Img src={gossip} alt="Gossip Piece" />
      </GossipImage>
    </PostArea>
  )
}
