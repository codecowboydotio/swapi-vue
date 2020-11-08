<template>
  <div>Board with prop id: {{ id }}</div>
</template>
<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
