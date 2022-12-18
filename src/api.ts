import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'Content-Type': 'application/json' }
});

export const API = {
    getAllPosts: async () => {
        let response = await instance.get('/posts')
        return response.data

        // const data = await fetch(BASE_URL);
        // const response = await data.json()
        // return response


    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let fetching = await instance.post('/posts', { title, body, userId, })
        return fetching.data


        // let fetching = await fetch(BASE_URL, {
        //     method: 'POST',
        //     body: JSON.stringify({ title, body, userId }),
        //     headers: { 'Content-Type': 'application/json' }
        //   })
        //   let json = await fetching.json()
        //   return json
    }
}