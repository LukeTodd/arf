let router = require('express').Router()
let Notes = require('../models/note')


let baseRoute = '/petowners/:petOwnerId/pets/:petId/notes'

//GET ALL NOTES
router.get("/petowners/all/pets/all/notes", (req, res, next) => {
  Notes.find({ flagged: "Incident" })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//GET
//TESTED AND WORKS
router.get(baseRoute, (req, res, next) => {
  Notes.find({ petId: req.params.petId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//GET ONE
//TESTED AND WORKS
router.get(baseRoute + '/:id', (req, res, next) => {
  Notes.findOne({ _id: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})



//POST
//TESTED AND WORKS
router.post(baseRoute, (req, res, next) => {
  // req.body.identityId = req.session.uid
  Notes.create(req.body)
    .then(newNote => {
      res.send(newNote)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//DELETE

router.delete(baseRoute + '/:id', (req, res, next) => {
  Notes.deleteOne({ _id: req.params.id })
    .then(pet => {
      res.send("Successfully Deleted")
    })
    .catch(err => {
      res.status(400).send('Access Denied; Invalid Request')
    })
})

//PUT

router.put(baseRoute + '/:id', (req, res, next) => {
  Notes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(note => {
      res.status(200).send(note)
    })
    .catch(err => {
      res.status(400).send({ Error: err })
    })
})


module.exports = router