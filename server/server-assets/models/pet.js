let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let schema = new Schema({
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  img: { type: String, default: "" },
  petOwnerId: { type: ObjectId, ref: 'PetOwner' },
  noteId: { type: ObjectId, ref: 'Note' },
  checkedIn: { type: Boolean, default: false },
  checkIn: { type: String, default: "" },
  checkOut: { type: String, default: "" },
  totalTime: { type: Number },
  identityId: { type: ObjectId, ref: 'Identity' }
})

module.exports = mongoose.model(schemaName, schema)
// module.exports = router