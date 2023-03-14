var cards = {
	"water" : 
	{
		"legendary" : 
		{
			"name" : "Naga The Serpentine",
			"team" : "When your Champion is precise attacked, roll 1d6. On 6, negate the damage.",
			"bane" : "Each time any player's Hero with a Water-type bane token on it is in a Champion or Support position during that player's Beginning of Turn Phase, add 1 damage counter to that Hero."
		},
		
		"legendary-flip" : 
		{
			"name" : "Naga The Serpentine",
			"champion" : "When Naga The Serpentine precise attacks, add 1 bane token to its target. - OR - When Naga The Serpentine mass attacks, it gains 3 Strength.",
			"support" : "Spend 1MP to add 1 bane token to each of any player's Supports. - OR - Spend 2MP to add 3 bane tokens distributed amongst any number of Heroes.",
			"bane" : "Each time any player's Hero with a Water-type bane token on it is in a Champion or Support position during that player's Beginning of Turn Phase, add 1 damage counter to that Hero."
		},
		
		"1" : 
		{
			"name" : "Leviathan",
			"champion" : "When Leviathan precise attacks, it gains 1 Strength.",
			"support" : "Spend 1MP to add 3 damage counters to any player's Support, then skip your Attack phase."
		},
		
		"2" : 
		{
			"name" : "Sea Snake",
			"champion" : "When Sea Snake mass attacks, roll 1d6. On 5-6, it gains 1 Strength.",
			"support" : "Add X damage counters to Sea Snake. Your Champion gains X Strength."
		},
		
		"3" : 
		{
			"name" : "Venomous Hyrdrozoan",
			"champion" : "When Venomous Hyrdrozoan attacks, add bane tokens instead of damage counters to its target(s).",
			"support" : "When your Champion is attacked, roll 1d6. On 5-6, add 1 bane token to the attacking Champion."
		},
		
		"4" : 
		{
			"name" : "Saltwater Gorgon",
			"champion" : "When Saltwater Gorgon precise attacks, add 1 bane token to its target.",
			"support" : "When your Champion is destroyed, spend 1MP to add 2 damage counters to any players Champion."
		},
		
		"5" : 
		{
			"name" : "Terrarium Turtle",
			"champion" : "When Terrarium Turtle attacks, remove 1 damage counter from it.",
			"support" : "Move X damage counters from your Champion to Terrarium Turtle."
		},
		
		"6" : 
		{
			"name" : "Cold-Blooded Siren",
			"champion" : "Spend 1MP to switch any player's Champion with on of that player's Supports",
			"support" : "Spend 1MP to ad 1 damage counter to one of any player's Supports."
		},
		
		"7" : 
		{
			"name" : "Aqueous Ray",
			"champion" : "When Aqueous Ray is precise attacked, roll 16d. On 5-6, reduce the damage by 2.",
			"support" : "When your Champion is attacked, roll 1d6. On 5-6, reduce the damage by 2."
		},
		
		"8" : 
		{
			"name" : "Oracle of the Depths",
			"champion" : "Spend 1MP to rearrange the top 3 cards of the Sphere Deck.",
			"support" : "Spend 1MP to rearrange the top 3 cards of the Sphere deck."
		},
		
		"9" : 
		{
			"name" : "Resourceful Spider Crab",
			"champion" : "Spend 1MP to reverse Resourceful Spider Crab's Strength and Max HP.",
			"support" : "Spend 1MP to remove 1 damage counter from Resourceful Spider Crab"
		},
		
		"10" : 
		{
			"name" : "Floodburst Behemoth",
			"champion" : "When Floodburst Behemoth mass attacks, it gains 1 Strength.",
			"support" : "When your Champion attacks, its damage cannot be reduced or negated."
		}	
	},
	
	"unknown" : 
	{
		"legendary" : 
		{
			"name" : "The Obelisk",
			"team" : "When one of your Heroes is destroyed, roll 1d6. On 6, return it to the bottom of your Team deck.",
			"bane" : "Any player's Hero with an Unknown-type bane token on it has no Champion or Support ability. Each time any player's Hero with an Unknown-type bane token on it is destroyed, add 1 damage counter to one of that player's Supports."
		},
		
		"legendary-flip" : 
		{
			"name" : "The Obelisk",
			"champion" : "Remove up to 3 damage counters from the Obelisk. - OR - Add 2 damage counters to The Obelisk to add up to 6 damage coutners distributed amongst any number of Heroes.",
			"support" : "Spend 1MP. Your Champion gains 3 Strength. - OR - Spend 2MP. Return a Hero from your Graveyard to the bottom of your Team deck.",
			"bane" : "Any player's Hero with an Unknown-type bane token on it has no Champion or Support ability. Each time any player's Hero with an Unknown-type bane token on it is destroyed, add 1 damage counter to one of that player's Supports."
		},
		
		"1" : 
		{
			"name" : "Phantasmal Raven",
			"champion" : "When Phantasmal Raven is attacked roll 1d6. On 5-6, add 2 damage counters to the attacking champion. ",
			"support" : "When your Champion attacks, roll 1d6. On 5-6, add 1 bane token to any player's Hero."
		},
		
		"2" : 
		{
			"name" : "Unicorn Aberration",
			"champion" : "When Unicorn Abberration is precise attacked, reduce the damage by 1.",
			"support" : "When your Champion is precise attacked, reduce the damage by 1."
		},
		
		"3" : 
		{
			"name" : "Illusionist",
			"champion" : "When Illusionist is precise attacked, roll 1d6. On 4-6, negate the damage.",
			"support" : "When your Champion is attacked, roll 1d6. On 4-6, negate the damage."
		},
		
		"4" : 
		{
			"name" : "Three-Eyes Fox",
			"champion" : "Spend 1MP to rearrange the top 3 cards of the Sphere deck.",
			"support" : "Roll 1d6. On 5-6, remove up to 2 damage counters from your Champion."
		},
		
		"5" : 
		{
			"name" : "Chasm Wyrm",
			"champion" : "When Chasm Wyrm precise attacks, roll 1d6. On 4-5, it gains 1 Strength. On 6, it gains 2 Strength.",
			"support" : "When your Champion attacks, it gains 1 Strength for each damage counter on Chasm Wyrm. "
		},
		
		"6" : 
		{
			"name" : "Annelid Mindsucker",
			"champion" : "Annelid Mindsucker's Strength is equal to the Strength of any player's Support.",
			"support" : "When your Champion is attaked, roll 1d6. On 4-6, add 1 damage counter to the attacking Champion."
		},
		
		"7" : 
		{
			"name" : "Shapeshifter",
			"champion" : "Shapeshifter's Strength is equal to the Strength of any player's Champion.",
			"support" : "Shapeshifter's Support ability is your Champion's Support ability."
		},
		
		"8" : 
		{
			"name" : "Cryptic Wispwalker",
			"champion" : "Add 1 damage counter to Cryptic Wispwalker. It gains 2 Strength.",
			"support" : "Switch your Champion with Cryptic Wispwalker."
		},
		
		"9" : 
		{
			"name" : "Demon of the Haze",
			"champion" : "Roll 1d6. On 5-6, return Demon of the Haze to the bottom of your Team deck.",
			"support" : "Move 1 damage counter from your Champion to any other player's Champion."
		},
		
		"10" : 
		{
			"name" : "Faceless Maiden",
			"champion" : "When Faceless Maiden is destroyed, add 1 damage counter to each of any player's Heroes.",
			"support" : "When your Champion is destroyed, roll 1d6. On 6, return your Champion to the bottom of your Team deck."
		}	
	},

	"light": 
	{
		"legendary": 
		{
			"name" : "Lightbringer Ethyrios",
			"team": "When your Champion attacks, roll 1d6. On 6, move 1 damage counter from it to any other player's Champion.",
			"bane": "Any player's Hero with a Ligh-type bane token on it cannot precise attack. Each time a Light-type bane token is removed from any player's Hero, ad 1 damage counter to that Hero."
		},

		"legendary-flip": 
		{
			"name" : "Lightbringer Ethyrios",
			"champion": "When Lightbringer Ethyrios precise attacks, add 1 damage counter to its target. - OR - When Lightbringer Ethyrios mass attacks, remove 2 damage counters from it.",
			"support": "Spend 1MP to remove 1 damage counter from your Champion. - OR - Spend 2MP to remove up to 3 damage counters from Lightbringer Ethyrios.",
			"bane": "Any player's Hero with a Ligh-type bane token on it cannot precise attack. Each time a Light-type bane token is removed from any player's Hero, ad 1 damage counter to that Hero."
		},

		"1": 
		{
			"name" : "Avenging Angel",
			"champion": "When Avenging Angel is attacked, spend 1MP to add 1 damage counter to the attacking Champion.",
			"support": "When your Champion is destroyed by an attack, roll 1d6. On 6, destroy the attacking Champion."
		},

		"2": 
		{
			"name" : "Crane Ascetic",
			"champion": "When Crane Ascetic is attacked, roll 1d6. On 4-5, reduce the damage by 1. On 6, negate the damage.",
			"support": "Move 1 damage counter from your Champion to Crane Ascetic."
		},

		"3": 
		{
			"name" : "Pixiu",
			"champion": "When Pixiu precise attacks, roll 1d6. On 6, take another turn.",
			"support": "Spend 1MP to remove 1 damage counter from Pixiu."
		},

		"4": 
		{
			"name" : "Ironclad Pegasus",
			"champion": "When Ironclad Pegasus mass attacks, it gains 1 Strength.",
			"support": "When your Champion is precise attacked, spend 1MP to reduce the damage by 1."
		},

		"5": 
		{
			"name" : "Harpy of Light",
			"champion": "Spend 1MP. Harpy of Light gains 2 Strength.",
			"support": "When your Champion is destroyed, add 1 damage counter to each of any player's Supports."
		},

		"6": 
		{
			"name" : "Golden Sprite",
			"champion": "Spend 1MP to remove up to 2 damage counters from one of your Supports.",
			"support": "When your Champion attacks, add 1 bane token to it's target."
		},

		"7": 
		{
			"name" : "Drunken Monk",
			"champion": "Roll 1d6. On 1-2, add 1 damage counter to Drunken Monk. On 5-6, add 2 damage counters to any player's Champion.",
			"support": "Switch Drunken Monk with your Champion."
		},

		"8": 
		{
			"name" : "Luminous Lion",
			"champion": "Spend 1MP to remove 1 damage counter from Luminous Lion.",
			"support": "Spend 1MP to remove 1 damage counter from your Champion."
		},

		"9": 
		{
			"name" : "Radiant Archon",
			"champion": "When Radiant Archon precise attacks, it gains 2 Strength.",
			"support": "When your Champion is precise attacked, roll 1d6. On 5-6, reduce the damage by 2."
		},

		"10": 
		{
			"name" : "Ravenous Griffin",
			"champion": "When Ravenous Griffin precise attacks, add 1 damage counter to any player's Support.",
			"support": "When your Champion is destroyed, spend 1MP to remove up to 2 damage counters from Ravenous Griffin."
		}
	},
	
	"fire": 
	{
		"legendary": 
		{
			"name" : "Herkul The Mountain",
			"team": "When your Champion attacks, roll 1d6. On 1, add 1 damage counter to it. On 6, it gains 2 Strength.",
			"bane": "Each time any player's Hero with a Fire-type bane token on it takes damage, add 1 damage counter to it."
		},

		"legendary-flip": 
		{
			"name" : "Herkul The Mountain",
			"champion": "When Herkul the Mountain precise attacks, it gains 2 Strength. - OR - When Herkul the Mountain mass attacks, it deals double the damage to each of its targets.",
			"support": "Spend 1MP to add 2 damage counters to any player's Champion. - OR - Spend 2MP to add 3 damage counters to any player's Champion.",
			"bane": "Each time any player's Hero with a Fire-type bane token on it takes damage, add 1 damage counter to it."
		},

		"1": 
		{
			"name" : "Chained Hellion",
			"champion": "Chained Hellion can precise atttack Supports.",
			"support": "Spend 1MP to add 1 bane token to each of any player's Supports."
		},

		"2": 
		{
			"name" : "Hellhound",
			"champion": "When Hellhound mass attacks, it gains 1 Strength.",
			"support": "When your Champion mass attacks, it gains 1 Strength."
		},

		"3": 
		{
			"name" : "Unstable Chimera",
			"champion": "When Unstable Chimera is destroyed, add 1 damage counter to each of every player's Heroes.",
			"support": "When Unstable Chimera is destroyed, add 1 damage counter to each of every player's Heroes."
		},

		"4": 
		{
			"name" : "Flame Reader",
			"champion": "When Flame Reader is precise attacked, spend 1MP to reduce the damage by 1.",
			"support": "When your Champion is precise attacked, roll 1d6. On 5-6, negate the damage."
		},

		"5": 
		{
			"name" : "Reckless Bifang",
			"champion": "Roll 1d6. On 1-3, add 1 damage counter to Reckless Bifang. On 4-6, add 2 damage counters to any player's Support.",
			"support": "When your Champion is precise attacked, add 1 damage counter to the attacking Champion."
		},

		"6": 
		{
			"name" : "Blistering Barbarian",
			"champion": "When Blistering Barbarian attacks, it gains 1 Strength for each damage counter on it.",
			"support": "Spend 1MP to move 1 damage counter from your Champion to Blistering Barbarian."
		},

		"7": 
		{
			"name" : "Mischievous Imp",
			"champion": "Switch any player's Champion with one of that player's Supports.",
			"support": "Spend 1MP to rearrange the top 3 cards of the Sphere deck. "
		},

		"8": 
		{
			"name" : "Fire Dancer",
			"champion": "Roll 1d6. On 4-6, Fire Dancer gains 3 Strength.",
			"support": "Roll 1d6. On 5-6, add 1 bane token to any player's Hero."
		},

		"9": 
		{
			"name" : "Caldera Shaman",
			"champion": "Add 1 damage counter to Caldera Shaman. It gains 2 Strength.",
			"support": "Add 1 damage counter to your Champion. It gains 2 Strength."
		},

		"10": 
		{
			"name" : "Firebound Dragon",
			"champion": "Spend 1 MP to add 3 damage counters to any player's Hero, then skip your Attack phase.",
			"support": "When your champion is destroyed, spend 1MP to remove up to 2 damage counters from one of your Supports."
		}
	},
	
	"earth": 
	{
		"legendary": 
		{
			"name" : "The Chained Titan",
			"team": "At the beginning of each round, roll 1d6. On 5-6, your Heroes gain the benefit of the current Sphere card no matter their type until the next round.",
			"bane": "The Max HP of a Hero with an Earth-type bane token on it is reduced by 1. The Max HP of a Legend with an Earth-type bane token on it is reduced by 3."
		},

		"legendary-flip": 
		{
			"name" : "The Chained Titan",
			"champion": "When The Chained Titan mass attacks, it gains 5 Strength. - OR - When The chained Titan is precise attacked, roll 1d6. On 4-6, reduce the damage by 2. Otherwise, reduce the damage by 1.",
			"support": "Spend 1 MP to add 1 bane token to each player's Champion. - OR - Spend 2 MP. Your Supports cannot be mass attacked.",
			"bane": "The Max HP of a Hero with an Earth-type bane token on it is reduced by 1. The Max HP of a Legend with an Earth-type bane token on it is reduced by 3."
		},

		"1": 
		{
			"name" : "Barrier Colossus",
			"champion": "Your Supports cannot be mass attacked.",
			"support": "Move any number of damage counters from your Champion to Barrier Colossus."
		},

		"2": 
		{
			"name" : "Diamondback Sorcerer",
			"champion": "When Diamondback Sorcerer mass attacks, add bane tokens instead of damage counters to its target(s).",
			"support": "Spend 1 MP to remove 1 bane token from any player's Hero."
		},

		"3": 
		{
			"name" : "Star-Nosed Patriarch",
			"champion": "Add 1 damage counter to Star-Nosed Patriarch. It gains 2 Strength.",
			"support": "When your Champion is destroyed, roll 1d6. On 5-6, remove 2 damage counters from Star-Nosed Patriarch. Otherwise, remove 1 damage counter."
		},

		"4": 
		{
			"name" : "Stonemask Gargoyle",
			"champion": "Spend 1 MP. Stonemask Gargoyle cannot be precise attacked",
			"support": "Damage counters cannot be added to Stonemask Gargoyle."
		},

		"5": 
		{
			"name" : "Blasting Drake",
			"champion": "Add X damage counters to Blasting Drake. When Blasting Drake is destroyed, add 2 damage counters to each Hero with an Earth-type bane token on it.",
			"support": "Spend 1 MP to add a bane token to any player's Hero."
		},

		"6": 
		{
			"name" : "Agarthan Warrior",
			"champion": "When Agarthan Warrior precise attacks, add 2 damage counters to one of that player's Supports.",
			"support": "Roll 1d6. On 4-6, your Champion gains 1 Strength."
		},

		"7": 
		{
			"name" : "Earthmover Elephant",
			"champion": "When Earthmover Elephant precise attacks, add 1 damage counter to each of that player's Supports.",
			"support": "Roll 1d6. On 4-6, rearrange the top 3 cards of the Sphere deck."
		},

		"8": 
		{
			"name" : "Ore Guard",
			"champion": "When Ore Guard is precise attacked, spend 1MP to reduce the damage by 2.",
			"support": "When your Champion is precise attacked, spend 1 MP to reduce the damage by 1."
		},

		"9": 
		{
			"name" : "Bedrock Worm",
			"champion": "Bedrock Worm can precise attack Supports.",
			"support": "Switch Bedrock Worm with your Champion."
		},

		"10": 
		{
			"name" : "Quakewalker",
			"champion": "When Quakewalker is destroyed, add 1 bane token to each of any player's Supports.",
			"support": "Bane tokens on any of your heroes have no effect."
		}
	},
	
	"dark": 
	{
		"legendary": 
		{
			"name" : "Nyxia, Queen of the Night",
			"team": "When your Champion attacks, roll 1d6. On 6, add 2 damage counters to any player's Support.",
			"bane": "Each time any player's Hero with a Dark-type bane token on it takes damage, add 2 damage counters to that Hero and remove a Dark-type bane token from it."
		},

		"legendary-flip": 
		{
			"name" : "Nyxia, Queen of the Night",
			"champion": "When Nyxia, Queen of the Night precise attacks, it gains 1 Strength. - OR - When Nyxia, Queen of the NIght mass attacks, add 1 bane token to each of its targets.",
			"support": "Spend 1MP to add 1 bane token to each other player's Champion. - OR - Spend 2MP to add 1 bane token to each of every other player's Supports.",
			"bane" : "Each time any player's Hero with a Dark-type bane token on it takes damage, add 2 damage counters to that Hero and remove a Dark-type bane token from it."
		},

		"1": 
		{
			"name" : "Inkblood Banshee",
			"champion": "Inkblood Banshee cannot precise attack.",
			"support": "Your Champion cannot be precise attacked."
		},

		"2": 
		{
			"name" : "Adroit Goblini",
			"champion": "Spend 1MP to remove 1 damage counter from Adroit Goblin",
			"support": "Roll 1d6. On 4-6, your Champion gains 1 Strength."
		},

		"3": 
		{
			"name" : "Brutish Ogre",
			"champion": "Add 1 damage counter to Brutish Ogre. It gains 2 Strength.",
			"support": "Spend 1MP. Your Champion gains 1 Strength."
		},

		"4": 
		{
			"name" : "Masked Mercenary",
			"champion": "When Masked Mercenary attacks, roll 1d6. On 5-6, it gains 2 Strength.",
			"support": "When your Champion is attacked, roll 1d6. On 6, negate the damage."
		},

		"5": 
		{
			"name" : "Master of Puppetry",
			"champion": "Master of Puppetry's Strength is equal to the Strength of any player's Champion.",
			"support": "Add 1 damage counter to your Champion to add 2 damage counters to any player's Champion."
		},

		"6": 
		{
			"name" : "Gremlin Infiltrator",
			"champion": "Add 1 damage counter to one of any player's Supports.",
			"support": "Rearrange the top 2 cards of the Sphere deck."
		},

		"7": 
		{
			"name" : "Flesh-Eating Warlock",
			"champion": "Move 1 damage counter from Flesh-Eating Warlock to one of your supports.",
			"support": "Add 1 damage counter to your Champion to remove up to 2 damage counters from Flesh-Eating Warlock."
		},

		"8": 
		{
			"name" : "Blade Demon",
			"champion": "Roll 1d6. On 4-6, add 1 damage counter to each of any player's Supports.",
			"support": "When your Champion mass attacks, spend 1MP. It gains 1 Strength."
		},

		"9": 
		{
			"name" : "Hooded Mantis",
			"champion": "Roll 1d6. On6, Hooded Mantis gains 2 Strength.",
			"support": "Spend 1MP to remove 1 damage counter from your Champion."
		},

		"10": 
		{
			"name" : "Shadow Scorpion",
			"champion": "Spend 1MP to add 1 bane token to any player's Hero.",
			"support": "When your Champion is precise attacked, spend 1MP to reduce the damage by 1."
		}
	},
	
	"air": 
	{
		"legendary": 
		{
			"name" : "The Sylph Queen",
			"team" : "You may remove an Air-type bane token from any player's Hero at the start of that player's turn. When a hero on your team would take damage, roll 1d6. On 5-6, reduce it by 1 and add 1 damage counter to any player's Hero.",
			"bane" : "Each time an Air-type bane token is removed from any player's Hero, add 1 damage counter to that Hero, then switch that player's Champion with one of that player's Supports."
		},

		"legendary-flip": 
		{
			"name" : "The Sylph Queen",
			"champion": "When The Sylph Queen mass attacks, it gains 2 Strength. - OR - When The Sylph Queen precise attacks, remove up to 2 bane tokens from The Sylph Queen.",
			"support": "When any player's Hero is precise attacked, spend 1MP to reduce the damage by up to 2.",
			"bane" : "Each time an Air-type bane token is removed from any player's Hero, add 1 damage counter to that Hero, then switch that player's Champion with one of that player's Supports."
		},

		"1": 
		{
			"name" : "Windburst Elemental",
			"champion": "When Windburst Elemental attacks, add bane tokens instead of damage counters to its target(s)",
			"support": "When your Champion is attacked, roll 1d6. On 4-5, reduce the damage by 1. On 6, negate the damage."
		},

		"2": 
		{
			"name" : "Cloudroost Griffin",
			"champion": "When Cloudroost Griffin mass attacks, it gains 1 Strength.",
			"support": "When Cloudroost Griffin is destroyed, roll 1d6. On 4-6, add 1 damage counter to each of any player's Heroes."
		},

		"3": 
		{
			"name" : "Twinbeak Roc",
			"champion": "When Twinbeak Roc would take damage, roll 1d6. On 4-6, reduce the damage by 1.",
			"support": "Spend 1MP. Your Champion gains 1 Strength."
		},

		"4": 
		{
			"name" : "Breezedancer Sylph",
			"champion": "Breezedancer Sylph can precise attack Supports.",
			"support": "When your Champion precise attacks, add 2 damage counters to one of that player's Supports."
		},

		"5": 
		{
			"name" : "Winged Djinn",
			"champion": "Add 1 damage coutner to one of any player's Supports.",
			"support": "Switch Winged Djinn with your Champion."
		},

		"6": 
		{
			"name" : "Hippogriff Scout",
			"champion": "Cannot be precise attacked.",
			"support": "Spend 1MP to rearrange the top 3 cards of the Sphere deck."
		},

		"7": 
		{
			"name" : "Sky Pirate",
			"champion": "When Sky Pirate attacks, roll 1d6. On 4-6, attack a second time.",
			"support": "Spend 1MP to add 1 bane token to one of any player's Supports."
		},

		"8": 
		{
			"name" : "Cloud Reader",
			"champion": "When Cloud Reader precise attacks, add 1 bane token to its target",
			"support": "When your Champion is precise attacked, roll 1d6. On 5-6, negate the damage."
		},

		"9": 
		{
			"name" : "Empyrean Ray",
			"champion": "When Empyrean Ray mass attacks, it gains 2 Strength.",
			"support": "Roll 1d6. On 4-6 remove 1 damage counter from any player's Hero."
		},

		"10": 
		{
			"name" : "Cloudlurker Banshee",
			"champion": "After Cloudlurker Banshee precise attacks any player's Champion, switch that player's Champion with one of that player's Supports.",
			"support": "When your Champion is attacked, roll 1d6. On 4-6, add 1 bane token to the attacking Champion."
		}
	}
}