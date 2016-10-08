<?php
#strip slashes before putting the form data into target file
$cd=stripslashes($_POST['email']);
 #Show the msg,if the code string is empty
 if(empty($cd))
 {echo "You didnt enter anything";}
#if the code string is not empty then open the target file and put form data in it
else
{$file=fopen("textfile.txt","w");
echo fwrite($file,$cd);
#show a success msg 

echo "Your email was succefully recorded";
fclose($file);}?>
