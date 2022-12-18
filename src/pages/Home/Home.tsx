import { useEffect, useState } from 'react'
import { API } from '../../api'
import { Loading as Loader, NoPost } from '../../components/loader/Loading'
import { PostItem } from '../../components/Post/PostItem'
import { PostForm } from '../../components/PostForm/PostForm'
import { PostType } from '../../types/postType'
import { Header } from '../Header/Header'
import { Container, Post } from './style'


export const Home = () => {
  const [post, setPost] = useState<PostType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => { loadPost() }, [])

  const loadPost = async () => {
    setLoading(true);
    let response = await API.getAllPosts();
    setPost(response);
    setLoading(false);
  }

  const handleAddPost = async (title: string, piece: string) => {
    let json = await API.addNewPost(title, piece, 1)
    if (json.id) {
      console.log(`${title} - ${piece}`)
      return alert('POST WAS ADDED 🍹')
    } else {
      alert('WE GOT AN ERROR 😶‍🌫️')
    }
  }

  return <>

    <Header />

    <Container>
      {loading &&
        <Loader />
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && post.length > 0 &&
        <Post>
          {post.map((item, index) => (
            <PostItem data={item} key={index} />
          ))}
        </Post>
      }
    </Container>
    {!loading && post.length === 0 &&
      <NoPost />
    }
  </>
}
