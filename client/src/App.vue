<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light" v-show="$route.name != 'login'">
        <a class="navbar-brand" href="#" @click="$router.push({name:'ELanding'})">A r f</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'ELanding'})" data-target="#navbarSupportedContent"
                data-toggle="collapse">Pets<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Owners'})" data-toggle="collapse"
                data-target="#navbarSupportedContent">Owners</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Incidents'})" data-toggle="collapse"
                data-target="#navbarSupportedContent">Incidents</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Billing'})" data-toggle="collapse"
                data-target="#navbarSupportedContent">Billing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Registration'})" data-toggle="collapse"
                data-target="#navbarSupportedContent">Registration</a>
            </li>
          </ul>
          <button class="btn logoutbtn btn-outline-secondary" @click="logout"><i class="fas fa-sign-out-alt"></i>
            Logout</button>
        </div>
      </nav>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
    <footer class="page-footer footer font-small blue pt-4">
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase"></h5>
            <p class="quote"><i>The dog lives for the day, the hour, even the moment... ~Robert Falcon Scott</i></p>
          </div>
          <hr class="clearfix w-100 d-md-none pb-3">
          <!-- <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div> -->
          <!-- <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="#"> ARF</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      //Authenticate on startup
      this.$store.dispatch('authenticate')
    },
    data() {
      return {
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background-image: linear-gradient(#89a6b8, #384349);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    align-content: flex-start;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .navbar {
    position: fixed;
    right: 0px;
    left: 0px;
    z-index: 7;
    cursor: pointer;
    background-color: #e9eaea;

  }

  .footer {
    position: relative;
    bottom: 0px;
    right: 0px;
    left: 0px;
    /* padding-bottom: 1vh;
    padding-top: 1vh; */
    cursor: pointer;
    background-color: #d1d3d3;
  }

  .quote {
    text-size-adjust: 10px;
  }
</style>