<?php
require './dbData.php';
$mysql = new mysqli($dbDataHost, $dbDataUser, $dbDataPassword, $dbDataName);
$outputVariantDB = $mysql->query("SELECT * FROM `outputvariant` WHERE 1");
$outputVariantArrForObj =[];
$outputVariants =[];

while($row = mysqli_fetch_array($outputVariantDB)){
   $outputVariantArrForObj["id"] = (int) $row["id"];
   $outputVariantArrForObj["type"] = $row["type"];


   $obj = (object) $outputVariantArrForObj;
    array_push($outputVariants, $obj);
    $outputVariantArrForObj =array();
};

echo json_encode($outputVariants, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>