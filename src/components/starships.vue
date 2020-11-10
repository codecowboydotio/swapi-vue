<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The ships of starwars<br /><br />
       </p>
       <p v-if="acc_tkn"> Scopes:        {{ acc_tkn.accessToken.scopes }}<br /></p>
       <p v-if="acc_tkn">authorize Url: {{ acc_tkn.accessToken.authorizeUrl }}<br /></p>
       <p v-if="acc_tkn">token Type:    {{ acc_tkn.accessToken.tokenType }}<br /></p>
       <p v-if="acc_tkn">token Value:   {{ acc_tkn.accessToken.value }}<br /></p>
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
      acc_tkn: {},
      starships: {},
      errors: {},
      loading: false
    }
  },
  created() {
    var access_token = localStorage.getItem('okta-token-storage')
    this.acc_tkn = JSON.parse(access_token)
    //console.log(JSON.parse(access_token))
    //console.log(this.acc_tkn.accessToken.value)
    //axios.get('http://192.168.109.144:3000/starships')
    axios.get('http://api.powerhour.com/starships', {
      headers: {
        'Authorization': `Bearer ${this.acc_tkn.accessToken.value}`
      }
    })
    .then(response => {
      this.starships = response.data.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
      console.log(e)
    })
  }
} 
</script>
