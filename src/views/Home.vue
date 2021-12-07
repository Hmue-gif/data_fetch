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
import getPosts from '../composable/getPosts'

export default {
  components: { SinglePost },
  setup(){
    let {post,error,load} = getPosts();
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
