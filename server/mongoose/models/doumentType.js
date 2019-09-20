module.exports = Mongoose.model('documentType', {
  name: String,
  publicUrl: String,
  inheritFrom: Array,
  privileges: Array,
  dataTypes: Array
})
