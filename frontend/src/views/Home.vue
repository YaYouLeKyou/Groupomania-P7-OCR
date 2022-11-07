<template>
  <div class="home">
    <login></login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    login: Login,
  },
};
</script>
<style>
.home {
  display: flex;
  background-image: url("https://www.entreprendre.fr/wp-content/uploads/fd-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
