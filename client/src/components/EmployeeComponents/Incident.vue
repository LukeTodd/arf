<template>
  <div class="Incident col-12">
    <p>
      {{noteData.behavior}}
      {{noteData.body}}
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