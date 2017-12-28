<?php
$curRank = $_POST['curRank'];
$disRank = $_POST['disRank'];
$server = $_POST['server'];

$email = $_POST['email'];
$fullName = $_POST['fullName'];
$message = $_POST['message'];

$price = $_POST['price'];

$curRank = htmlspecialchars($curRank);
$disRank = htmlspecialchars($disRank);
$server = htmlspecialchars($server);
$email = htmlspecialchars($email);
$fullName = htmlspecialchars($fullName);
$message = htmlspecialchars($message);
$price = htmlspecialchars($price);

$curRank = urldecode($curRank);
$disRank = urldecode($disRank);
$server = urldecode($server);
$email = urldecode($email);
$fullName = urldecode($fullName);
$message = urldecode($message);
$price = urldecode($price);

$curRank = trim($curRank);
$disRank = trim($disRank);
$server = trim($server);
$email = trim($email);
$fullName = trim($fullName);
$message = trim($message);
$price = trim($price);

$to = "support@phoenixboost.com"; /*ПОЧТА САЙТА!!!*/
$subject = "[PhoenixBoost Hearthstone Rank Boost]";

$msg .= "Full Name: $fullName\r\n";
$msg .= "E-mail: $email\r\n";
$msg .= "Message: $message\r\n\r\n";

$msg .= "Rank boost\r\n";
$msg .= "Current rank: $curRank\r\n";
$msg .= "Desired rank: $disRank\r\n";
$msg .= "Server: $server\r\n";
$msg .= "Price: $price\r\n";

// $headers = "Чё это такое вообще?!??! \r\n";

// mail($to, $subject, $msg, $headers);

$customerMsg .= "Recently you made an order on our website!\r\n\r\n";
$customerMsg .= "Order information:\r\n\r\n";
$customerMsg .= "Rank boost\r\n";
$customerMsg .= "Current rank: $curRank\r\n";
$customerMsg .= "Desired rank: $disRank\r\n";
$customerMsg .= "Server: $server\r\n";
$customerMsg .= "E-mail: $email\r\n";
$customerMsg .= "Price: $price\r\n";
$customerMsg .= "We will contact you as soon as one of the boosters can accept your order!\r\n\r\n\r\n";
$customerMsg .= "For all questions please contact us:\r\n";
$customerMsg .= "E-mail: $to\r\n";
$customerMsg .= "Skype: phoenixboost support\r\n";
// $customerMsg .= "Discord: discord\r\n\r\n"; /*сделать скайп и дискорд*/
$customerMsg .= "Sincerely, Your PhoenixBoost Team!";

$headers = "From: $to\r\n";

// mail($to, $subject, $msg);
mail($email, $subject, $customerMsg, $headers);

if (mail($to, $subject, $msg, $headers))
{
   print "
     <script language='Javascript' type='text/javascript'>
     <!--
     alert ('Your message was successfully sent! Thank you!');

     function reload()
     {location = 'http://www.phoenixboost.com/hearthstone'}; 
     setTimeout('reload()', 0);
     -->
     </script>";
}
else
{
    print "
     <script language='Javascript' type='text/javascript'>
     <!--
     alert ('Sorry! An error occurred while sending the message: contact tech support at support@phoenixboost.com');
     
     function reload()
     {location = 'http://www.phoenixboost.com/hearthstone'}; 
     setTimeout('reload()', 0);
     -->
     </script>";
}

// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
// header("Location: $redirect");

exit();
?>