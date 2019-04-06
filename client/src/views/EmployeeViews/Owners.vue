<template>
  <div class="row">
    <div class="col-12">
      <OwnerNav class="landNav"></OwnerNav>
      <h1 class="ownerTitle">
        Pet Owners
      </h1>

    </div>
    <div class="col-12 col-md-3 offset-md-4">
      <table class="table bg-light">
        <thead class="thead-dark">
          <tr>
            <th scope="">Owner Name</th>
          </tr>
          <br>
        </thead>
        <tbody>
          <owner v-for="owner in ownerMatches.length ? ownerMatches : owners" :ownerData="owner"></owner>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import OwnerNav from '@/components/EmployeeComponents/OwnerNav.vue'
  import router from '@/router.js'
  import Owner from '@/components/EmployeeComponents/Owner.vue'
  export default {
    name: "owners",
    created() { },
    props: [],
    mounted() {
      this.$store.dispatch("getOwners")
    },
    data() {
      return {}
    },
    computed: {
      owners() {
        return this.$store.state.owners
      },
      ownerMatches() {
        return this.$store.state.ownerMatches
      }

    },
    methods: {},
    components: {
      Owner,
      OwnerNav
    }
  }
</script>
<style scoped>
  .ownerTitle {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .table {
    margin-top: 5vh;
    margin-left: 102px;
  }

  @media only screen and (max-width: 450px) {
    .table {
      margin-left: 0px;
      margin-top: 0vh;

    }
  }
</style>