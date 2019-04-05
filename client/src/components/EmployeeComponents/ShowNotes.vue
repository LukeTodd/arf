<template>
  <div class="row">
    <div class="showNotes col-12">
      <div class="modal row" tabindex="-1" role="dialog" id="notes-modal">
        <div class="modal-dialog col-12" role="document">
          <div class="modal-content row">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <h5 class="modal-header">All Notes</h5>
                </div>
                <div class="row">
                  <div class="col-10 offset-1 scroll">
                    <div class="row">
                      <div class="col-12" v-for="note in notes"
                        :class="{'bg-info' : note.flagged == 'General', 'bg-warning' : note.flagged == 'Pet Report', 'bg-danger' : note.flagged == 'Incident'}">
                        <div class="row">
                          <div class="col-9">
                            <p>Name: {{note.petName}}</p>
                            <p>Behavior: {{note.behavior}}</p>
                            <p>Diet: {{note.diet}}</p>
                            <p>Additional notes: {{note.body}}</p>
                          </div>
                          <div class="col-3">
                            <button @click="deleteNote(note)">Delete</button>
                          </div>
                        </div>
                        <hr>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="closebutton" aria-hidden="true">close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'showNotes',
    data() {
      return {}
    },
    props: [],
    computed: {
      notes() {
        return this.$store.state.notes
      },
    },
    methods: {
      deleteNote(note) {
        this.$store.dispatch('deleteNote', note)
      }
    },
    components: {},
  }
</script>


<style scoped>
  h5 {
    font-size: 25px;
  }

  p {
    margin-top: -10px;
    font-size: 15px;
  }

  .modal-content {
    background-image: linear-gradient(#89a6b8, #384349);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-bottom: 10px;
  }

  .closebutton {
    color: white;
    cursor: pointer;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    padding: 1px 4px;
  }

  .scroll {
    overflow-y: scroll;
    height: 70vh;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #e7e7e7;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 9px;
    border-style: solid;
    border-color: #e7e7e7;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(160, 160, 160);
    border-radius: 10px;
    border-style: solid;
    border-color: rgb(160, 160, 160);
  }
</style>