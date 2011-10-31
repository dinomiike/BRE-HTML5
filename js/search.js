var regions = {
	"Arizona": {
		"Phoenix Area": [
			{
				"city": "Chandler"
			},
			{
				"city": "Phoenix"
			}
		]
	},
	"California": {
		"Inland Empire": {
			"Chino": {},
			"Chino Hills": {},
			"Colton": {}
		}
	},
	"Denver": {

	},
	"Washington": {

	}
};

var regions2 = {
	"locations": [ 
		{
			"Arizona": [
				{
					"Phoenix Area": [
						{
							"city": "Chandler"
						},
						{
							"city": "Phoenix"
						}
					]
				}
			]
		},
		{
			"California": [
				{
					"Inland Empire": [
						{
							"city": "Chino"
						},
						{
							"city": "Chino Hills"
						},
						{
							"city": "Colton"
						},
						{
							"city": "Diamond Bar"
						},
						{
							"city": "Moreno Valley"
						},
						{
							"city": "Riverside"
						}
					]
				},
				{
					"Los Angeles County": [
						{
							"city": "Los Angeles"
						},
						{
							"city": "Marina del Rey"
						},
						{
							"city": "Northridge"
						},
						{
							"city": "Pasadena"
						},
						{
							"city": "Santa Clarita"
						},
						{
							"city": "Valencia"
						},
						{
							"city": "Wilmington"
						}
					]
				}
			]
		}
	]
};

/*var regions2 = [
	["Denver", [
		"Centennial",
		"Greenwood Village",
		"Highlands Ranch",
		"Littleton",
		"Thornton",
		"Westminster"]],
	["Phoenix", [
		"Chandler",
		"Phoenix"]]
];*/

// Regions Object: State > Area > City > Property

var regions3 = {
	"states": [
		{
			"Arizona": [
				{
					"Phoenix Area": [
						{
							"Chandler": [
								{
									"property": "Pinnacle Queen Creek"
								},
								{
									"property": "Pinnacle Terrace"
								}
							]
						}
					]
				}
			]
		},
		{
			"California": [
				{
					"Inland Empire": [
						{
							"Chino": [
								{
									"property": "Enclave at Town Square"
								}
							]
						},
						{
							"Chino Hills": [
								{
									"property": "The Heights"
								},
								{
									"property": "The Summit"
								}
							]
						},
						{
							"Colton": [
								{
									"property": "Windrush Village"
								}
							]
						},
						{
							"Diamond Bar": [
								{
									"property": "Emerald Pointe"
								}
							]
						},
						{
							"Moreno Valley": [
								{
									"property": "Galleria at Towngate"
								}
							]
						},
						{
							"Riverside": [
								{
									"property": "Mission Grove Park"
								}
							]
						}
					]
				},
				{
					"Los Angeles County": [
						{
							"Los Angeles": [
								{
									"property": "5600 Wilshire"
								}
							]
						}
					]
				}
			]
		},
		{
			"state": "Denver"
		},
		{
			"state": "Washington"
		}
	]
};
