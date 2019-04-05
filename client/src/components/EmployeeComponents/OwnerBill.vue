<template>
  <tr class="bg-light">
    <th scope="row">{{ownerData.name}}</th>
    <td>$ {{getOwnerBal}}</td>
  </tr>
</template>

<script>
  export default {
    name: "ownerbill",
    props: ['ownerData'],
    mounted() {
      this.$store.dispatch('getAllOwnerBal')
    },
    data() {
      return {}
    },
    computed: {
      getOwnerBal() {
        return this.$store.state.ownerBal[this.ownerData._id] || 0
      }
    },
    methods: {

    },
    components: {}
  }
</script>

<style scoped>
  .click:hover {
    cursor: pointer;
  }
</style>