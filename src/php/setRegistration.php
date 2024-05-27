<?php

$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');
$json = json_decode(file_get_contents("php://input"));
$login= $json->login;
$password = md5($json->password);
$remember = $json->remember;
$id_hash ='';
$time = 3600*24*30;
$userDB = $mysql->query("SELECT * FROM `users` WHERE `login`='$login'");
$row_cnt = mysqli_num_rows($userDB);
if($row_cnt != 0){
    $data['error'] = 'Такой пользователь уже есть. Укажите другой логин.';
}else {
    $mysql->query("INSERT INTO `users`(`login`, `password`) VALUES ('$login','$password')");
    $idNewUser = $mysql->query("SELECT `id` FROM `users` WHERE `login`='$login'");
    while($row = mysqli_fetch_array($idNewUser)){
        $id_hash = md5($row["id"]);
    };
    $mysql->query("UPDATE `users` SET `id_hash`='$id_hash' WHERE `login`='$login'");
    if($remember){
        setcookie('user', $login, time()+$time, "/");
        setcookie('user_id', $id_hash, time()+$time, "/");
    } else{
        setcookie('user', $login, time()+3600*24, "/");
        setcookie('user_id', $id_hash, time()+3600*24,"/");
    }
    
    session_start();

}

$data['login']= $login;

echo json_encode($data, JSON_UNESCAPED_UNICODE);
$mysql->close();
?>