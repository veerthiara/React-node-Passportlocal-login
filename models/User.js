const mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
// const Schema = mongoose.Schema; this can be condensed to the code below

const {Schema} = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	name: String,
	dateadded: Date
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);
