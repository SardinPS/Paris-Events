<template>
  <nav class="navbar navbar-expand-lg navbar-light">
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
              <i class="fas fa-home fa-2x"></i>
              Accueil
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Events">
              <i class="fas fa-clipboard-list fa-2x"></i>
              Liste des évenements
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Favorites">
              <i class="fas fa-heart fa-2x"></i>
              Favoris
            </router-link>
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

<style scoped>
  .fa-home{
    background: #002395;
     -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
    
  }
  .fa-clipboard-list{
    background: #fff;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
  }
  .fa-heart{
    background: #ed2939;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
  }
  .fas:hover{
    background: linear-gradient(90deg, rgba(0,35,149,1) 33%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 66%, rgba(237,41,57,1) 66%, rgba(237,41,57,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a{
    font-family: 'PT Sans', serif;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  .nav-item{
   margin: 0 50px;
  }
  nav{
    background-color: green;
  }

</style>

