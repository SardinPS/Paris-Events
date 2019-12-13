<template>
  <div class="card" style="width: 30%;">
    <img
      :src="event.record.fields.cover_url"
      class="card-img-top"
      :alt="`Photo de ${event.record.fields.title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{ event.record.fields.title }}</h5>
      <p class="card-text">À partir du {{ event.record.fields.date_start | formateDate }}</p>
    </div>
    <div class="card-body">
      <p class="card-text">{{ event.record.fields.description | removeTags | shortenText }}</p>
      <router-link :to="`/Event/${event.record.id}`" class="card-link">Voir en détail</router-link>
      <a
        href="#"
        class="card-link"
        id="favorites"
        v-on:click.prevent="Favorites"
      >Ajouter aux favoris</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {};
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  filters: {
    formateDate: function(value) {
      var localDate = new Date(value);
      var options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};
      return localDate.toLocaleString('fr-FR', options, { timeZone: 'UTC'});
    },
    removeTags: function(value) {
       return value.replace(/<[^>]*>/g, " ");
    },
    shortenText: function(value) {
      const shorten = (str, len) =>
        str.substring(0, (str + " ").lastIndexOf(" ", len));
      return shorten(value, 300) + " ...";
    }
  },
  methods: {
    Favorites: function(){
     let favorites = document.getElementById("favorites");
      if (localStorage.getItem(this.event.record.id)){
        localStorage.removeItem(this.event.record.id);
        favorites.innerHTML = "Ajouter aux favoris";
        location.reload();
      }
      else{
        localStorage.setItem(this.event.record.id, this.event.record.id);
        favorites.innerHTML = "Retirer des favoris";
      }
    },
  }
};
</script>

<style scoped>
</style>
