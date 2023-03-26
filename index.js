import axios from "axios";


async function getData(Number){
    try{
        async function getUsers(){
            const {data:users}= await axios ("https://jsonplaceholder.typicode.com/users/"+Number)
            console.log(users)
        }
        async function getPosts(){
            const {data:posts}= await axios ("https://jsonplaceholder.typicode.com/posts?id="+Number)
            console.log("Posts:", posts)
        }

        const user = await getUsers(Number)
        const post = await getPosts(Number)
        return user+post

    } catch (e){
        console.log(e)
    }
}


export default getData