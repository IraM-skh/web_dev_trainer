<?php
$mysql = new mysqli('localhost', 'narkolog35', 'F@zVVN7ZEGQ43ZYP', 'narkolog35');
header("Content-Type: application/json; charset=UTF-8");
$json = json_decode(file_get_contents("php://input"));

$json->login = "admin";
$subjectName = $json->subjectName;
$progressNow = $json->result;
$login = $json->login;
$solved_count = "";
$failed_count = "";

$subjectId = "";
$coincidence = false;
$subjectIdDB = $mysql->query("SELECT `id` FROM `subject` WHERE `name` = '$subjectName'");

while($row = mysqli_fetch_array($subjectIdDB)){
          $subjectId = $row["id"];
};

$checkingResulInDB = $mysql->query("SELECT `id` FROM `user_progress` WHERE `login` = '$login' and `id_subject` ='$subjectId'");

//проерка есть ли нужное значение в БД 
//получение данных БД


while($row = mysqli_fetch_array($checkingResulInDB)){
  $coincidence = $row["id"];
};


//если результат есть, то обновляем progress_now и solved_count/ failed_count в зависимости от $progressNow




if ($coincidence){
    //получаем текущие значения solved_count/ failed_count

     $checkingResulCountsInDB = $mysql->query("SELECT `solved_count`, `failed_count` FROM `user_progress` WHERE `id`='$coincidence'");
    $solvedCountNow = 0;
    $failedCountNow = 0;
    while($row = mysqli_fetch_array($checkingResulCountsInDB)){
      $solvedCountNow= $row["solved_count"];
      $failedCountNow= $row["failed_count"];
    }

    //проерка, какой результат обновить и перевели в числа

    if ($progressNow == 'solved'){
      $solvedCountNow = (int) $solvedCountNow + 1;
    };
    if ($progressNow == 'failed'){
 
      $failedCountNow = (int) $failedCountNow+1;}
  
     $mysql->query("UPDATE `user_progress` SET `progress_now`='$progressNow',`solved_count`='$solvedCountNow',`failed_count`='$failedCountNow' WHERE `id`='$coincidence'");
  }
  
  
  else {
    //вставка новой записи

    $solvedCountNow = 0;
    $failedCountNow = 0;
    if ($progressNow == 'solved'){
        $solvedCountNow = $solvedCountNow + 1;
      };
      if ($progressNow == 'failed'){
        $failedCountNow = $failedCountNow+1;
      };

    $mysql->query("INSERT INTO `user_progress`(`id subject`, `progress_now`, `login`, `solved_count`, `failed_count`) VALUES ('$subjectId', '$progressNow' ,'$login','$solvedCountNow','$failedCountNow')");
  };



  $json ='';
  $mysql->close();
 