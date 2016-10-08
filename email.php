<?php 
if(isset($_POST['submit'])){
    $to = "cshschoolstore@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Newsletter submission";
    $subject2 = "Copy of your Newsletter submission";
    $message = $first_name . " " . $last_name . "" . $from . "\n\n";
    $message2 = $first_name . " " . $last_name . "\n" . "Thank you for signing up for the CSH School Store Newsletter!";
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Thank you for signing up!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
