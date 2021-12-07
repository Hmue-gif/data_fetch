<template>
  <div v-if="error">
    <h2> {{error}} </h2>
  </div>
  
  <div v-if="post.length>0">
    <SinglePost :post="post"></SinglePost>
  </div>
  
  <div v-else>
     loading...
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost'
import { ref } from '@vue/reactivity'


export default {
  components: { SinglePost },
  setup(){
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
    load();
    return{post,error}
  }
}
</script>

<style scoped>
  h2{
    color: crimson;
  }
</style>
