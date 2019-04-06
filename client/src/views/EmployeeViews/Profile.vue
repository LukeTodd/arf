<template>
  <div class="row petdetails">
    <div class="col-md-10 offset-md-1 col-12">
    </div>
    <div class="col-md-10 offset-md-1 col-12">
      <owner-profile></owner-profile>
    </div>
    <div class="col-md-10 offset-md-1 col-12">
      <pet-profile></pet-profile>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import OwnerProfile from '@/components/EmployeeComponents/OwnerProfile.vue'
  import PetProfile from '@/components/EmployeeComponents/PetProfile.vue'
  export default {
    name: "profile",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      OwnerProfile,
      PetProfile
    }
  }
</script>

<style scoped>
  .petdetails {
    padding-top: 75px;
    min-height: 94vh;

  }

  h1 {
    margin: -15px 0px -10px 0px;
  }
</style>