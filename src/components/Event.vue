<template>
  <div class="card-body">
    <h5 class="card-title">{{ event.title }}</h5>
  </div>
</template>

<script>
import DBservices from "../services/services.js";

export default {
  name: "Event",
  data: function() {
    return {
      event: [

      ]
    }
  },
  components: {
    Event
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
</style>