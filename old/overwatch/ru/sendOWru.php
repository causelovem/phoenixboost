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

$msg .= "Имя: $fullName\r\n";
$msg .= "E-mail: $email\r\n";
$msg .= "Сообщение: $message\r\n\r\n";

$customerMsg .= "Недавно Вы сделали заказ на нашем сайте!\r\n\r\n";
$customerMsg .= "Информация о заказе:\r\n\r\n";

if ($boostType == 'БУСТ РАНГА')
{
    $subject = "[PhoenixBoost Overwatch Rank Boost]";

    $msg .= "Буст ранга\r\n";
    $msg .= "Текущий ранг: $curRank\r\n";
    $msg .= "Желаемый ранг: $disRank\r\n";
    $msg .= "$soloDuo\r\n";

    $customerMsg .= "Буст ранга\r\n";
    $customerMsg .= "Текущий ранг: $curRank\r\n";
    $customerMsg .= "Желаемый ранг: $disRank\r\n";
    $customerMsg .= "$soloDuo\r\n";
}
else
if ($boostType == 'КАЛИБРОВКА')
{
    $subject = "[PhoenixBoost Overwatch Калибровка]";

    $msg .= "Калибровка\r\n";
    $msg .= "Был ли ранг: $prevRank\r\n";
    $msg .= "Калибровочный ранг: $placementsRank\r\n";

    $customerMsg .= "Калибровка\r\n";
    $customerMsg .= "Был ли ранг: $prevRank\r\n";
    $customerMsg .= "Калибровочный ранг: $placementsRank\r\n";
}
else
if ($boostType == 'anti-decay')
{
    $subject = "[PhoenixBoost Overwatch Anti-decay]";

    $msg .= "Anti-decay\r\n";
    $msg .= "Текущий ранг: $antiDecayRank\r\n";

    $customerMsg .= "Anti-decay\r\n";
    $customerMsg .= "Текущий ранг: $antiDecayRank\r\n";
}

$msg .= "Цена: $price\r\n";

$customerMsg .= "E-mail: $email\r\n";
$customerMsg .= "Цена: $price\r\n";
$customerMsg .= "Наш бустер свяжется с вами, как только освободится!\r\n\r\n\r\n";
$customerMsg .= "По всем вопросам обращайтесь по адресам:\r\n";
$customerMsg .= "E-mail: $to\r\n";
$customerMsg .= "Skype: phoenixboost support\r\n\r\n";
// $customerMsg .= "Discord: discord\r\n\r\n"; /*сделать скайп и дискорд*/
$customerMsg .= "С уважением, Ваша команда PhoenixBoost!";

$headers = "From: $to\r\n";

mail($email, $subject, $customerMsg, $headers);

if (mail($to, $subject, $msg, $headers))
{
   print "
     <script language='Javascript' type='text/javascript'>
     <!--
     alert ('Ваше сообщение успешно отправлено! Спасибо!');

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
     alert ('При отправке сообщения произошла ошибка: свяжитесь с тех-поддержкой сайта support@phoenixboost.com');
     
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