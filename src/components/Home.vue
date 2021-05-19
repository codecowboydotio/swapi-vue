<template>
  <div id="home">
     <h1>My uncool test app</h1>
    <div v-if="!this.$parent.authenticated">
      <p>Hello, Vue.</p>
      <router-link role="button" to="/starships">
        See some starships
      </router-link>
      <br>
      <router-link role="button" to="/vehicles">
        See some vehicles
      </router-link>
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
  }
}
</script>
