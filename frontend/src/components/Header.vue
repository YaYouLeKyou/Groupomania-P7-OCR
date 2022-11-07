<template>
  <header>
    <nav>
      <div class="logo">
        <a href="http://localhost:8081/welcome">
          <img
            width="158"
            height="78"
            src="../assets/icon-white.png"
            alt="linkmania-logo"
          />
        </a>
      </div>
      <div class="button-menu">
        <button class="button-cliquer-menu" aria-label="Cliquer sur menu">
          <svg class="menu" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="link">
        <div class="text-link">
          <router-link
            to="/feed"
            href="http://localhost:8081/feed"
            class="feed"
            aria-label="Accéder aux articles"
          >
            Lien Groupomania
          </router-link>
          <router-link
            to="/profile/:id"
            href="http://localhost:8081/profile/:id"
            class="mon-compte"
            aria-label="Accéder à mon compte"
          >
            Mon compte
          </router-link>
          <router-link
            to="/Users"
            href="http://localhost:8081/Users"
            class="membre"
            aria-label="Accéder à la page membres"
          >
            Membres
          </router-link>
        </div>
        <div>
          <a
            @click="logout()"
            href="#"
            class="se-deconnecter"
            aria-label="Se déconnecter"
          >
            Se déconnecter
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style>
* {
  font-family: "Lato", sans-serif;
}
header {
  width: 100%;
  background-color: #111827;
  border-bottom-width: 2px;
  border-color: #34d399;
}
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  margin-right: 1.5rem;
  color: #ffffff;
  align-items: center;
}
.button-menu {
  display: block;

  @media (min-width: 1024px) {
  }
}
.button-cliquer-menu {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #34d399;
  align-items: center;
  border-radius: 0.25rem;
  border-width: 1px;
}
.button-cliquer-menu:hover {
  color: #ffffff;
}

.menu {
  width: 0.75rem;
  height: 0.75rem;
}
.link {
  display: block;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: auto;
  }
}
.text-link {
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  line-height: 1.25rem;
  color: red;

  @media (min-width: 1024px) {
    flex-grow: 1;
  }
}
.feed {
  display: block;
  margin-top: 1rem;
  margin-right: 1rem;
  color: #34d399;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (min-width: 1024px) {
    display: inline-block;
    margin-top: 0;
  }
}
.feed:hover {
  color: #ffffff;
}
.mon-compte {
  display: block;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (min-width: 1024px) {
    display: inline-block;
    margin-top: 0;
  }
}
.mon-compte:hover {
  color: #34d399;
}
.membre {
  display: block;
  margin-top: 1rem;
  margin-left: 1rem;
  color: #ffffff;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media (min-width: 1024px) {
    display: inline-block;
    margin-top: 0;
  }
}
.membre:hover {
  color: #34d399;
}

.se-deconnecter {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #ffffff;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
}
.se-deconnecter:hover {
  color: #34d399;
}
</style>
