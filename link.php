<?php
header('Content-type: text/html; charset=windows-1251');
$ext_url = $_POST['ext_url'];
echo file_get_contents($ext_url);
?>