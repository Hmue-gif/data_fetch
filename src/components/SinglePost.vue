<template>
  <div v-for="post in post" :key="post.id">
      <h2> {{post.title}} </h2>
      <p> {{post.body}} </p>
  </div>
</template>

<script>
export default {
    props:['post']
}
</script>

<style>

</style>