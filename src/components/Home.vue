<template>
  <div class="app">
    <div class="container">
      <h1>Bienvenue sur Paris Events</h1>
      <h2>Dernier événements ajouté</h2>
      <EventCard :event="event" v-if="event" />
    </div>
  </div>
</template>

<script>
import DBservices from "../services/services.js";
import EventCard from "./EventCard";

export default {
  name: "Home",
  data() {
    return {
      eventList: null,
      event: null
    };
  },
  components: {
    EventCard
  },
  methods: {
    getLastSynchronization: function() {
      var array = [];
      var index = 0;
      for (let i = 0; i < this.eventList.length; i++) {
        let synchronized = this.eventList[i].record.fields.updated_at;
        synchronized = synchronized + " index: " + index++;
        array.push(synchronized);
      }
      array.sort().reverse();
      let lastUpdated = array[0].match(/\d+$/)[0];
      this.event = this.eventList[lastUpdated];
    }
  },
  created: function() {
    DBservices.fetchAll().then(eventList => {
      this.eventList = eventList.records;
      this.getLastSynchronization();
    });
  }
};
</script>

<style scoped>
h1,h2{
  font-family: 'Montserrat', sans-serif;
  margin: 20px 0;
}
.cards_item{
  display: flex;
}
</style>