<template>
  <div class="login">
    <div class="row cuteDog">
      <div class="col-12">
        <form class="coolForm" v-if="loginForm" @submit.prevent="loginUser">
          <input class="form-control bg-transparent text-dark" type="email" v-model="creds.email" placeholder="email">
          <input class="form-control bg-transparent text-dark" type="password" v-model="creds.password"
            placeholder="password">
          <button class="btn btn-secondary" type="submit">Login</button>
        </form>
        <form class="coolForm" v-else @submit.prevent="register">
          <input class="form-control bg-transparent text-dark" type="text" v-model="newUser.name" placeholder="name">
          <input class="form-control bg-transparent text-dark" type="email" v-model="newUser.email" placeholder="email">
          <input class="form-control bg-transparent text-dark" type="password" v-model="newUser.password"
            placeholder="password">
          <button class="btn btn-secondary" type="submit">Create Account</button>
        </form>
      </div>
      <div class="action col-12" @click="loginForm = !loginForm">
        <p v-if="loginForm">No account? Click here to Register</p>
        <p v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
    <div class="row full">

      <div class="col-12 oneBar">
        <h2>A r f</h2>
        <p>is a CRM desgined for managing relationships and interactions with customers and their
          pets</p>
      </div>
      <div class="col-12 twoBar">
        <h3 class="explanation">as a business, you will create an account which gives you access to...</h3>
        <ul class="prettyList">
          <li class="firstLine">all pet and owner info</li>
          <li class="secondLine">pet checks ins and outs</li>
          <li class="thirdLine">create/view reports on pets</li>
          <li class="fourthLine">billing</li>
        </ul>
      </div>
      <div class="col-12 threeBar">
      </div>
      <div class="col-12 fourBar">

      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style scoped>
  .action {
    cursor: pointer;
    color: white;
    text-shadow: -1px -1px black;
  }

  .cuteDog {
    background-image: url('https://lostdogsillinois.org/wp-content/uploads/2016/04/dog-close-up-backgrounds-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  }

  .full {
    margin-left: -15px;
    margin-right: -15px;
  }

  .oneBar {
    background-color: black;
    height: 250px;
  }

  .twoBar {
    height: 335px;
    background-color: white;
  }

  .threeBar {
    height: 363px;
    background-image: url('http://www.timelinecoverbanner.com/facebook-covers/2011/12/dew-on-grass-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }



  .coolForm {
    margin-top: 100px;
    width: 244px;
    text-align: center;
    margin-left: 525px;
  }

  @media only screen and (max-width: 450px) {
    .coolForm {
      margin-top: 86px;
      width: 244px;
      text-align: center;
      margin-left: 43px;

    }
  }

  h2 {
    color: white;
    margin-top: 20px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
  }

  /* 
  p {
    color: white;
    margin-top: 10px;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 2px 2px black;
  } */

  .explanation {
    text-align: center;
    margin-top: 15px;
  }

  .prettyList {
    text-align: left;
    margin-top: 30px;
    font-size: 19px;
    margin-left: 450px;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
  }

  @media only screen and (max-width: 450px) {
    .prettyList {
      text-align: left;
      margin-left: 38px;
      margin-top: 30px;
      font-size: 19px;
      margin-left: 20px;
      font-size: 22px;
      font-family: 'Montserrat', sans-serif;
    }
  }
</style>