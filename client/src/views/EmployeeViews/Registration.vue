<template>
  <div class="row registration">
    <div class="col-md-8 offset-md-2 col-12 regbody" v-if="registerForm">
      <register-owner></register-owner>
    </div>
  </div>
</template>


<script>
  import RegisterOwner from '@/components/EmployeeComponents/RegisterOwner.vue'
  export default {
    name: 'registration',
    data() {
      return {
        registerForm: true,
      }
    },
    computed: {},
    methods: {},
    components: {
      RegisterOwner,
    }
  }
</script>


<style scoped>
  .regbut {
    padding: 20px;
  }

  h1 {
    padding: 8vh;
  }

  .registration {
    min-height: 94vh;
  }

  .regbody {
    margin-top: 10vh;
  }

  @media only screen and (max-width: 450px) {
    .regbody {
      margin-top: 12vh;
    }
  }
</style>