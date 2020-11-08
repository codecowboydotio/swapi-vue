<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The ships of starwars
       </p>
     </div>
     <table class="table table-hover">
       <thead class="thead thead-light">
         <tr>
           <th>Picture</th>
           <th>Name</th>
           <th>Class</th>
           <th>Model</th>
           <th>Manufacturer</th>
           <th>Cost (Corellian Credits)</th>
          </tr>
       </thead>
       <tbody>
         <tr>
          <tr v-for="starship in starships" :key="starship.id">
           <td><img v-bind:src="'http://10.1.1.140:3000/' + starship.image" /></td>
           <td>{{ starship.name }}</td>
           <td>{{ starship.starship_class }}</td>
           <td>{{ starship.model }}</td>
           <td>{{ starship.manufacturer }}</td>
           <td>{{ starship.cost_in_credits }}</td>
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
      starships: {},
      errors: {}
    }
  },
  created() {
    axios.get('http://10.1.1.140:3000/starships')
    .then(response => {
      this.starships = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
} 
</script>
