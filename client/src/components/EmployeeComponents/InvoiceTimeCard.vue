<template>
  <div class="InvoiceTimeCard row">
    <div class="col-12 botline">
      <div class="row">
        <div class="col-4">
          {{timeCardData.outTime | formatTime}}
        </div>
        <div class="col-4">
          {{timeCardData.totalTime | getHours}}
        </div>
        <div class="col-4">
          {{timeCardData.billed}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Moment from 'moment'
  export default {
    name: 'InvoiceTimeCard',
    data() {
      return {}
    },
    props: ['timeCardData'],
    computed: {
    },
    methods: {},
    filters: {
      formatTime(date) {
        if (!date) return 'N/A'
        return Moment(date).format("MMMM Do YYYY")
      },
      getHours(date) {
        let hour = (date / 3600000).toFixed(2)
        if (hour < 1) { hour = 1 }
        if (!date) { hour = 0 }
        if (hour == 1) { return hour + ' Hour' }
        else return hour + ' ' + 'Hours'
      }
    },
    components: {}
  }
</script>


<style scoped>
  .botline {
    border-bottom-style: solid;
    border-bottom-color: black;
    border-bottom-width: 1px;
  }
</style>