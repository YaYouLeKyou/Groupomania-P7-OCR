<template>
  <div class="home">
    <login></login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    login: Login
  }
}
</script>
<style>
.home{
display: flex; 
background-color: #868c99; 
flex-direction: column; 
align-items: center; 
min-height: 100vh; 
}
</style>