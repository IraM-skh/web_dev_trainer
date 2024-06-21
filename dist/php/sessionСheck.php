<?php
require './dbData.php';
$mysql = new mysqli($dbDataHost, $dbDataUser, $dbDataPassword, $dbDataName);

$cookLogin = $_COOKIE['user'];
$cookIdHash = $_COOKIE['user_id'];
$result = false;
if ($cookLogin){
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
            $result = true;
        }
    }
};

echo json_encode($result, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>