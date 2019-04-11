<template>
  <div class="row">
    <div>
      <div class="col invoice-display">
        <invoice-data :ownerData="owner" :timeCardData="timeCard"></invoice-data>
      </div>
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
      let ownerId = this.$route.params.id
      this.$store.dispatch('makeInvoice2', ownerId)
    },
    data() {
      return {}
    },
    computed: {
      owner() {
        return this.$store.state.activeOwner
      },
      timeCard() {
        return this.$store.state.timeCard
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
    min-height: 94vh;
    margin-bottom: 25px;
  }
</style>