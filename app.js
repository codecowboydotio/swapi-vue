/**
 * Our Vue.js application.
 *
 * This manages the entire front-end website.
 */

// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images). The service can be found at:
// https://www.cryptocompare.com/api/
let API_URI = "http://10.1.1.140/";

let app = new Vue({
  el: "#app",
  data: {
    people: {},
    starships: {},
    coinData: {}
  },
  methods: {
    /**
     * Load up all cryptocurrency data.  This data is used to find what logos
     * each currency has, so we can display things in a friendly way.
     */
    getPeople: function() {
      let self = this;
      axios.get(API_URI + "people")
        .then((resp) => {
          this.response = resp;
          this.people = resp.data;
          console.log(resp.data);
        })
        .catch((err) => {
          this.err = err;
          console.error(err);
        });
    },

    /**
     * Get the top 10 cryptocurrencies by value.  This data is refreshed each 5
     * minutes by the backing API service.
     */
    getStarships: function() {
      let self = this;
      axios.get(API_URI + "starships")
        .then((resp) => {
          this.starships = resp.data;
          console.log(resp.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getImage: function(img) {
    }
  },
  created: function () {
    this.getPeople();
  }
});
