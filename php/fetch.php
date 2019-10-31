<?php
$json_url = "http://localhost:5000/api/v1/pin";
$result = file_get_contents($json_url);
header('Content-type: application/json');
echo ($result);
?>
