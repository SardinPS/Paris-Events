<template>
  <div class="container">
    <h1>Retrouver ici la liste de touts les évenements parisiens à venir</h1>
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

<style scoped>
h1{
  font-family: 'Montserrat', sans-serif;
}
</style>