<template>
  <div class="IncidentsNav">
    <nav class="navbar navbar-light landNav">
      <form class="form-inline">
        <input @input="findOwnerMatches" class="searchbar form-control mr-sm-2" type="search"
          placeholder="Search Owner Name..." aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a @click='sortOwnerName' class="dropdown-item" href="#">A-Z</a>
          </div>
        </div>
        <input @input="findPetMatches" class="searchbar form-control mr-sm-2" type="search"
          placeholder="Search by Pet Name..." aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a @click='sortPetName' class="dropdown-item" href="#">Name</a>
            <a @click='sortCheckedIn' class="dropdown-item" href="#">Checked In</a>
          </div>
        </div>
      </form>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "OwnerNav",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {
      sortOwnerName() {
        let owners = this.$store.state.owners
        owners.sort(function (a, b) {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        })
      },
      findOwnerMatches(e) {
        let owners = [...this.$store.state.owners]
        let query = e.target.value.toLowerCase()
        let matches = owners.filter(owner => owner.name.toLowerCase().includes(query))
        if (query && !matches.length) {
          return alert('No Matching Results...')
        }
        if (!query) {
          matches = []
        }
        this.$store.dispatch('findOwnerMatches', matches)
      },
      sortPetName() {
        let pets = this.$store.state.pets
        pets.sort(function (a, b) {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        })
      },
      sortCheckedIn() {
        let pets = this.$store.state.pets
        pets.sort(function (a, b) {
          return b.checkedIn > a.checkedIn ? 1 : -1
        })
      },
      findPetMatches(e) {
        let pets = [...this.$store.state.pets]
        let query = e.target.value.toLowerCase()
        let matches = pets.filter(pet => pet.name.toLowerCase().includes(query))
        if (query && !matches.length) {
          return alert('No Matching Results...')
        }
        if (!query) {
          matches = []
        }
        this.$store.dispatch('petMatches', matches)
      }
    }
  }
</script>
<style scoped>
  .landNav {
    top: 55px;
    background-color: #424c56;
    z-index: 5;
    border-radius: 0px 0px 10px 10px;

  }

  .searchbar {
    margin-right: 10vw;
    margin-left: 10vw;
  }
</style>