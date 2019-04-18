<template>
  <div class="Incident col-12" @click="$router.push({name: 'Profile', params: {id:noteData.petOwnerId}})">
    <p>
      {{noteData.petName}}
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