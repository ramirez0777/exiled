<?php
	function changeJSON($player, $sectionChanging, $whatImChanging, $whatImChangingToo)
	{
		print_r($player.' ... '.$sectionChanging.' ... '.$whatImChanging.' ... '.$whatImChangingToo);
		//Load the file. Make a variable to differentiate player
		$contents = file_get_contents('json/player'.$player.'.json');
		print_r($contents);
		 
		//Decode the JSON data into a PHP array.
		$contentsDecoded = json_decode($contents, true);
		print_r('Before Change: ');
		print_r($contentsDecoded);
		 
		//Modify the counter variable.
		$contentsDecoded[$sectionChanging][$whatImChanging] = $whatImChangingToo;
		print_r('After Change: ');
		print_r($contentsDecoded);
		 
		//Encode the array back into a JSON string.
		$json = json_encode($contentsDecoded);
		 
		//Save the file.
		file_put_contents('json/player'.$player.'.json', $json);
		return 'field updated';
	}
	
	function changeLegend($player, $whatImChanging, $whatImChangingToo)
	{
		print_r($player.' ... '.$whatImChanging.' ... '.$whatImChangingToo);
		//Load the file. Make a variable to differentiate player
		$contents = file_get_contents('json/player'.$player.'.json');
		 
		//Decode the JSON data into a PHP array.
		$contentsDecoded = json_decode($contents, true);
		 
		//Modify the counter variable.
		$contentsDecoded[$whatImChanging]= $whatImChangingToo;
		 
		//Encode the array back into a JSON string.
		$json = json_encode($contentsDecoded);
		 
		//Save the file.
		file_put_contents('json/player'.$player.'.json', $json);
		return 'field updated';
	}
	
	//$player is the number of the player
	//$sectionChanging is deck, field or legend
	//$whatImChanging is the next section in from there, what im Changing inside that section
	//$whatImChangingToo is the what I want it changed too.
	
	//Example of link for legend, then others:
	//http://localhost/exiled/exiledAPI.php?p=1&s=legend&ct=air
	//http://localhost/exiled/exiledAPI.php?p=1&s=field&c=champion&ct=1
	
	if($_GET['s'] != 'legend')
	{
		$result = changeJSON($_GET['p'], $_GET['s'], $_GET['c'], $_GET['ct']);
		print_r($result);
	}
	else
	{
		$result = changeLegend($_GET['p'], $_GET['s'], $_GET['ct']);
		print_r($result);
	}
	
	
	//Here I see what player i'm updating and which part of that player i'm updating
	/**
	if(isset($_GET['player']) && isset($_GET['champion']))
	{
		$result = changeJSON($_GET['player'], 'champion', $_GET['champion']);
		print_r($result);
	}
	elseif(isset($_GET['player']) && isset($_GET['support1']))
	{
		$result = changeJSON($_GET['player'], 'support1', $_GET['support1']);
		print_r($result);
	}
	elseif(isset($_GET['player']) && isset($_GET['support2']))
	{
		$result = changeJSON($_GET['player'], 'support2', $_GET['support2']);
		print_r($result);
	}
	
	if(isset($_GET['player']) && isset($_GET['champion']))
	{
		echo 'fuck2';
	}
	**/
?>