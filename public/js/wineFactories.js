angular.module('wineApp', [])

angular.module('wineApp')
	.factory('grapeFactory', function(){
		var grapeType = []
		var grapeList = []

		var Type = function(name){
			this.name = name

		grapeType.push(this)
		}
		var international = new Type('International')
		var regional = new Type('Regional')

		var Grape = function(name, type, characteristics){
			this.name = name;
			this.type = type;
			this.characteristics = characteristics;
		

		grapeList.push(this)
		}

		var cabSauvignon = new Grape('Cabernet Sauvignon', international, ['Blackcurrant', 'Cedar', 'High tannin'])
		var chardonnay = new Grape('Chardonnay', international, ['Broad', 'Versatile', 'Inoffensive - unless over-oaked'])
		var pinotNoir = new Grape('Pinot Noir', international, ['Cherry', 'Raspberry', 'Violets', 'Game', 'Mid-ruby'])
		var shiraz = new Grape('Shiraz/Syrah', international, ['Black Pepper', 'Dark Chocolate', 'Notable tannin'])
		var merlot = new Grape('Merlot', international, ['Plump', 'Soft', 'Plummy'])
		var sauvignonBlanc = new Grape('Sauvignon Blanc', international, ['Grass', 'Green fruits', 'razor-sharp', 'rarely oaked'])
		var riesling = new Grape('Riesling', international, ['Aromatic', 'Delicate', 'Racy', 'Expressive', 'Rarely oaked'])
		var semillon = new Grape ('Semillon', international, ['Figs', 'Citrus', 'Lanolin', 'Full-bodied', 'Rich'])
		var granacheNoir = new Grape('Grenache Noir', regional, ['Pale', 'Sweet', 'Ripe', 'Useful for rose'])
		var savgiovese = new Grape('Sangiovese', regional, ['Tangy', 'Lively', 'Variable', 'From prunes to farmyard'])
		var cabernetFranc = new Grape('Cabernet Franc', regional, ['Leafily aromatic', 'Refreshing', 'Rarely heavy'])
		var tempranillo = new Grape('Tempranillo', regional, ['Tobacco leaves', 'Spice', 'Leather'])
		var mourvedre = new Grape('Mourvedre', regional, ['Animal', 'Blackberries', 'Alcoholic', 'tannic'])
		var nebbiolo = new Grape('Nebbiolo', regional, ['Tar', 'Roses', 'Violets', 'Orange with black tints'])
		var zinfandel = new Grape('Zinfandel', regional, ['Warm berry flavours', 'Alcohol', 'Sweetness'])
		var malbec = new Grape('Malbec', regional, ['Spicy and Rich in Argentina', 'Gamey in Cahors'])
		var touriga = new Grape('Touriga Nacional', regional, ['Tannic', 'Fireworks', 'Occasionally Porty'])
		var carmenere = new Grape('Carmenere', regional, ['Firm', 'Bordeaux-like', 'Can be slightly green'])
		var pinotGris = new Grape('Pinot Gris', regional, ['Full', 'Golden', 'Smoky', 'Pungent'])
		var gewurztraminer = new Grape('Gewurztraminer', regional, ['Lychees', 'Roses', 'Heady', 'High alcohol', 'Deep-coloured'])
		var cheninBlanc = new Grape('Chenin Blanc', regional, ['Extremely versatile', 'Honey', 'Damp straw'])
		var viognier = new Grape('Viognier', regional, ['Heady', 'Full-bodied', 'Hawthorn blossom', 'Apricots'])
		var muscatBlanc = new Grape('Muscat Blanc', regional, ['Grapey', 'Relatively simple', 'Often sweet'])
		var marsanne = new Grape('Marsanne', regional, ['Almond', 'Marzipan aromas', 'Very full-bodied'])

		return {
			Type 	  : Type,
			grapeType : grapeType,
			Grape 	  : Grape,
			grapeList : grapeList

		}
})

angular.module('wineApp')
	.factory('worldFactory', function(){
		var villageList = []
		var regionalList = []
		var countryList = []
		var continentalList = []

		var Village = function(name, terroir, grapes, wines){
			this.name = name;
			this.grapes = grapes;
			this.wines = wines;

		villageList.push(this)
		}

		var Region = function(name, villages, terroir, grapes, wines){
			this.name = name;
			this.country = country;
			this.villages = villages;
			this.terroir = terroir;
			this.grapes = grapes;

		regionalList.push(this)
		}
		var ontario = new Region('Ontario', [niagaraPeninsula], '', [ chardonnay, riesling, cabernetFranc, merlot])
		var washington = new Region('Washington', [ ], '', [ riesling, chardonnay, cabSauvignon, merlot, shiraz, pinotGris])
		var california = new Region('California', [ ], '', [ ])
		var virginia = new Region('Virginia', [ ], '', [chardonnay, merlot, cabernetFranc, cabSauvignon, viognier])
		var newYork = new Region('New York', [ ], '', [])
		

		var Country = function(name, regions, laws, wines){
			this.name = name;
			this.continent = continent;
			this.regions = regions;
			this.laws = laws;
			this.wines = wines;

		countryList.push(this)
		}
		var france = new Country('France', europe, [ ], [aoc, aop, igp, vinDeFrance], [ ])
		var italy = new Country('Italy', [ ], [ ], [ ])
		var greece = new Country('Greece', [ ], [ ], [ ])
		var germany = new Country('Germany', [ ], [ ], [ ])
		var austria = new Country('Austria', [ ], [ ], [ ])
		var spain = new Country('Spain', [ ], [ ], [ ])
		var portugal = new Country('Portugal', [ ], [ ], [ ])
		var unitedStates = new Country('United States' [ ], [ ], [ ])
		var chile = new Country('Chile'[ ], [ ], [ ])
		var argentina = new Country('Argentina' [ ], [ ], [ ])
		var southAfrica = new Country('South Africa' [ ], [ ], [ ])
		var australia = new Country('Australia' [ ], [ ], [ ])
		var newZealand = new Country('New Zealand', [ ] [ ], [ ])
		var canada = new Country('Canada' [ ], [ontario], [ ], [ ])
		var mexico = new Country('Mexico' [ ], [ ], [ ])
		var switzerland = new Country('Switzerland', [ ], [ ], [ ])
		var hungary = new Country('Hungary', [ ], [ ], [ ])
		var england = new Country('England and Wales', [ ], [ ], [ ])
		var czech = new Country('The Czech Republic and Slovokia', [ ], [ ], [ ])
		var croatia = new Country('Croatia', [ ], [ ], [ ])
		var slovenia = new Country('Slovenia', [ ], [ ], [ ])
		var bulgaria = new Country('Bulgaria', [ ], [ ], [ ])
		var romania = new Country('Romania', [ ], [ ], [ ])
		var georgiaC = new Country('Georgia', [ ], [ ], [ ])
		var turkey = new Country('Turkey', [ ], [ ], [ ])
		var china = new Country('China' [ ], [ ], [ ])
		var japan = new Country('Japan',[ ], [ ], [ ])



		var Continent = function(name, countries){
			this.name = name;
			this.countries = countries;
		}
		
		var northAmerica = new Continent('North America', [unitedStates, canada, mexico])
		var southAmerica = new Continent('South America', [chile, argentina])
		var europe = new Continent('Europe', [france, italy, greece, germany, austria, spain, portugal])
		var africa = new Continent('Africa', [southAfrica])
		var australiaC = new Continent('Australia', [australia, newZealand])
		var asia = new Continent('Asia', [china, japan])
	})

angular.module('wineApp')
	.factory('wineFactory', function(){
		var wineList = []

		var Wine = function(name, grapes, countries, characteristics){
			this.name = name;
			this.grapes = grapes;
			this.countries = countries;
			this.characteristics = characteristics;

		wineList.push(this)
		}


	})

angular.module('wineApp')
	.factory('lawFactory', function(){
		var lawList = []

		var Law = function(name, info){
			this.name = name;
			this.info = info;

		lawList.push(this)
		}


	})
