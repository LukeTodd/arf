<template>
   <div class="profCard row">
      <div class="col-12">
         <div v-if="activePet.name" class=" row">
            <div class="col-12 col-md-4">
               <div class="row">
                  <div class="col-6 offset-3">
                     <h2>{{activePet.name}}</h2>
                  </div>
                  <div class="col-3">
                     <edit-pet></edit-pet>
                  </div>
               </div>
               <button class=' check btn-success' v-if="!activePet.checkedIn"
                  @click="checkIn(); timeIn()">CHECK-IN</button>
               <button class="check btn-danger" v-if="activePet.checkedIn"
                  @click="checkOut(); timeOut()">CHECK-OUT</button><br>
               <img class="activepetimg" v-bind:src="activePet.img">
               <h6>Breed: {{activePet.breed}}</h6>
               <button type="button" class="btn btn-outline-light vall" data-toggle="modal"
                  data-target="#notes-modal">View
                  All Notes</button>
               <show-notes></show-notes>
            </div>
            <div class="col-12 offset-md-1 col-md-7  d-flex flex-column justify-content-center">
               <h5>{{pstatus}}</h5>
               <p>Checked in Time: {{timeCard.inTime | formatTime}} </p>
               <p>Checked out Time: {{timeCard.outTime | formatTime}}</p>

               <p v-if="timeCard.totalTime">Total Time: {{timeCard.totalTime | getHours}} <button
                     class="btn btn-outline-success btn-sm" data-toggle="modal"
                     data-target="#exampleModalCenter">Bill</button></p>
               <p v-else>Total Time: N/A</p>
               <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title text-dark" id="exampleModalCenterTitle">BILLING</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="modal-body">
                           <div v-if="timeCard.totalTime" class="text-dark">{{timeCard.totalTime | getHours}} x $4.00 =
                              {{'$' + hourRate().toFixed(2)}} </div>
                           <div v-else> hello </div>
                        </div>
                        <div class="modal-footer">
                           <button type="button" data-dismiss="modal" class="btn btn-primary"
                              @click="billed(), $router.push({name: 'Billing'})">Charge Account</button>
                        </div>
                     </div>
                  </div>
               </div>
               <dog-note></dog-note>
            </div>
         </div>
         <div class="row ">
            <div class="col-12">
               <br>
               <h5>Forms</h5>
               <button @click="addNote = true, reportCard = false, incidentReport = false"
                  class="btn btn-outline-light vall">Notes</button>
               <button @click="addNote = false, reportCard = true, incidentReport = false"
                  class="btn btn-outline-light vall">Report
                  Card</button>
               <button @click="addNote = false, reportCard = false, incidentReport = true"
                  class="btn btn-outline-light vall">Incident Report</button>
            </div>
            <div class="col-12" v-show="addNote">
               <add-note></add-note>
            </div>
            <div class="col-12" v-show="incidentReport">
               <incident-report></incident-report>
            </div>
            <div class="col-12" v-show="reportCard">
               <report-card></report-card>
            </div>
         </div>
         <div class="row">
            <div class="col-12 billing-card">
            </div>
         </div>
      </div>

   </div>
</template>

<script>
   import EditPet from '@/components/EmployeeComponents/EditPet.vue'
   import IncidentReport from '@/components/EmployeeComponents/IncidentReport.vue'
   import AddNote from '@/components/EmployeeComponents/AddNote.vue'
   import DogNote from '@/components/EmployeeComponents/DogNote.vue'
   import Moment from 'moment'
   import ReportCard from '@/components/EmployeeComponents/ReportCard.vue'
   import ShowNotes from '@/components/EmployeeComponents/ShowNotes.vue'



   export default {
      name: "PetProfile",
      props: [],
      data() {
         return {
            addNote: false,
            incidentReport: false,
            reportCard: false
         }
      },
      mounted() {
         if (this.$store.state.timeCard.length > 0) {
            this.$store.dispatch('getTimeCard')
         }
      },
      computed: {
         activePet() {
            return this.$store.state.activePet
         },
         timeCard() {

            return this.$store.state.timeCard || {}
         },
         pstatus() {
            if (this.activePet.checkedIn) {
               return 'Checked In'
            }
            return 'Checked Out'
         },
         getHours() {
            let date = this.$store.state.timeCard.totalTime
            let hour = (date / 3600000).toFixed(2)
            if (hour < 1) { hour = 1 }
            if (!date) { hour = 0 }
            return hour
         }
      },
      filters: {
         formatTime(date) {
            if (!date) return 'N/A'
            return Moment(date).format("h:mm:ss a")
         },
         getHours(date) {
            let hour = (date / 3600000).toFixed(2)
            if (hour < 1) { hour = 1 }
            if (!date) { hour = 0 }
            return hour + ' ' + 'Hours'
         }
      },
      methods: {
         billed() {
            let timeCardId = this.$store.state.timeCard._id
            let petOwnerId = this.$store.state.activePet.petOwnerId
            let petId = this.$store.state.activePet._id
            let billed = this.getHours.toFixed(2) * 4
            let payload = {
               timeCardId,
               petOwnerId,
               petId,
               billed
            }

            return this.$store.dispatch('editTimeCard', payload)
         },
         hourRate() {
            let hourRate = this.getHours * 4
            return hourRate
         },
         timeIn() {
            let inTime = Date.now()
            let { _id: petId, petOwnerId } = this.$store.state.activePet //destructuring            
            let payload = {
               inTime,
               petOwnerId,
               petId
            }
            return this.$store.dispatch('createTimeCard', payload)
         },
         timeOut() {

            let timeCardId = this.$store.state.timeCard._id
            let petId = this.$store.state.activePet._id
            let petOwnerId = this.$store.state.activePet.petOwnerId
            let outTime = Date.now()
            let inTime = this.$store.state.timeCard.inTime
            let totalTime = outTime - inTime || 0


            let payload = {
               outTime,
               petId,
               timeCardId,
               petOwnerId,
               totalTime,
            }

            return this.$store.dispatch('editTimeCard', payload)
         },
         checkIn() {

            let { checkedIn, _id: petId, name: petName } = this.$store.state.activePet //destructuring
            if (checkedIn) {
               return alert("This pet is already checked in")
            }
            checkedIn = true
            if (!petName) {
               return alert("Please select a pet")
            }

            let payload = {
               checkedIn,
               petId,
               petName
            }
            return this.$store.dispatch('editActivePet', payload)
         },
         checkOut() {
            let { checkedIn, _id: petId, name: petName } = this.$store.state.activePet //destructuring
            if (checkedIn == false) {
               return alert("This pet is already checked in")
            }
            checkedIn = false
            if (!petName) {
               return alert("Please select a pet")
            }
            let payload = {
               checkedIn,
               petId,
               petName
            }
            return this.$store.dispatch('editActivePet', payload)
         }
      },
      components: {
         EditPet,
         IncidentReport,
         AddNote,
         DogNote,
         ReportCard,
         ShowNotes
      }
   }
</script>
<style scoped>
   .check {
      border-radius: 5px;
      margin: 5px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.644);
   }

   .activepetimg {
      max-height: 30vh;
      min-height: 30vh;
      min-width: 23vw;
      max-width: 24vw;
      object-fit: cover;
      border-radius: 20px;
      margin-top: 10px;
      border-radius: 10px;
      box-shadow: 3px 3px 3px #89a6b800;
      margin-bottom: 8px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.61);
      border-style: double;
   }

   @media only screen and (max-width: 450px) {
      .activepetimg {
         max-height: 30vh;
         min-height: 30vh;
         min-width: 75vw;
         max-width: 75vw;
      }
   }

   .profCard {
      background-image: linear-gradient(#89a6b800, #384349);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      border-top-color: #384349;
      border-right-color: #384349;
      border-right-style: solid;
      border-top-style: solid;
      letter-spacing: 1px;
      padding-top: 1vh;
      padding-bottom: 1vh;
      margin-top: 3vh;
      color: white;
      text-shadow: -1px -1px black;
      letter-spacing: 2px;
      align-items: center !important;
      border-radius: 20px;
      margin-bottom: 15px;
   }

   .pet-card {
      background-image: linear-gradient(#89a6b8, #384349);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      border-top-color: #384349;
      border-right-color: #384349;
      border-right-style: solid;
      border-top-style: solid;
      padding: 5px 0px;
      margin: 0px 0px;
      border-radius: 10px;
   }

   .notes-card {
      background-image: linear-gradient(#89a6b8, #384349);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      border-top-color: #384349;
      border-right-color: #384349;
      border-right-style: solid;
      border-top-style: solid;
      padding: 5px 0px;
      margin: 8px 0px;
      border-radius: 10px;
   }

   /* p {
      font-size: 25px;
   } */

   .vall {
      margin-top: 10px;
      margin-right: 5px;
   }

   hr.pet {
      border: 10px solid rgb(56, 67, 73);
      border-radius: 5px;
   }
</style>