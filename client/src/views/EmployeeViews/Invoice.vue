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
<<<<<<< HEAD
      this.$store.dispatch('makeInvoice', this.$route.params.id)
      this.$store.dispatch('getActiveOwner', this.$route.params.id)
      this.$store.dispatch('getPetsByOwnerId', this.$route.params.id)
      this.$store.dispatch('clearTimeCard')
      let petArr = this.$store.state.pets.filter(p => p.petOwnerId == this.$route.params.id)
      for (let i = 0; i < petArr.length; i++) {
        let petId = petArr[i]._id
        let petOwnerId = this.$route.params.id
        let payload = {
          petOwnerId,
          petId
        }
        this.$store.dispatch('getTimeCardbyOwner', payload)
      }
=======
      let ownerId = this.$route.params.id
      this.$store.dispatch('makeInvoice2', ownerId)
>>>>>>> 2b3bd14b23ab0868e8629411aabeb079c1312eb8
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