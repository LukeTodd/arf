<template>
   <div class="Incidents">
      <nav class="navbar navbar-light landNav">
         <form class="form-inline">
            <input @input="" class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
         </form>
      </nav>
      <incident v-for="note in notes" :noteData="note">
      </incident>
   </div>
</template>

<script>
   import router from '@/router.js'
   import Incident from '@/components/EmployeeComponents/Incident.vue'
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
         Incident
      }
   }
</script>
<style scoped>
   .Incidents {
      padding-top: 120px;
   }
</style>