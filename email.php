<?php
        if(isset($_GET['email']) {
          $data = $_GET['email'] . "\n";
          $ret = file_put_contents('textfile.txt', $data, FILE_APPEND | LOCK_EX);
          if($ret === false) {
              die('There was an error writing this file');
          }
          else {
              echo "$ret bytes written to file";
          }
      }
        else {
           die('no post data to process');
        }
      ?>
