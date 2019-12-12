<template>
  <div class="container">
    <EventCard v-for="event in eventList" :event="event" :key="event.id" />
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
      for (var i = 0, len = localStorage.length; i < len; ++i) {
        console.log(localStorage.getItem(localStorage.key(i)));
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

<style>
</style>