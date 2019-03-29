var mongoose = require('mongoose')
var connectionString = "mongodb://arf:arfarf!@den1.mongo1.gear.host:27001/arf"
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})
//   connection.dropCollection('notes', (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('notes success!')
//     }
//   })
//   connection.dropCollection('pets', (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('pets success!')
//     }
//   })
//   connection.dropCollection('petowners', (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('petowners success!')
//     }
//   })
//   connection.dropCollection('timecards', (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('timecards success!')
//     }
//   })
// })