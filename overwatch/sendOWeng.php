<?php
$curRank = $_POST['curRank'];
$disRank = $_POST['disRank'];

$email = $_POST['email'];
$fullName = $_POST['fullName'];
$message = $_POST['message'];

$price = $_POST['price'];

$boostType = $_POST['boostType']; 
$prevRank = $_POST['prevRank']; /*был ли ранг в прошлом сезоне*/
$placementsRank = $_POST['placementsRank']; /*ранг калибровки (чистый и нет)*/
$antiDecayRank = $_POST['antiDecayRank']; /*текущий ранг для анти дикея*/

$soloDuo = $_POST['soloDuo'];

$curRank = htmlspecialchars($curRank);
$disRank = htmlspecialchars($disRank);
$email = htmlspecialchars($email);
$fullName = htmlspecialchars($fullName);
$message = htmlspecialchars($message);
$price = htmlspecialchars($price);
$boostType = htmlspecialchars($boostType);
$prevRank = htmlspecialchars($prevRank);
$placementsRank = htmlspecialchars($placementsRank);
$antiDecayRank = htmlspecialchars($antiDecayRank);

$curRank = urldecode($curRank);
$disRank = urldecode($disRank);
$email = urldecode($email);
$fullName = urldecode($fullName);
$message = urldecode($message);
$price = urldecode($price);
$boostType = urldecode($boostType);
$prevRank = urldecode($prevRank);
$placementsRank = urldecode($placementsRank);
$antiDecayRank = urldecode($antiDecayRank);

$curRank = trim($curRank);
$disRank = trim($disRank);
$email = trim($email);
$fullName = trim($fullName);
$message = trim($message);
$price = trim($price);
$boostType = trim($boostType);
$prevRank = trim($prevRank);
$placementsRank = trim($placementsRank);
$antiDecayRank = trim($antiDecayRank);

$to = "support@phoenixboost.com"; /*ПОЧТА САЙТА!!!*/

$msg .= "Full Name: $fullName\r\n";
$msg .= "E-mail: $email\r\n";
$msg .= "Message: $message\r\n\r\n";

$customerMsg .= "Recently you made an order on our website!\r\n\r\n";
$customerMsg .= "Order information:\r\n\r\n";


if ($boostType == 'rank boost')
{
    $subject = "[PhoenixBoost Overwatch Rank Boost]";

    $msg .= "Rank boost\r\n";
    $msg .= "Current rank: $curRank\r\n";
    $msg .= "Desired rank: $disRank\r\n";
    $msg .= "$soloDuo\r\n";

    $customerMsg .= "Rank boost\r\n";
    $customerMsg .= "Current rank: $curRank\r\n";
    $customerMsg .= "Desired rank: $disRank\r\n";
    $customerMsg .= "$soloDuo\r\n";
}
else
if ($boostType == 'placements')
{
    $subject = "[PhoenixBoost Overwatch Placements]";

    $msg .= "Placements\r\n";
    $msg .= "Last rank: $prevRank\r\n";
    $msg .= "Placements rank: $placementsRank\r\n";

    $customerMsg .= "Placements\r\n";
    $customerMsg .= "Last rank: $prevRank\r\n";
    $customerMsg .= "Placements rank: $placementsRank\r\n";
}
else
if ($boostType == 'anti-decay')
{
    $subject = "[PhoenixBoost Overwatch Anti-decay]";

    $msg .= "Anti-decay\r\n";
    $msg .= "Current rank: $antiDecayRank\r\n";

    $customerMsg .= "Anti-decay\r\n";
    $customerMsg .= "Current rank: $antiDecayRank\r\n";
}

$msg .= "Price: $price\r\n";

$customerMsg .= "E-mail: $email\r\n";
$customerMsg .= "Price: $price\r\n";
$customerMsg .= "We will contact you as soon as one of the boosters can accept your order!\r\n\r\n\r\n";
$customerMsg .= "For all questions please contact us:\r\n";
$customerMsg .= "E-mail: $to\r\n";
$customerMsg .= "Skype: phoenixboost support\r\n\r\n";
// $customerMsg .= "Discord: discord\r\n\r\n"; /*сделать скайп и дискорд*/
$customerMsg .= "Sincerely, Your PhoenixBoost Team!";

$headers = "From: $to\r\n";

mail($email, $subject, $customerMsg, $headers);

if (mail($to, $subject, $msg, $headers))
{
   print "
     <script language='Javascript' type='text/javascript'>
     <!--
     alert ('Your message was successfully sent! Thank you!');

     function reload()
     {location = 'http://www.phoenixboost.com/overwatch'}; 
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
     {location = 'http://www.phoenixboost.com/overwatch'}; 
     setTimeout('reload()', 0);
     -->
     </script>";
}

// $headers = "Чё это такое вообще?!??! \r\n";

// mail($to, $subject, $msg, $headers);

// mail($to, $subject, $msg);

// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
// header("Location: $redirect");

exit();
?>