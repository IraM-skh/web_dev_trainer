<?php

$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');
$questionsDB = $mysql->query("SELECT `question`, `ansvers_type`, `questionName` FROM `questions` WHERE `id_section` = 1");
$questionsArrForObj =[];
$questions =[];

while($row = mysqli_fetch_array($questionsDB)){
   $questionsArrForObj["question"] = $row["question"];
   $questionsArrForObj["ansversType"] = $row["ansvers_type"];
   $questionsArrForObj["questionName"] = $row["questionName"];

   $obj = (object) $questionsArrForObj;
    array_push($questions, $obj);
    $questionsArrForObj =array();
};

echo json_encode($questions, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>