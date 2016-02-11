var mongoose = require('mongoose');

var typeSchema = mongoose.Schema({
	name : {type : String}
});
var typeModel = mongoose.model('Type', typeSchema)

var grapeSchema = mongoose.Schema({
	name : {type : String},
	type : {},
	characteristics : {type : Array}
});
var grapeModel = mongoose.model('Grape', grapeSchema)

var wineSchema = mongoose.Schema({
	name : {type : String},
	grapes : {type : Array},
	characteristics : {type : Array}
});
var wineModel = mongoose.model('Wine', wineSchema)

var lawSchema = mongoose.Schema ({
	name : {type : String},
	info : {type : Array}
})
var lawModel - mongoose.model('Law', lawSchema)

var villageSchema = mongoose.Schema({
	name : {type : String},
	grapes : {type : Array},
	wines  : {type : Array},
});
var villageModel = mongoose.model('Village', villageSchema)

var regionSchema = mongoose.Schema({
	name : {type : String},
	villages : {type : Array},
	grapes : {type : Array},
	wines : {type : Array},
	laws : {type : Array}
});
var regionModel = mongoose.model('Region', regionSchema)

var countrySchema = mongoose.Schema({
	name : {type : String},
	regions : {type : Array},
	laws : {type : Array},
	wines : {type : Array}
}) 
var countryModel = mongoose.model('Country', countrySchema)

var continentSchema = mongoose.Schema({
	name : {type : String},
	countries : {type : Array}
})
var continentModel = mongoose.model('Continent', continentSchema)


module.exports = {
	typeModel 	   : typeModel,
	grapeModel 	   : grapeModel,
	wineModel 	   : wineModel,
	villageModel   : villageModel,
	regionModel    : regionModel,
	countryModel   : countryModel,
	continentModel : continentModel,
	lawModel 	   : lawModel
}
