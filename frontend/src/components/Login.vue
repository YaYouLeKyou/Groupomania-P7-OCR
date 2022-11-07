<template>
  <div class="login">
    <h1 class="log-title">Connectez-vous</h1>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>
<style>
.login {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 38rem;
  border-radius: 0.375rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
.log-title {
  color: #1f2937;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-transform: uppercase;
  align-self: center;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
</style>
