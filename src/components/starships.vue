<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The ships of starwars<br /><br />
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
           <td><img v-bind:src="'http://10.1.1.150:3000/' + starship.image" /></td>
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

//function parseJwt (token) {
//    var base64Url = token.split('.')[1];
//    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//    }).join(''));
//
//    return JSON.parse(jsonPayload);
//}

export default {
  data() {
    return {
      starships: {},
      errors: {}
    }
  },
  created() {
    axios.get('http://10.1.1.150:3000/starships')
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
