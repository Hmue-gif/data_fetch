import { ref } from '@vue/reactivity'
let getPosts = () =>{
    let post = ref([]);
    let error = ref('')
    let load = async()=> {
        try{
            let response =await fetch("http://localhost:3000/posts");
            if(response.status === 404){
            throw new Error("url not found")
            }
            let datas = await response.json();
            post.value = datas;
            console.log(post)
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load}
}

export default getPosts;