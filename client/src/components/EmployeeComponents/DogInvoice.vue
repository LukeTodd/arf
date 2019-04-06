<template>
  <div class="row">
    <div class="col-3">
      {{dogData.name}}
    </div>
    <div class="col-9">
      <invoice-time-card v-for="tcard in tcards" :timeCardData="tcard"></invoice-time-card>
    </div>
  </div>

</template>


<script>
  import InvoiceTimeCard from '@/components/EmployeeComponents/InvoiceTimeCard.vue'
  export default {
    name: 'doginvoice',
    data() {
      return {}
    },
    props: ['dogData'],
    computed: {
      tcards() {
        return this.$store.state.timeCard[this.dogData._id].filter(b => b.billed > 0) || []
      }

    },
    methods: {},
    components: {
      InvoiceTimeCard
    }
  }
</script>


<style scoped>

</style>