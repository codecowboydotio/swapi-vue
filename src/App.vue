<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/starships">Starships</router-link>|
      <router-link to="/vehicles">Vehicles</router-link>
    </div>
    <hr />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
