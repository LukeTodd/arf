<template>
  <div class="col-12 col-sm-6 col-md-3 petcards d-flex justify-content-center text-dark click">
    <div @click="$router.push({name: 'Profile', params: {id:dogData.petOwnerId}})" class="">
      <img v-bind:src="dogImg" class="card-img-top">
      <div class="card-body">
        <hr>
        <h3 class="card-text">{{dogData.name}}</h3>
        <h3 class="card-text">{{pstatus}}</h3>
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
        return ''
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
    max-width: 23vw;
    margin: 30px 0px 0px 0px;
  }

  @media only screen and (max-width: 450px) {
    .petcards {
      border-radius: 25px;
      margin: 0px 5vw 10px 5vw;
      max-width: 90vw;
      overflow-x: hidden;
    }
  }

  .card-img-top {
    max-height: 30vh;
    min-height: 30vh;
    min-width: 21vw;
    border-radius: 20px;
    margin-top: 10px;
    object-fit: cover;
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