<?php
require './dbData.php';
$mysql = new mysqli($dbDataHost, $dbDataUser, $dbDataPassword, $dbDataName);
$argsDB = $mysql->query("SELECT * FROM `args`");
$argsArrForObj =[];
$args =[];

while($row = mysqli_fetch_array($argsDB)){
   $argsArrForObj["id"] = (int)$row["id"];
   $argsArrForObj["arg"] = $row["arg"];


   $obj = (object) $argsArrForObj;
    array_push($args, $obj);
    $argsArrForObj =array();
};

echo json_encode($args, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>