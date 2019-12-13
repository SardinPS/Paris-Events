<template>
  <div class="container">
    <img :src="event.cover_url" :alt="`Photo de ${event.title}`" />
    <h1 class="card-title">{{ event.title }}</h1>
    <p>{{ event.description | removeTags }}</p>
    <a href="#" class="card-link" id="favorites" v-on:click.prevent="Favorites">
      <button class="btn card_btn">
        Ajouter aux favoris
        <i class="fas fa-heart"></i>
      </button>
    </a>
    <h3>Dates :</h3>
    <p>{{ event.date_description | removeBr }}</p>
    <h3>Prix :</h3>
    <p>{{ event.price_detail }}</p>
    <h3>S'y rendre :</h3>
    <p>{{ event.address_name }}</p>
    <p>{{ event.address_street }}</p>
    <p>{{ event.address_zipcode }} {{ event.address_city }}</p>
    <h3>En Transports :</h3>
    <p>{{ event.transport }}</p>
    <h3>Plus d'infos :</h3>
    <p>
      <i class="fas fa-phone"></i>
      : {{ event.access_phone }}
    </p>
    <p></p>
    <p>
      <i class="fas fa-envelope"></i>
      : {{event.access_mail }}
    </p>
    <p>
      <i class="fab fa-facebook-square"></i> :
      <a :href="event.contact_facebook">Page Facebook</a>
    </p>
  </div>
</template>

<script>
import DBservices from "../services/services.js";

export default {
  name: "Event",
  data: function() {
    return {
      event: []
    };
  },
  components: {
    Event
  },
  filters: {
    removeBr: function(value) {
      return value.replace(/\<br\s*[\/]?>/gi, "");
    },
     removeTags: function(value) {
      return value.replace(/<[^>]*>/g, " ");
    }
  },
  methods: {
    Favorites: function() {
      let favorites = document.getElementById("favorites");
      if (localStorage.getItem(this.$route.params.id)) {
        localStorage.removeItem(this.$route.params.id);
        favorites.innerHTML = "Ajouter aux favoris";
        location.reload();
      } else {
        localStorage.setItem(this.$route.params.id, this.$route.params.id);
        favorites.innerHTML = "Retirer des favoris";
      }
    }
  },
  created: function() {
    DBservices.fetchOne(this.$route.params.id).then(event => {
      this.event = event.records;
      this.event = event.record.fields;
    });
  }
};
</script>

<style scoped>
.container{
  padding-bottom: 20px;
}
h1 {
  font-family: "Montserrat", sans-serif;
}
img {
  max-width: 100%;
  margin-bottom: 20px;
}
.main {
  width: 70%;
}
.sidebar {
  width: 30%;
}
.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  margin: 20px 0;
}
.fa-heart{
  color: red;
  margin-left: 15px;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}
</style>