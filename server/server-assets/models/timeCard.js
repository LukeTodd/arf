let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'TimeCard'

let schema = new Schema({
  inTime: { type: Number },
  outTime: { type: Number },
  totalTime: { type: Number, default: 0 },
  billed: { type: Number, default: 0 },
  todayBill: { type: Number },
  petId: { type: ObjectId, ref: 'Pet', required: true },
  petOwnerId: { type: ObjectId, ref: 'Owner', required: true },
  identityId: { type: ObjectId, ref: 'Identity' }
})

module.exports = mongoose.model(schemaName, schema)