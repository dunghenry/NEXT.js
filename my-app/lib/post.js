import axios from "axios";
export const getPosts = async () =>{
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        return res.data;
    } catch (error) {
        console.log(error);
    }
}