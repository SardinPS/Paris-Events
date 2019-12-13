<template>
  <div class="container">
    <EventCard v-for="event in eventList" :event="event" :key="event.id" />
  </div>
</template>

<script>
import DBservices from "../services/services.js";
import EventCard from "./EventCard";

export default {
  name: "Events",
  data() {
    return {
      eventList: null,
    };
  },
  components: {
    EventCard
  },
  created: function() {
    DBservices.fetchAll().then(eventList => {
      this.eventList = eventList.records;
    });
  }
};
</script>

<style>
</style>