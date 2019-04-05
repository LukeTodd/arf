<template>
  <div class=" OwnerNav">
    <nav class="navbar navbar-light landNav">
      <form class="form-inline">
        <input @input="findOwnerMatches" class="form-control mr-sm-2" type="search" placeholder="Search Owner Name..."
          aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        <div class="btn-group">
          <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Sort By
          </button>
          <div class="dropdown-menu">
            <a @click='sortOwnerName' class="dropdown-item" href="#">A-Z</a>
            <a @click='sortOwnerName' class="dropdown-item" href="#">Amount Due</a>
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
      }
    }
  }
</script>
<style scoped>
  .landNav {
    background-color: #424c56;
    z-index: 5;
  }
</style>