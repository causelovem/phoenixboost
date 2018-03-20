<?php
$curLvl = $_POST['curLvl'];
$disLvl = $_POST['disLvl'];

$email = $_POST['email'];
$fullName = $_POST['fullName'];
$message = $_POST['message'];

$price = $_POST['price'];

$boostType = $_POST['boostType']; 
$difficulty = $_POST['difficulty'];
$heroCount = $_POST['heroCount'];

$soloDuo = $_POST['soloDuo'];

$curLvl = htmlspecialchars($curLvl);
$disLvl = htmlspecialchars($disLvl);
$email = htmlspecialchars($email);
$fullName = htmlspecialchars($fullName);
$message = htmlspecialchars($message);
$price = htmlspecialchars($price);
$boostType = htmlspecialchars($boostType);
$difficulty = htmlspecialchars($difficulty);
$heroCount = htmlspecialchars($heroCount);

$curLvl = urldecode($curLvl);
$disLvl = urldecode($disLvl);
$email = urldecode($email);
$fullName = urldecode($fullName);
$message = urldecode($message);
$price = urldecode($price);
$boostType = urldecode($boostType);
$difficulty = urldecode($difficulty);
$heroCount = urldecode($heroCount);

$curLvl = trim($curLvl);
$disLvl = trim($disLvl);
$email = trim($email);
$fullName = trim($fullName);
$message = trim($message);
$price = trim($price);
$boostType = trim($boostType);
$difficulty = trim($difficulty);
$heroCount = trim($heroCount);

$to = "support@phoenixboost.com"; /*ПОЧТА САЙТА!!!*/

$subject = "[PhoenixBoost Destiny2 Boost]";

$msg .= "Full Name: $fullName\r\n";
$msg .= "E-mail: $email\r\n";
$msg .= "Message: $message\r\n\r\n";

$customerMsg .= "Recently you made an order on our website!\r\n\r\n";
$customerMsg .= "Order information:\r\n\r\n";


if (($boostType == 'leviafan') || ($boostType == 'eaterOfWorlds'))
{
    if ($boostType == 'leviafan')
    {
        $msg .= "Leviafan\r\n";
        $customerMsg .= "Leviafan\r\n";
    }
    else
    {
        $msg .= "Eater of Worlds\r\n";
        $customerMsg .= "Eater of Worlds\r\n";
    }
    $msg .= "Difficulty: $difficulty\r\n";
    $msg .= "Numbers of characters: $heroCount\r\n";

    $customerMsg .= "Difficulty: $difficulty\r\n";
    $customerMsg .= "Numbers of characters: $heroCount\r\n";
}
else
if ($boostType == 'nightfall')
{
    $msg .= "Nightfall\r\n";
    $msg .= "Difficulty: $difficulty\r\n";
    $msg .= "Numbers of characters: $heroCount\r\n";
    $msg .= "$soloDuo\r\n";


    $customerMsg .= "Nightfall\r\n";
    $customerMsg .= "Difficulty: $difficulty\r\n";
    $customerMsg .= "Numbers of characters: $heroCount\r\n";
    $customerMsg .= "$soloDuo\r\n";
}
else
if ($boostType == 'powerLvlling')
{
    $msg .= "Power Levelling\r\n";
    $msg .= "Current lvl: $curLvl\r\n";
    $msg .= "Desired lvl: $disLvl\r\n";

    $customerMsg .= "Power Levelling\r\n";
    $customerMsg .= "Current lvl: $curLvl\r\n";
    $customerMsg .= "Desired lvl: $disLvl\r\n";
}
else
if ($boostType == 'weaponsQuests')
{
    $msg .= "Weapons quests\r\n";
    $msg .= "Weapons: $difficulty\r\n";

    $customerMsg .= "Weapons quests\r\n";
    $customerMsg .= "Weapons: $difficulty\r\n";
}
else
if ($boostType == 'trialsNine')
{
    $msg .= "Trials of the Nine\r\n";
    $msg .= "Numbers of characters: $heroCount\r\n";

    $customerMsg .= "Trials of the Nine\r\n";
    $customerMsg .= "Numbers of characters: $heroCount\r\n";
}
if ($boostType == 'ironBanner')
{
    $msg .= "Iron Banners\r\n";
    $msg .= "Numbers of tokens: $difficulty\r\n";

    $customerMsg .= "Iron Banners\r\n";
    $customerMsg .= "Numbers of tokens: $difficulty\r\n";
}

$msg .= "Price: $price\r\n";

$customerMsg .= "E-mail: $email\r\n";
$customerMsg .= "Price: $price\r\n\r\n";
$customerMsg .= "Please, add us on Skype or Discord, if it's possible.\r\n";
$customerMsg .= "We will contact you as soon as one of the boosters can accept your order!\r\n\r\n\r\n";
$customerMsg .= "For all questions please contact us:\r\n";
$customerMsg .= "E-mail: $to\r\n";
$customerMsg .= "Discord: causelove#6980\r\n";
$customerMsg .= "Skype: phoenixboost support (live:support_49862)\r\n\r\n";
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
     {location = 'http://www.phoenixboost.com/destiny2'}; 
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
     {location = 'http://www.phoenixboost.com/destiny2'}; 
     setTimeout('reload()', 0);
     -->
     </script>";
}

// mail($to, $subject, $msg, $headers);

// mail($to, $subject, $msg);

// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
// header("Location: $redirect");

exit();
?>