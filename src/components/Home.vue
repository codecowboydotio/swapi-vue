<template>
  <div id="home">
     <h1>Custom My uncool test app</h1>
    <div v-if="!this.$parent.authenticated">
      <p>Hello, Vue.</p>
      <router-link role="button" to="/login">
        Login
      </router-link>
    </div>

    <div v-if="this.$parent.authenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <br>
      <p>name:               {{claims.name}},</p>
      <p>email:              {{claims.email}}</p>
      <p>preferred username: {{claims.preferred_username}}</p>
      <p>given name:         {{claims.given_name}}</p>
      <p>family name:        {{claims.family_name}}</p>
      <p>timezone:           {{claims.zoneinfo}}</p>
      <br>
      <p>
        You have successfully authenticated with Okta!
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      claims: ''
    }
  },
  created() { this.setup() },
  methods: {
    async setup() {
      this.claims = await this.$auth.getUser()
    }
  }
}
</script>
