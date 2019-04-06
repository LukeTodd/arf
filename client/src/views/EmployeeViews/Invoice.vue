<template>
  <div class="row">
    <div class="col invoice-display">
      <invoice-data :ownerData="owner"></invoice-data>
    </div>

  </div>
  </div>

</template>

<script>
  import router from '@/router.js'
  import InvoiceData from '@/components/EmployeeComponents/InvoiceData.vue'
  export default {
    name: "invoice",
    created() { },
    mounted() {
      this.$store.dispatch('getActiveOwner', this.$route.params.id)
    },
    data() {
      return {}
    },
    computed: {
      owner() {
        return this.$store.state.activeOwner
      }
    },
    methods: {},
    components: {
      InvoiceData
    }
  }
</script>

<style>
  .invoice-display {
    margin-top: 100px;
  }
</style>