<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent='createNote()'>
        <h3 class="mt-2">Add Note</h3>
        <input class="formfield" type="text" v-model="notes.behavior" name="Behavior" placeholder="Behavior:">
        <br>
        <input class="formfield" type="text" v-model="notes.diet" name="diet" placeholder="Diet:">
        <br>
        <input class="formfield" type="text" v-model="notes.body" name="body" placeholder="Additional Notes:">
        <br>
        <button class="btn btn-outline-light vall" type="submit">Submit</button>
      </form>
    </div>
  </div>

</template>



<script>
  import ShowNotes from '@/components/EmployeeComponents/ShowNotes.vue'
  export default {
    name: 'AddNote',
    data() {
      return {
        notes: {
          behavior: "",
          diet: "",
          body: "",
          id: ""
        }
      }
    },
    computed: {
      activePet() {
        return this.$store.state.activePet
      }
    },
    methods: {
      createNote() {
        let petId = this.$store.state.activePet._id
        let petOwnerId = this.$store.state.activePet.petOwnerId
        let behavior = this.notes.behavior
        let diet = this.notes.diet
        let body = this.notes.body
        let flagged = "General"
        let payload = {
          behavior,
          diet,
          body,
          petId,
          petOwnerId,
          flagged
        }
        this.$store.dispatch('createNote', payload)
        this.notes = {
          behavior: "",
          diet: "",
          body: "",
          id: ""
        }
      }
    },
    components: {
      ShowNotes
    }
  }
</script>


<style scoped>

</style>