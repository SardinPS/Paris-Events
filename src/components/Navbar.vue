<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Parisian events logo" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Accueil
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Events">Liste des évenements</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Favorites">Favoris</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
 name: "Navbar",
 data () {
      return {}
    }
}
</script>

<style>

</style>