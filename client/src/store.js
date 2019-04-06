import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    owners: [],
    pets: [],
    notes: [],
    note: {},
    activeOwner: {},
    activePet: {},
    petMatches: [],
    ownerMatches: [],
    timeCard: [],
    ownerBal: {}
  },
  mutations: {
    setOwnerMatches(state, data) {
      state.ownerMatches = data
    },
    setPetMatches(state, data) {
      state.petMatches = data
    },
    setUser(state, user) {
      state.user = user
    },
    addOwner(state, data) {
      state.owners.push(data)
    },
    deleteOwner(state, data) {
      state.owners.push(data)
    },
    setOwners(state, data) {
      state.owners = data
    },
    setActiveOwner(state, data) {
      state.activeOwner = data
    },
    addPet(state, data) {
      state.pets.push(data)
    },
    deletePet(state, data) {
      state.pets.push(data)
    },
    setPets(state, data) {
      state.pets = data
    },
    setActivePet(state, data) {
      state.activePet = data
    },
    clearActivePet(state, data) {
      Vue.set(state, "activePet", {})
    },
    clearActiveOwner(state, data) {
      Vue.set(state, "activeOwner", {})
    },
    clearPets(state, data) {
      Vue.set(state, "pets", {})
    },
    addNote(state, data) {
      state.notes.push(data)
    },
    setNotes(state, data) {
      state.notes = data
    },
    setTimeCard(state, data) {
      state.timeCard = data
    },
    lastTimeCard(state, data) {
      state.timeCard.pop()
    },
    setOwnerBal(state, data) {
      state.ownerBal = data
    }

  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },
    //#endregion
    //#region -- OWNER STUFF
    getAllOwnerBal({ commit, state }, payload) {

      api.get('employee/petowners/bal/')
        .then(res => {
          commit('setOwnerBal', res.data)
        })
    },
    createOwner({ commit, state }, payload) {
      api.post('employee/petowners/', payload)
        .then(res => {
          console.log(res)
          commit('addOwner', res.data)
          router.push({ name: 'Profile', params: { id: res.data._id } })
        })
    },
    deleteOwner({ dispatch }, payload) {
      api.delete('employee/petowners/' + payload.ownerId, payload)
        .then(res => {
          console.log(res)
          dispatch('getOwners', payload.ownerId)
        })
    },
    getOwners({ commit, dispatch }, payload) {

      api.get('employee/petowners')
        .then(res => {
          console.log(res)
          commit('setOwners', res.data)
        })
    },
    getActiveOwner({ commit, dispatch }, ownerId) {
      api.get('employee/petowners/' + ownerId)
        .then(res => {
          console.log(res)
          commit('setActiveOwner', res.data)
        })
    },
    editOwner({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload._id, payload)
        .then(res => {
          dispatch('getActiveOwner', payload._id)
        })
    },
    //#endregion
    //#region --PET STUFF--
    createPet({ commit, dispatch }, payload) {
      console.log(payload)
      api.post('employee/petowners/' + payload.owner + '/pets', payload)
        .then(res => {
          console.log(res)
          commit('addPet', res.data)
          commit('setActiveOwner', res.data)
          dispatch('getPetsByOwnerId', res.data)
        })
    },
    deletePet({ dispatch }, payload) {
      api.delete('employee/petowners/' + payload.owner + '/pets/' + payload.pet, payload)
        .then(res => {
          console.log(res)
          dispatch('getOwners', payload.ownerId)
        })
    },
    getPets({ commit, dispatch }, payload) {
      api.get('employee/petowners/all/pets')
        .then(res => {
          console.log(res)
          commit('setPets', res.data)
          commit('clearActiveOwner')
        })
    },
    getPetsByOwnerId({ commit, dispatch }, ownerId) {
      api.get('employee/petowners/' + ownerId + '/pets')
        .then(res => {
          console.log(res)
          commit('setPets', res.data)
          commit('clearActivePet')
        })
    },
    getActivePet({ commit, dispatch }, payload) {
      api.get('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId, payload)
        .then(res => {
          console.log(res)
          commit('setActivePet', res.data)
          dispatch('getTimeCard', payload)
          dispatch('getNotes', res.data)
        })
    },
    getActivePet2({ commit, dispatch }, payload) {
      api.get('employee/petowners/' + payload.petOwnerId + '/pets/' + payload._id, payload)
        .then(res => {
          console.log(res)
          commit('setActivePet', res.data)
        })
    },
    editActivePet({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId, payload)
        .then(res => {
          console.log(res)
          commit('setActivePet', res.data)
        })
    },
    editPet({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload.petOwnerId + '/pets/' + payload._id, payload)
        .then(res => {
          dispatch('getActivePet2', payload)
        })
    },
    petMatches({ commit, dispatch }, payload) {
      commit('setPetMatches', payload)

    },
    findOwnerMatches({ commit, dispatch }, payload) {
      commit('setOwnerMatches', payload)
    },
    //#endregion
    //#region --NOTES--
    createNote({ commit, dispatch }, payload) {
      console.log(payload)
      api.post('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/notes', payload)
        .then(res => {
          console.log(res)
          commit('addNote', res.data)
        })
    },
    editNote({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/notes', payload)
        .then(res => {
          console.log(res)
          dispatch('setNotes', payload._id)
        })
    },
    getNotes({ commit, dispatch }, payload) {
      api.get('employee/petowners/' + payload.petOwnerId + '/pets/' + payload._id + '/notes')
        .then(res => {
          console.log(res)
          commit('setNotes', res.data)
        })
    },
    getAllNotes({ commit, dispatch }, payload) {
      api.get('employee/petowners/all/pets/all/notes')
        .then(res => {
          debugger
          console.log(res)
          commit('setNotes', res.data)
          dispatch('getAllOwners')
        })
    },
    deleteNote({ commit, dispatch }, payload) {
      api.delete('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/notes/' + payload._id, payload)
        .then(res => {
          console.log(res)
          dispatch('getNotes', payload)
        })
    },

    //#endregion
    //#region --TIMECARD--
    createTimeCard({ commit, dispatch }, payload) {
      api.post('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/timecard', payload)
        .then(res => {
          commit('setTimeCard', res.data)
        })
    },
    getTimeCard({ commit, dispatch }, payload) {
      api.get('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/timecard', payload)
        .then(res => {
          if (!res.data.length) { commit('setTimeCard', res.data[res.data.length - 1]) }
        })
    },
    getTimeCardbyOwner({ commit, dispatch }, payload) {
      api.get('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/timecard', payload)

    },
    editTimeCard({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/timecard/' + payload.timeCardId, payload)
        .then(res => {
          commit('setTimeCard', res.data)
        })
    },
    submitTimeCard({ commit, dispatch }, payload) {
      api.put('employee/petowners/' + payload.petOwnerId + '/pets/' + payload.petId + '/timecard/' + payload.timeCardId, payload)

    }
    //#endregion
  }
})
