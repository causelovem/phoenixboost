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
$subject = "[PhoenixBoost Hearthstone Буст Ранга]";

$msg .= "Имя: $fullName\r\n";
$msg .= "E-mail: $email\r\n";
$msg .= "Сообщение: $message\r\n\r\n";

$msg .= "Буст ранга\r\n";
$msg .= "Текущий ранг: $curRank\r\n";
$msg .= "Желаемый ранг: $disRank\r\n";
$msg .= "Сервер: $server\r\n";
$msg .= "Цена: $price\r\n";

// $headers = "Чё это такое вообще?!??! \r\n";

// mail($to, $subject, $msg, $headers);

$customerMsg .= "Недавно Вы сделали заказ на нашем сайте!\r\n\r\n";
$customerMsg .= "Информация о заказе:\r\n\r\n";
$customerMsg .= "Буст ранга\r\n";
$customerMsg .= "Текущий ранг: $curRank\r\n";
$customerMsg .= "Желаемый ранг: $disRank\r\n";
$customerMsg .= "Сервер: $server\r\n";
$customerMsg .= "E-mail: $email\r\n";
$customerMsg .= "Цена: $price\r\n";
$customerMsg .= "Наш бустер свяжется с вами, как только освободится!\r\n\r\n\r\n";
$customerMsg .= "По всем вопросам обращайтесь по адресам:\r\n";
$customerMsg .= "E-mail: $to\r\n";
$customerMsg .= "Skype: phoenixboost support\r\n";
// $customerMsg .= "Discord: discord\r\n\r\n"; /*сделать скайп и дискорд*/
$customerMsg .= "С уважением, Ваша команда PhoenixBoost!";

$headers = "From: $to\r\n";

// mail($to, $subject, $msg);
mail($email, $subject, $customerMsg, $headers);

if (mail($to, $subject, $msg, $headers))
{
   print "
     <script language='Javascript' type='text/javascript'>
     <!--
     alert ('Ваше сообщение успешно отправлено! Спасибо!');

     function reload()
     {location = 'http://www.phoenixboost.com/hearthstone/ru'}; 
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
     {location = 'http://www.phoenixboost.com/hearthstone/ru'}; 
     setTimeout('reload()', 0);
     -->
     </script>";
}

// $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
// header("Location: $redirect");

exit();
?>