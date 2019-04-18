<template>
  <div class="incidentform row">
    <div class="col-12">
      <form @submit.prevent='createNote()'>
        <h3 class="mt-2">File Incident</h3>
        <input class="formfield" type="text" v-model="notes.petName" name="Namr" placeholder="Name:" required>
        <br>
        <input class="formfield" type="text" v-model="notes.behavior" name="Behavior" placeholder="Behavior:" required>
        <br>
        <input class="formfield" type="text" v-model="notes.body" name="body" placeholder="Additional Notes:" required>
        <br>
        <button class="btn btn-outline-light vall" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'incidentform',
    data() {
      return {
        notes: {
          name: "",
          body: "",
          behavior: "",
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
        let name = this.notes.petName
        let behavior = this.notes.behavior
        let petId = this.$store.state.activePet._id
        let petOwnerId = this.$store.state.activePet.petOwnerId
        let body = this.notes.body
        let flagged = "Incident"
        let payload = {
          body,
          petId,
          petOwnerId,
          flagged,
          behavior,
          name
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
    components: {}
  }
</script>


<style scoped>

</style>