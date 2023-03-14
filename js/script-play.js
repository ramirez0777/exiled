player.setLegend(getCookie('legend'));
player.setPlayerNumber(getCookie('playerNumber'));

if (player.getPlayerNumber() == 1)
{
	player.setOpponent(2);
}
else
{
	player.setOpponent(1);
}

var intervalId = window.setInterval(function(){
	$.getJSON('json/player' + player.getPlayerNumber() + '.json', function(currentPlayer)
	{
		document.getElementById('champion').src = 'img/' + player.getLegend() + '/' + currentPlayer.field.champion + '.jpg'
	});
	
	$.getJSON('json/player' + player.getPlayerNumber() + '.json', function(opponent)
	{
		//document.getElementById('opponent-champion').src = ''
	});
}, 1000);

