<template>
  <div class="addpet">
    <div class="modal" tabindex="-1" role="dialog" id="test-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register New Pet</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent='createPet()'>
              <div class="col-12 formstuff">
                <h3>Pet Information</h3>
                <input class="formfield mb-2" type="text" v-model="newPet.name" name="Name" placeholder="Name:"
                  required>
                <br>
                <input class="formfield mb-2" type="text" v-model="newPet.breed" name="Breed" placeholder="Breed:">
                <br>
                <input class="formfield mb-2" type="number" v-model="newPet.age" name="Age" placeholder="Age:">
                <br>
                <input class="formfield" type="url" v-model="newPet.img" name="Age" placeholder="Img:">
              </div>
              <div class="col-12 mt-3">
                <button class="btn pagebtn btn-outline-light" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <i class="click pagebtn fas fa-plus fa-3x text-white" data-toggle="modal" data-target="#test-modal"></i>
  </div>
</template>


<script>
  export default {
    name: 'AddPet',
    data() {
      return {
        newPet: {
          name: '',
          breed: '',
          age: '',
          petOwnerId: this.$route.params.id,
          img: ''
        }
      }
    },
    computed: {},
    methods: {
      createPet() {
        this.$store.dispatch('createPet', this.newPet)
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

  .pagebtn {
    margin-top: 10px;
  }

  .addpet {
    text-align: right;
  }

  @media only screen and (max-width: 450px) {
    .addpet {
      text-align: center;

    }
  }

  .formstuff {
    text-align: center;
  }
</style>