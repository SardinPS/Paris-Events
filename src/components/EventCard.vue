<template>
  <div>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img :src="event.record.fields.cover_url" :alt="`Photo de ${event.record.fields.title}`" />
        </div>
        <div class="card_content">
          <h2 class="card_title">{{ event.record.fields.title }}</h2>
          <p class="card-text">À partir du {{ event.record.fields.date_start | formateDate }}</p>
          <p class="card_text">{{ event.record.fields.description | removeTags | shortenText }}</p>
          <div class="links">
            <router-link :to="`/Event/${event.record.id}`" class="card-link">
              <button class="btn card_btn">Voir en détail</button>
            </router-link>
            <a href="#" class="card-link" id="favorites" v-on:click.prevent="Favorites">
              <button class="btn card_btn">Ajouter aux favoris <i class="fas fa-heart"></i></button>
            </a>
          </div>
        </div>
      </div>
    </li>
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
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      return localDate.toLocaleString("fr-FR", options, { timeZone: "UTC" });
    },
    removeTags: function(value) {
      return value.replace(/<[^>]*>/g, " ");
    },
    shortenText: function(value) {
      const shorten = (str, len) =>
        str.substring(0, (str + " ").lastIndexOf(" ", len));
      return shorten(value, 200) + " ...";
    }
  },
  methods: {
    Favorites: function() {
      let favorites = document.getElementById("favorites");
      if (localStorage.getItem(this.event.record.id)) {
        localStorage.removeItem(this.event.record.id);
        favorites.innerHTML = "Ajouter aux favoris";
        location.reload();
      } else {
        localStorage.setItem(this.event.record.id, this.event.record.id);
        favorites.innerHTML = "Retirer des favoris";
      }
    }
  }
};
</script>

<style scoped>
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
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
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 39%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #4884d1 40%, #d67171 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 15px;
}

.card_text {
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.card-link{
  color: #fff;
}
.fa-heart{
  color: red;
  margin-left: 10px;
}
</style>
