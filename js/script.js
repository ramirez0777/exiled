let legends = ['air', 'dark', 'earth', 'fire', 'light', 'unknown', 'water'];

function cardInfo(card)
{
	var id = card.getAttribute('data-card');
	var legend = card.getAttribute('data-legend');
	
	
	if(id == 'legendary' || id == 'legendary-flip')
	{
		document.getElementById('cardName').innerHTML = cards[legend][id].name;
		document.getElementById('effect1').innerHTML = '<span class="effectTitle">Team: </span>' + cards[legend][id].team;
		document.getElementById('effect2').innerHTML = '<span class="effectTitle">Bane: </span>' + cards[legend][id].bane;
		if(id == 'legendary-flip')
		{
			document.getElementById('effect3').innerHTML = '<span class="effectTitle">Bane: </span>' + cards[legend][id].bane;
		}
	}
	else
	{
		document.getElementById('cardName').innerHTML = cards[legend][id].name;
		document.getElementById('effect1').innerHTML = '<span class="effectTitle">Champion: </span>' + cards[legend][id].champion;
		document.getElementById('effect2').innerHTML = '<span class="effectTitle">Support: </span>' + cards[legend][id].support;
	}
	
}

class Player
{
	constructor()
	{
		this.playerNumber = '';
		this.legend = '';
		this.field = [];
		this.deck = [];
		this.opponent = '';
	}
	
	getLegend()
	{
		return this.legend;
	}
	
	setLegend(legend)
	{
		this.legend = legend;
	}
	
	getPlayerNumber()
	{
		return this.playerNumber;
	}
	
	setPlayerNumber(playerNumber)
	{
		this.playerNumber = playerNumber;
		document.cookie = 'playerNumber = ' + playerNumber;
	}
	
	setField(field)
	{
		this.field = field
	}
	
	setDeck(deck)
	{
		this.deck = deck;
	}
	
	setOpponent(opponentNumber)
	{
		this.opponent = opponentNumber;
	}
	
	getOpponent()
	{
		return this.opponent;
	}
}

let player = new Player();

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}