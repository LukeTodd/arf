<template>
  <div class="row">
    <div class="col-11 offset-1 card">
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
        <div class="col-6 d-flex flex-column justify-content-center">
          <h2>INVOICE</h2>
          <hr>
          <h3>{{Date()| formatTime}}</h3>
        </div>
        <div class=" card col-8 offset-1 mb-3 tableborder">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 tableheader">
                  <div class="row">
                    <div class="col-3">Pet Name</div>
                    <div class="col-3">Date</div>
                    <div class="col-3">Hours</div>
                    <div class="col-3">Total</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <dog-invoice v-for="dog in dogs" :dogData="dog"></dog-invoice>
            </div>
            <div class="col-12">
              <div class="row totaldue">
                <div class="col-3 ">
                  Total Due:
                </div>
                <div class="col-3 offset-6">
                  {{total()}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
  import Moment from 'moment'
  import DogInvoice from '@/components/EmployeeComponents/DogInvoice.vue'
  export default {
    name: 'invoiceData',
    props: ['ownerData'],
    mounted() { },
    data() {
      return {

      }
    },
    computed: {
      dogs() {
        return this.$store.state.pets
      },
      total() {
        debugger
        let totalDue = 0
        for ()
          let time = this.$store.state.timeCard
        return totalDue = + time

      }
    },
    filters: {
      formatTime(date) {
        if (!date) return 'N/A'
        return Moment(date).format("MMMM Do YYYY")
      }
    },
    methods: {

    },
    components: {
      DogInvoice
    }
  }
</script>

<style scoped>
  .tableheader {
    background-color: #343a40;
    color: white;
    padding: 5px 0px;
    margin-bottom: 5px;
    border-radius: 5px 5px 0px 0px;
  }

  .tableborder {
    border-style: none;
    background-color: rgb(209, 209, 209);
    border-radius: 5px;
  }

  .totaldue {
    background-color: #343a40;
    color: white;
    padding: 5px 0px;
    border-radius: 0px 0px 5px 5px;
  }
</style>