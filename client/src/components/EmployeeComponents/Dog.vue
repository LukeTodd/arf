<template>
  <div class="col-12 col-md-3 mb-3 petcards d-flex justify-content-center text-dark card-group click">
    <div @click="$router.push({name: 'Profile', params: {id:dogData.petOwnerId}})" class="">
      <img v-bind:src="dogImg" class="card-img-top">
      <div class="card-body">
        <hr>
        <h3 class="card-text">{{dogData.name}}</h3>
        <hr>
        <H6>{{pstatus}}</H6>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "dog",
    props: ["dogData", "ownerData"],
    mounted() { },
    data() {
      return {}
    },
    computed: {
      dogImg() {
        return this.dogData.img || "http://report.hsppr.org/images/numbers-09.png"
      },
      pstatus() {
        if (this.dogData.checkedIn) {
          return 'Checked-In'
        }
        return 'Absent'
      },
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
  .petcards {
    flex-direction: row;
    color: white;
    background-color: rgba(235, 229, 229, 0.671);
    /* border-radius: 20px; */
    border-style: solid;
    border-width: thin;
    border-radius: 25px;
    border-color: rgba(0, 0, 0, 0.171);
  }

  @media only screen and (max-width: 450px) {
    .petcards {
      border-radius: 0px;
    }
  }

  .card-img-top {
    max-height: 30vh;
    min-height: 30vh;
    min-width: 23vw;
    border-radius: 20px;
    margin-top: 10px;
  }

  .click:hover {
    cursor: pointer;
  }

  /* img {
    border-style: dashed;
    border-color: white;
    border-width: thin;
  } */
</style>