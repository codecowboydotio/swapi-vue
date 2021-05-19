<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The vehicles of starwars
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
          <tr v-for="vehicle in vehicles" :key="vehicle.id">
           <td><img v-bind:src="'http://10.1.1.150:3000/' + vehicle.image" /></td>
           <td>{{ vehicle.name }}</td>
           <td>{{ vehicle.vehicle_class }}</td>
           <td>{{ vehicle.model }}</td>
           <td>{{ vehicle.manufacturer }}</td>
           <td>{{ vehicle.cost_in_credits }}</td>
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
      vehicles: {},
      errors: {}
    }
  },
  created() {
    axios.get('http://10.1.1.150:3000/vehicles')
    .then(response => {
      this.vehicles = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
} 
</script>
