<template>
  <div>
     <div class="jumbotron col-xs-offset-2 col-xs-8">
       <p>
         The ships of starwars<br /><br />
       </p>
       <p v-if="acc_tkn">Scopes:        {{ acc_tkn.accessToken.scopes }}<br /></p>
       <p v-if="acc_tkn">authorize Url: {{ acc_tkn.accessToken.authorizeUrl }}<br /></p>
       <p v-if="acc_tkn">token Type:    {{ acc_tkn.accessToken.tokenType }}<br /></p>
       <p v-if="acc_tkn">Ship claim Value:   {{ custom_claims.shipSize }}<br /></p>
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
           <td><img v-bind:src="'http://cdn.powerhour.com/' + starship.image" /></td>
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

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export default {
  data() {
    return {
      acc_tkn: {},
      starships: {},
      errors: {},
      custom_claims: {}, 
      loading: false
    }
  },
  created() {
    var access_token = localStorage.getItem('okta-token-storage')
    this.acc_tkn = JSON.parse(access_token)
    console.log(JSON.parse(access_token))
    this.custom_claims = parseJwt(this.acc_tkn.accessToken.value)
    console.log(this.custom_claims)
    //console.log(this.acc_tkn.accessToken.value)
    axios.get('http://api.powerhour.com/starships', {
      headers: {
        'Authorization': `Bearer ${this.acc_tkn.accessToken.value}`
      }
    })
    .then(response => {
      this.starships = response.data
      console.log(response.data)
      console.log(response)
    })
    .catch(e => {
      //this.errors.push(e)
      console.log(e)
    })
  }
} 
</script>
