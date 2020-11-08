<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/starships" v-if="!authenticated">Starships</router-link> |
      <router-link to="/vehicles" v-if="authenticated">Vehicles</router-link> |
      <router-link to="/login" v-if="!authenticated">Login</router-link>
    </div>
    <hr />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return { authenticated: false }
  },
  created () { this.isAuthenticated() },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
      this.$router.push({ path: '/' })
    }
  }
}
</script>
