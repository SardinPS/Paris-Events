<template>
  <div class="card" style="width: 25%;">
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
      <router-link :to ="`/Event/${event.record.id}`">Voir en détail</router-link>
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
      return value.replace(/<[^>]*>/g, "");
    },
    shortenText: function(value) {
      const shorten = (str, len) =>
        str.substring(0, (str + " ").lastIndexOf(" ", len));
      return shorten(value, 300) + " ...";
    }
  }
};
</script>

<style scoped>
</style>