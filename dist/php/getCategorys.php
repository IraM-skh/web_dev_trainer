<?php 
        require './dbData.php';
        $mysql = new mysqli($dbDataHost, $dbDataUser, $dbDataPassword, $dbDataName);
       
        $categorys = $mysql->query("SELECT `id`, `name`, `output_ids`, `id_args` FROM `category` WHERE `id_section` = 1"); 
        $categorysAll = [];
        $categorysArrForObj =[];
        


        while($row = mysqli_fetch_array($categorys)){
          $categorysArrForObj["id"] = (int) $row["id"];
          $categorysArrForObj["categoryName"] = $row["name"];
          $outputIdsSrtArr = explode(", ", $row["output_ids"]);
          foreach ($outputIdsSrtArr as &$value) {
            $value = (int) $value;
          }
          $categorysArrForObj["outputIds"] = $outputIdsSrtArr;
          $idArgsSrtArr = explode(", ", $row["id_args"]);
          foreach ($idArgsSrtArr as &$value) {
            $value = (int) $value;
          }
          $categorysArrForObj["idArgs"] = $idArgsSrtArr;
          $idCategory = $row["id"];
          $subjectsName = [];
          //начинаем здесь запрос ко 2 таблице
          $subjects = $mysql->query("SELECT `name` FROM `subject` WHERE `id_category` = $idCategory");
          while ($rowSub = mysqli_fetch_array($subjects)) {
            array_push($subjectsName, $rowSub["name"]);
          }


          $categorysArrForObj["subjectsName"] = $subjectsName;

          //здесь закончили

          $obj = (object) $categorysArrForObj;
          array_push($categorysAll, $obj);
          $categorysArrForObj =array();
         }




        // $json1 = json_encode($categorysAll, JSON_UNESCAPED_UNICODE);
        // echo($json1);

        echo json_encode($categorysAll, JSON_UNESCAPED_UNICODE);
        $mysql->close();
      ?>  
