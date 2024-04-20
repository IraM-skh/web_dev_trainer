<?php

$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');
$json = json_decode(file_get_contents("php://input"));
$login= $json->login;
$password = $json->password;
$id_hash ='';
$userDB = $mysql->query("SELECT * FROM `users` WHERE `login`='$login'");
$row_cnt = mysqli_num_rows($userDB);
if($row_cnt == 0){
    $data['error'] = 'такой пользователь уже есть';
}else {
    $mysql->query("INSERT INTO `users`(`login`, `password`) VALUES ('$login','$password')");
    $idNewUser = $mysql->query("SELECT `id` FROM `users` WHERE `login`='$login'");
    while($row = mysqli_fetch_array($idNewUser)){
        $id_hash = md5($row["id"]);
    };
    $mysql->query("UPDATE `users` SET `id_hash`='$id_hash' WHERE `login`='$login'");
    
}



$data= [$login, $password];


echo json_encode($data, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>