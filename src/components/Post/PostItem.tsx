import React from 'react'
import { PostType } from '../../types/postType'
import { Content, DataPost, MinHeading, Span } from './style'

type Props = {
    data: PostType;
}

export const PostItem = ({ data }: Props) => {
    return (
        <DataPost>
            <MinHeading>{data.title}</MinHeading>
            <Span>#{data.id} - User: {data.userId}</Span>
            <Content>{data.body}</Content>
        </DataPost>
    )
}
