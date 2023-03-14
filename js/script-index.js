var heroes = [];
var field = [];

$(document).ready(function()
{
	//Create the Accordion
	$('main').accordion();
});

function selectLegend(legend)
{
	//Call API to update file with Legend
	var link = 'http://localhost/exiled/exiledAPI.php?p='+ player.getPlayerNumber() +'&s=legend&ct=' + legend.id;
	fetch(link); 
	
	player.setLegend(legend.id);
	document.cookie = 'legend=' + player.getLegend();
	
	//Edit Text to show chosen Legend
	document.getElementById('chosenLegend').innerText = legend.id;
	document.getElementById('legendsTitle').innerHTML = 'Your Legend is <span class="cap">' + legend.id + '</span>';
	
	//Make the other legends show unselected first then add selection css
	for(var i = 0; i < legends.length; i++)
	{
		document.getElementById(legends[i]).classList.remove('selected');
	}
	document.getElementById(legend.id).classList.add('selected');
	
	//Update text showing what your legend is
	document.getElementById('legendText').className = legend.id;
	
	//Make next section clickable
	document.getElementById('heroesTitle').classList.remove('unclickable');
	document.getElementById('heroesTitle').innerHTML = 'Choose Your 6 Heroes';
	
	//Make current Section unclickable 
	// ***Make it unclickable after click on starting lineup***
	document.getElementById('legendsTitle').classList.add('unclickable');
	
	
	
	//Create Hero Selection
	var images = '';
	for(var i = 1; i <= 10; i++)
	{
		images += '<img src="img/' + legend.id + '/' + i + '.jpg" onclick="selectHero(this)" id="' + i + '" data-legend="' + legend.id +'" data-card="' + i + '" onmouseover="cardInfo(this)">'
	}
	document.getElementById('heroes').innerHTML = images;
}

function selectHero(hero)
{
	//only add to array if list is full
	if(heroes.length < 6)
	{
		//Push ID to heroes Array
		heroes.push(hero.id);
		
		//Set it to run deslectHero function instead if clicked again
		hero.setAttribute("onClick", "deselectHero(this);");
		
		//Mark it as selected on screen
		hero.classList.add('selected');
	}
	else
	{
		alert('6 Heroes Max. Click on Choose Your Starting Lineup below')
	}
	
	//Change Text for Titles and allow click on lineup
	if(heroes.length == 6)
	{
		document.getElementById('heroesTitle').innerText = '6 Heroes Chosen';
		document.getElementById('lineupTitle').innerText = 'Choose Your Starting Lineup';
		document.getElementById('lineupTitle').classList.remove('unclickable');
	}
	//console.log(heroes);
}

function deselectHero(hero)
{
	//Switches back to being able to select heroes and no longer clickable lineup
	if(heroes.length == 6)
	{
		document.getElementById('heroesTitle').innerText = 'Choose Your Heroes';
		document.getElementById('lineupTitle').innerText = '';
		document.getElementById('lineupTitle').classList.add('unclickable');
	}
	
	//Remove ID from Heroes Array
	var index = heroes.indexOf(hero.id);
	heroes.splice(index, 1);
	
	//Set it to run deslectHero function instead if clicked again
	hero.setAttribute("onClick", "selectHero(this);");
	
	//Mark it as selected on screen
	hero.classList.remove('selected');
	
	//console.log(heroes);
}

function lineup()
{
	//Locks up the page so they can't make changes
	document.getElementById('legendsTitle').classList.add('unclickable');
	document.getElementById('heroesTitle').classList.add('unclickable');
	document.getElementById('lineupTitle').classList.add('unclickable');
	document.getElementById('heroes').innerHTML = '';

	//TO-DO Shuffle Cards
	//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	//Current shuffling is leaving a duplicate. Another method I could use is shuffling the array then pulling the first 3 for the field/deck
	//Current shuffling might have to do with the push to API messing up somewhere???
	
	//Shuffling loop
	for(var i = 0; i < 3; i++)
	{
		var rand = Math.floor(Math.random() * heroes.length);

		//Push a random index into a random array
		field.push(heroes[rand]);
		
		//remove that index from the current heroes array
		heroes.splice(rand, 1);		
	
		//do this 3 times until you have 2 arrays field and heroes. Heroes will be the deck
	}
	
	//Use For loop to push information of deck using API <--heroes == deck-->
	for(var i = 0; i < heroes.length; i++)
	{

		var deckNumber = ['one', 'two', 'three'];
		var link = 'http://localhost/exiled/exiledAPI.php?p=' + player.getPlayerNumber() + '&s=deck&c=' + deckNumber[i] + '&ct=' + heroes[i];
		fetch(link);
	}
	
	//Create next selection screen
	document.getElementById('lineupTitle').innerText = 'Choose a Champion, The rest will be your Supports';
	
	var html = '';
	
	for(var i = 0; i < field.length; i++)
	{
		html += '<img src="img/' + player.getLegend() + '/' + field[i] + '.jpg" onclick="play(this)" id="' + field[i] + '">';
	}
	
	document.getElementById('lineup').innerHTML = html;
}

function play(champ)
{
	//Push Champ to API; champ.id
	var link = 'http://localhost/exiled/exiledAPI.php?p=' + player.getPlayerNumber() + '&s=field&c=champion&ct=' + champ.id;
	console.log(link);
	//fetch(link);
	
	var index = field.indexOf(champ.id);
	field.splice(index, 1);
	champ.remove();
	
	

	link = 'http://localhost/exiled/exiledAPI.php?p=' + player.getPlayerNumber() + '&s=field&c=support1&ct=' + field[0];
	fetch(link);
	

	
	link = 'http://localhost/exiled/exiledAPI.php?p=' + player.getPlayerNumber() + '&s=field&c=support2&ct=' + field[1];
	fetch(link);
	
	/**
	for(var i = 0; i < heroes.length; i++)
	{
		//push deck using API and heroes[i];
		Did this in lineup
	}
	**/
	
	
	window.location.replace('play.html');
	
}