
<?php
require './dbData.php';
$mysql = new mysqli($dbDataHost, $dbDataUser, $dbDataPassword, $dbDataName);
 $subjectsDB = $mysql->query("SELECT `name`, `id_args`, `true_description`, `false_description_1`, `false_description_2` FROM `subject`");
 $subjectsArrForObj =[];
 
 $subjects =[];
 while($row = mysqli_fetch_array($subjectsDB)){
    $subjectsArrForObj["subjectName"] = $row["name"];
    $d1 = $row["true_description"];
    $d2 = $row["false_description_1"];
    $d3 = $row["false_description_2"];
    $descriptionArr = [];
    array_push($descriptionArr, $d1, $d2, $d3);
    $subjectsArrForObj["description"] = $descriptionArr;
    $idArgs = explode(", ", $row["id_args"]);
          foreach ($idArgs as &$value) {
            $value = (int) $value;
          }
          $subjectsArrForObj["idArgs"] = $idArgs;

    $obj = (object) $subjectsArrForObj;
     array_push($subjects, $obj);
     $subjectsArrForObj =array();
 };

 echo json_encode($subjects, JSON_UNESCAPED_UNICODE);
 $mysql->close();
?>