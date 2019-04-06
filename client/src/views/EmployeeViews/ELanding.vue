<template>
  <div class="eLanding">
    <ELandingNav class="landNav"></ELandingNav>
    <div class="row">
      <div class="col-12 elheadr ">
        <!-- <h1 class="mb-5 text-white">hi</h1> -->
        <div class="row d-flex justify-content-around">
          <dog v-for="dog in petMatches.length ? petMatches : dogs" :dogData="dog"></dog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import Dog from '@/components/EmployeeComponents/Dog.vue'
  import ELandingNav from '@/components/EmployeeComponents/ELandingNav.vue'
  export default {
    name: "eLanding",
    props: [],
    mounted() {
      this.$store.dispatch('getPets')
    },
    data() {
      return {}
    },
    computed: {
      dogs() {
        return this.$store.state.pets
      },
      petMatches() {
        return this.$store.state.petMatches
      }
    },
    methods: {
      sortPetName() {
        let pets = this.$store.state.pets
        pets.sort(function (a, b) {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        })
      }
    },
    components: {
      Dog,
      ELandingNav
    }
  }
</script>
<style scoped>
  .elheadr {
    margin-top: 7vh;
    /* padding: 0px; */
  }

  @media only screen and (max-width: 450px) {
    .elheadr {
      margin-top: 12vh;
    }
  }

  .dogbucket {
    /* background-color: rgba(0, 0, 0, 0.212); */
    padding: 5vw;
    border-radius: 20px;
    flex-direction: row;


  }

  /* h1 {
    text-shadow: 1px 2px black;
    margin-top: 109px;
  } */

  .eLanding {
    padding-bottom: 70px;
  }
</style>