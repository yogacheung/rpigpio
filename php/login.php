<?php 
	$text = file_get_contents("../login.txt");
	  
	//echo $text;  
	  
	$arr = explode(',', $text);
	  
	$username = $_GET["username"];
	$password = $_GET["password"];
  
  //echo $username . " " . $password . "\n";
  
  //echo $arr[0] . " " . $arr[1] . "\n";
    
	if(($username == $arr[0]) && ($password == $arr[1])) {
		//var_dump($result);				
    echo "./rpiboard.html";
	}else{
		echo "no";
	}
?>