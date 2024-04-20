<?php

$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');

$userResults = array();
$userResults["solved"] = array();
$userResults["failed"] = array();
$idSolved = array();
$idFailed = array();

$cookLogin = $_COOKIE['user'];
$cookIdHash = $_COOKIE['user_id'];
$usersDB = $mysql->query("SELECT `id`, `id_hash` FROM `users` WHERE `login` = '$cookLogin'");
$row_cnt = mysqli_num_rows($usersDB);

if($row_cnt != 0){
    $userId = '';
    $userIdHash = '';
    while($row = mysqli_fetch_array($usersDB)){
        $userId = $row["id"];
        $userIdHash = $row["id_hash"];
     };
  
    if(md5($userId) == $cookIdHash){

        $userSolvedDB = $mysql->query("SELECT `id_subject` FROM `user_progress` WHERE `progress_now` = 'solved' AND `login` = '$cookLogin'");
        while($row = mysqli_fetch_array($userSolvedDB)){
            array_push($idSolved, $row["id_subject"]);
        };

        $userFailedDB = $mysql->query("SELECT `id_subject` FROM `user_progress` WHERE `progress_now` = 'failed' AND `login` = '$cookLogin'");
        while($row = mysqli_fetch_array($userFailedDB)){
            array_push($idFailed, $row["id_subject"]);
        };


        foreach ($idSolved as &$value) {
            $solvedDB = $mysql->query("SELECT `name` FROM `subject` WHERE `id` = '$value'");
            while($row = mysqli_fetch_array($solvedDB)){
                array_push($userResults["solved"], $row["name"]);
            };
        };

        foreach ($idFailed as &$value) {
            $failedDB = $mysql->query("SELECT `name` FROM `subject` WHERE `id` = '$value'");
            while($row = mysqli_fetch_array($failedDB)){
                array_push($userResults["failed"], $row["name"]);
            };
        };
    }
}

$userResults = (object) $userResults;

echo json_encode($userResults, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>