<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The ships of starwars<br /><br />
         Scopes:        {{ acc_tkn.accessToken.scopes }}<br />
         authorize Url: {{ acc_tkn.accessToken.authorizeUrl }}<br />
         token Type:    {{ acc_tkn.accessToken.tokenType }}<br />
         token Value:   {{ acc_tkn.accessToken.value }}<br />
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
           <td><img v-bind:src="'http://192.168.109.144:3000/' + starship.image" /></td>
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
      acc_tkn: {},
      errors: {}
    }
  },
  created() {
    var access_token = localStorage.getItem('okta-token-storage')
    this.acc_tkn = JSON.parse(access_token)
    axios.get('http://192.168.109.144:3000/starships')
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
