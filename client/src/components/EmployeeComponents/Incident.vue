<template>
  <div class="Incident col-12">
    <p>
      {{noteData.behavior}}
    </p>
  </div>
</template>


<script>
  export default {
    name: 'Incident',
    props: ["noteData"],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
</style>