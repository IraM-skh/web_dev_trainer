<?php
$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');
header("Content-Type: application/json; charset=UTF-8");
$json = json_decode(file_get_contents("php://input"));
$subjectName = $json->subjectName;
$subjectDB = $mysql->query("SELECT `id_args`, `true_description`, `change_start_data`, `id_outputVariant` FROM `subject` WHERE `name` ='$subjectName' ");


$args = [];
$outputVariants = '';
while($row = mysqli_fetch_array($subjectDB)){
    $true_description = $row["true_description"];
    $change_start_data = $row["change_start_data"];
    $id_arg = explode(", ", $row["id_args"]);
    $id_outputVariant = $row["id_outputVariant"];

    foreach ($id_arg as &$value) {

        $argDB = $mysql->query("SELECT `arg` FROM `args` WHERE `id` = '$value'");

        while($row = mysqli_fetch_array($argDB)){
            $val = $row["arg"];
            array_push($args, $val) ;
         };
    }

    $outputVariantDB = $mysql->query("SELECT `type` FROM `outputvariant` WHERE `id` = '$id_outputVariant'");
    while($row = mysqli_fetch_array($outputVariantDB)){
        $outputVariants = $row["type"];
    };
    
 };
    $resultToJs = array();
    $resultToJs["args"] = $args;
    $resultToJs["description"] = $true_description;
    $resultToJs["changeData"] = $change_start_data;
    $resultToJs["outputVariant"] = $outputVariants;
    $resultToJs = (object) $resultToJs;

  echo json_encode($resultToJs, JSON_UNESCAPED_UNICODE);

  $mysql->close();
 ?>