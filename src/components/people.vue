<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The people of starwars
       </p>
     </div>
     <table class="table table-hover">
       <thead class="thead thead-light">
         <tr>
           <th>Picture</th>
           <th>Name</th>
           <th>Birth Year</th>
           <th>Height</th>
           <th>Hair Colour</th>
           <th>Homeworld</th>
          </tr>
       </thead>
       <tbody>
         <tr>
          <tr v-for="person in people" :key="person.id">
           <td><img v-bind:src="'https://svk-swapi-api.sa.f5demos.com/' + person.image" /></td>
           <td>{{ person.name }}</td>
           <td>{{ person.birth_year }}</td>
           <td>{{ person.height }}cm</td>
           <td>{{ person.hair_color }}</td>
           <td>{{ planets[person.homeworld-1].name }}</td>
         </tr>
       </tbody>
     </table>
   </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      people: {},
      planets: {},
      errors: {}
    }
  },
  created() {
    axios.get('https://svk-swapi-api.sa.f5demos.com/people')
    .then(response => {
      this.people = response.data
      console.log(response.data)
    }),
    axios.get('https://svk-swapi-api.sa.f5demos.com/planets')
    .then(response => {
      this.planets = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
} 
</script>
