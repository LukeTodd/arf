let router = require('express').Router()
let PetOwners = require('../models/petOwner')
// let TimeCards = require('../models/timeCard')

let baseRoute = '/petowners'
//GET ALL
//FIX ME
router.get(baseRoute, (req, res, next) => {
  PetOwners.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//GET OWNER BAL
// router.get(baseRoute + 'bal', (req, res, next) => {
//   let petOwnerId = req.param('id')
//   TimeCards.findById(petOwnerId)
//   for (let i = 0; i < TimeCards.length; i++) {
//     let ownerBal = PetOwners.balance
//     ownerBal += TimeCards[i].billed
//     return ownerBal
//     //needs better syntax and probably some other stuff
//   }

// })



//GET ONE
//TESTED AND WORKS
router.get(baseRoute + '/:id', (req, res, next) => {
  PetOwners.findOne({ _id: req.params.id })
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
  // req.body.authorId = req.session.uid
  PetOwners.create(req.body)
    .then(newOwner => {
      res.send(newOwner)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

//PUT
//TESTED AND WORKS
router.put(baseRoute + '/:id', (req, res, next) => {
  PetOwners.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(petOwner => {
      res.status(200).send(petOwner)
    })
    .catch(err => {
      res.status(400).send({ Error: err })
    })
})

//DELETE
//TESTED AND WORKS
router.delete(baseRoute + '/:id', (req, res, next) => {
  let petOwnerId = req.param('id')
  PetOwners.findById({ _id: petOwnerId })
    .then(petOwner => {
      petOwner.remove(err => {
        if (err) {
          console.log(err)
          next(err)
          return
        }
        res.send("Successfully Deleted")
      })
        .catch(err => {
          res.status(400).send('ACCESS DENIED; Invalid Request')
        })
    })
})





module.exports = router