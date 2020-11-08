<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      Root Site
    </h3>
  </div>
</template>

<script>
export default {
  name: 'RootSite',
  props: {
    msg: String
  }
}
</script>
