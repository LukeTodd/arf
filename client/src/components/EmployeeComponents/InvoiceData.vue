<template>
  <div class="row">
    <div class="col-6">
      <h3>A r f</h3>
      <h4>arf@arf.com</h4>
      <h4>208-985-0095</h4>
      <hr>
      <h3>{{ownerData.name}}</h3>
      <h4>{{ownerData.address}}</h4>
      <h4>{{ownerData.phone}}</h4>
    </div>
    <div class="col-6">
      <h2>INVOICE</h2>
      <hr>
      <h3>DATE HERE</h3>
    </div>
    <div class="row">
      <div class="col">
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'invoiceData',
    props: ['ownerData', 'dogData'],
    mounted() { },
    data() {
      return {

      }
    },
    computed: {
      tcards() {
        return this.$store.state.timeCard
      }
    },
    methods: {

    },
    components: {}
  }
</script>

<style>

</style>