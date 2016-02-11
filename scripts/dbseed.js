var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/somm')

var DB = require('../models/winemodels')

// TYPES
var international = new DB.typeModel ({
	name : 'International'
})
international.save(function(err, doc){
	console.log(err)
})
var regional = new DB.typeModel ({
	name : 'Regional'
})
regional.save(function(err, doc){
	console.log(err)
})

// WINES
var cabernetSauv = new DB.grapeModel({
	name : 'Cabernet Sauvignon',
	type : international,
	characteristics : ['Balck Currant', 'Cedar', 'High tannin']
})
cabernetSauv.save(function(err, doc){
	console.log(err)
})
var chardonnay = new DB.grapeModel({
	name : 'Chardonnay',
	type : international,
	characteristics : ['Broad', 'Versatile', 'Inoffensive - unless over-oaked']
})
chardonnay.save(function(err, doc){
	console.log(err)
})
var pinotNoir = new DB.grapeModel({
	name : 'Pinot Noir',
	type : international,
	characteristics : ['Cherry', 'Raspberry', 'Violets', 'Game', 'Mid-ruby']
})
pinotNoir.save(function(err, doc){
	console.log(err)
})
var shiraz = new DB.grapeModel({
	name : 'Shiraz/Syrah',
	type : international,
	characteristics : ['Black Pepper', 'Dark Chocolate', 'Notable tannin']
})
shiraz.save(function(err, doc){
	console.log(err)
})
var merlot = new DB.grapeModel({
	name : 'Merlot',
	type : international,
	characteristics : ['Plump', 'Soft', 'Plummy']
})
merlot.save(function(err, doc){
	console.log(err)
})
var sauvignonBlanc = new DB.grapeModel({
	name : 'Sauvignon Blanc',
	type : international,
	characteristics : ['Grass', 'Green fruits', 'razor-sharp', 'rarely oaked']
})
sauvignonBlanc.save(function(err, doc){
	console.log(err)
})
var riesling = new DB.grapeModel({
	name : 'Riesling',
	type : international,
	characteristics : ['Aromatic', 'Delicate', 'Racy', 'Expressive', 'Rarely oaked']
})
riesling.save(function(err, doc){
	console.log(err)
})
var semillon = new DB.grapeModel({
	name : 'Semillon',
	type : international,
	characteristics : ['Figs', 'Citrus', 'Lanolin', 'Full-bodied', 'Rich']
})
semillon.save(function(err, doc){
	console.log(err)
})
var grancheNoir = new DB.grapeModel({
	name : 'Granche Noir',
	type : regional,
	characteristics : ['Pale', 'Sweet', 'Ripe', 'Useful for rose']
})
grancheNoir.save(function(err, doc){
	console.log(err)
})
var savgiovese = new DB.grapeModel({
	name : 'Savgiovese',
	type : regional,
	characteristics : ['Tangy', 'Lively', 'Variable', 'From prunes to farmyard']
})
savgiovese.save(function(err, doc){
	console.log(err)
})
var cabernetFranc = new DB.grapeModel({
	name : 'Cabernet Franc',
	type : regional,
	characteristics : ['Leafily aromatic', 'Refreshing', 'Rarely heavy']
})
cabernetFranc.save(function(err, doc){
	console.log(err)
})
var tempranillo = new DB.grapeModel({
	name : 'Tempranillo',
	type : regional,
	characteristics : ['Tobacco leaves', 'Spice', 'Leather']
})
tempranillo.save(function(err, doc){
	console.log(err)
})
var mourvedre = new DB.grapeModel({
	name : 'Mourvedre',
	type : regional,
	characteristics : ['Animal', 'Blackberries', 'Alcoholic', 'tannic']
})
mourvedre.save(function(err, doc){
	console.log(err)
})
var nebbiolo = new DB.grapeModel({
	name : 'Nebbiolo',
	type : regional,
	characteristics : ['Tar', 'Roses', 'Violets', 'Orange with black tints']
})
nebbiolo.save(function(err, doc){
	console.log(err)
})
var zinfandel = new DB.grapeModel({
	name : 'Zinfandel',
	type : regional,
	characteristics : ['Warm berry flavours', 'Alcohol', 'Sweetness']
})
zinfandel.save(function(err, doc){
	console.log(err)
})
var malbec = new DB.grapeModel({
	name : 'Malbec',
	type : regional,
	characteristics : ['Spicy and Rich in Argentina', 'Gamey in Cahors']
})
malbec.save(function(err, doc){
	console.log(err)
})
var touriga = new DB.grapeModel({
	name : 'Touriga',
	type : regional,
	characteristics : ['Tannic', 'Fireworks', 'Occasionally Porty']
})
touriga.save(function(err, doc){
	console.log(err)
})
var carmenere = new DB.grapeModel({
	name : 'Carmenere',
	type : regional,
	characteristics : ['Firm', 'Bordeaux-like', 'Can be slightly green']
})
carmenere.save(function(err, doc){
	console.log(err)
})
var pinotGris = new DB.grapeModel({
	name : 'Pinot Gris',
	type : regional,
	characteristics : ['Full', 'Golden', 'Smoky', 'Pungent']
})
pinotGris.save(function(err, doc){
	console.log(err)
})
var gewurztraminer = new DB.grapeModel({
	name : 'Gewurztraminer',
	type : regional,
	characteristics : ['Lychees', 'Roses', 'Heady', 'High alcohol', 'Deep-coloured']
})
gewurztraminer.save(function(err, doc){
	console.log(err)
})
var cheninBlanc = new DB.grapeModel({
	name : 'Chenin Blanc',
	type : regional,
	characteristics : ['Extremely versatile', 'Honey', 'Damp straw']
})
cheninBlanc.save(function(err, doc){
	console.log(err)
})
var viognier = new DB.grapeModel({
	name : 'Viognier',
	type : regional,
	characteristics : ['Heady', 'Full-bodied', 'Hawthorn blossom', 'Apricots']
})
viognier.save(function(err, doc){
	console.log(err)
})
var muscatBlanc = new DB.grapeModel({
	name : 'Muscat Blanc',
	type : regional,
	characteristics : ['Grapey', 'Relatively simple', 'Often sweet']
})
muscatBlanc.save(function(err, doc){
	console.log(err)
})
var marsanne = new DB.grapeModel({
	name : 'Marsanne',
	type : regional,
	characteristics : ['Almond', 'Marzipan aromas', 'Very full-bodied']
})
marsanne.save(function(err, doc){
	console.log(err)
})

var ontario = new DB.regionModel({
	name : 'Ontario',
	villages : niagara
})