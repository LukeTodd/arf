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
              <a class="nav-link" @click="$router.push({name:'ELanding'})">Pets<span
                  class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Owners'})">Owners</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Incidents'})">Incidents</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Billing'})">Billing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push({name:'Registration'})">Registration</a>
            </li>
          </ul>
        </div>
        <div><button class="btn logoutbtn btn-outline-secondary" @click="logout"><i class="fas fa-sign-out-alt"></i>
            Logout</button></div>
      </nav>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
    <footer class="footer">
      <p>Footer Goes Here</p>
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
    /* background-image: url('http://i.imgur.com/mOL5g.jpg'); */
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
    padding-bottom: 1vh;
    padding-top: 1vh;
    cursor: pointer;
    background-color: #d1d3d3;
  }
</style>