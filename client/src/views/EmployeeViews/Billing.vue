<template>
  <div class="row billing">
    <OwnerBillNav class="landNav">
    </OwnerBillNav>
    <div class="col-12">
      <h1 class="ownerTitle"></h1>

    </div>
    <div class="col-12 col-md-8 offset-md-2">
      <table class="table bg-light mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Owner Name</th>
            <th scope="col">Current Balance </th>
          </tr>
          <br>
        </thead>
        <tbody>
          <OwnerBill v-for="owner in owners" :ownerData="owner">
          </OwnerBill>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  import OwnerBillNav from '@/components/EmployeeComponents/OwnerBillNav.vue'
  import router from '@/router.js'
  import OwnerBill from '@/components/EmployeeComponents/OwnerBill.vue'
  export default {
    name: "billing",
    created() { },
    props: [],
    mounted() {
      this.$store.dispatch("getOwners")
      this.$store.dispatch("getTimeCard")
    },
    data() {
      return {}
    },
    computed: {
      timeCards() {
        return this.$store.state.timeCards
      },
      owners() {
        return this.$store.state.owners
      },
      ownerMatches() {
        return this.$store.state.ownerMatches
      },
      activeOwner() {
        return this.$store.state.activeOwner
      }

    },
    methods: {},
    components: {
      OwnerBill,
      OwnerBillNav
    }
  }
</script>
<style scoped>
  .ownerTitle {
    margin-top: 100px;
    margin-bottom: 47px;
  }
</style>