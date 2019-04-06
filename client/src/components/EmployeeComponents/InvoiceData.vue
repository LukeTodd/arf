<template>
  <div class="row">
    <div class="col-12">
      <h2>{{ownerData.name}}</h2>
      {{ownerData.phone}}
    </div>
  </div>


</template>

<script>
  export default {
    name: 'invoiceData',
    props: ['ownerData'],
    mounted() {


    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {},
    components: {}
  }
</script>

<style>

</style>