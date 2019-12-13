<template>
  <div class="container">
    <EventCard v-for="event in eventList" :event="event" :key="event.id" />
    <p v-if="this.eventList.length === 0">Aucun favoris trouvé</p>
  </div>
</template>

<script>
import DBservices from "../services/services.js";
import EventCard from "./EventCard";

export default {
  name: "Favorites",
  data() {
    return {
      eventList: []
    };
  },
  components: {
    EventCard
  },
  methods: {
    getFavorites: function() {
      var arrayFav = [];
      for (let i = 0, len = localStorage.length; i < len; ++i) {
        let inFavorites = localStorage.getItem(localStorage.key(i));
        arrayFav.push(inFavorites);
      }
      for (let x = 0; x < this.eventList.length; x++) {
        if (!arrayFav.includes(this.eventList[x].record.id)) {
          this.eventList.splice(x, 1);
          x--;
        }
      }
    }
  },
  created: function() {
    DBservices.fetchAll().then(eventList => {
      this.eventList = eventList.records;
      this.getFavorites();
    });
  }
};
</script>

<style scoped>
</style>