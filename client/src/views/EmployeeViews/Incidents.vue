<template>
   <div class="Incidents">
      PAGE IN PROGRESS
      <IncidentsNav class="landNav"></IncidentsNav>
      <div class="row d-flex justify-content-around">
         <div class="col-12 elheadr ">
            <incident v-for="note in notes" :noteData="note"></incident>
         </div>
      </div>
   </div>
</template>

<script>
   import router from '@/router.js'
   import Incident from '@/components/EmployeeComponents/Incident.vue'
   import IncidentsNav from '@/components/EmployeeComponents/IncidentsNav.vue'
   export default {
      name: "",
      props: [],
      mounted() {
         this.$store.dispatch('getAllNotes')
      },
      data() {
         return {
         }
      },
      computed: {
         notes() {
            return this.$store.state.notes
         }
      },
      methods: {

      },
      components: {
         Incident,
         IncidentsNav
      }
   }
</script>
<style scoped>
   .elheadr {
      margin-top: 10vh;
      min-height: 94vh;
      /* padding: 0px; */
   }

   @media only screen and (max-width: 450px) {
      .elheadr {
         margin-top: 12vh;
      }
   }
</style>