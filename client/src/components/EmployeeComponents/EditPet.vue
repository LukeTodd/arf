<template>
  <div class="editpet">
    <div class="modal" tabindex="-1" role="dialog" id="edit-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Pet Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='editPet()'>
              <div class="col-md-8 offset-md-1 col-10 offset-1 form-fields">
                <h3>Pet Information</h3>
                Name:<input class="formfielder" type="text" v-model="pet.name" name="Name" required>
                <br>
                Breed:<input class="formfielder" type="text" v-model="pet.breed" name="Breed">
                <br>
                Age:<input class="formfielder" type="number" v-model="pet.age" name="Age">
                <br>
                Image:<input class="formfielder" type="url" v-model="pet.img" name="Img">
              </div>
              <div class="col-12 mt-3">
                <button class="btn btn-outline-light" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <i v-if="activePet.name" class="click fas fa-edit fa-2x text-white" data-toggle="modal" data-target="#edit-modal"
      @click="pet=activePet"></i>
  </div>
</template>


<script>
  export default {
    name: 'EditPet',
    data() {
      return {
        pet: {
        }
      }
    },
    computed: {
      activePet() {
        return this.$store.state.activePet
      }
    },
    methods: {
      editPet() {
        this.$store.dispatch('editPet', this.pet)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.322);
  }

  .modal-content {
    background-image: linear-gradient(#89a6b8, #384349);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 20px;
  }

  .form-fields {
    text-align: right;
  }

  .formfielder {
    width: 175px;
    margin-top: 7px;
  }

  .editpet {
    text-align: right;
  }
</style>