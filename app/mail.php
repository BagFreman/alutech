<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$comment = $_POST['comment'];


//$mail->SMTPDebug = 3;                           

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';                                                                                            // Specify main and backup SMTP servers
$mail->SMTPAuth = true;
$mail->Username = 'ooo.mardi@yandex.ru';
$mail->Password = 'phxtfohvuandspfc';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('ooo.mardi@yandex.ru');
$mail->addAddress('Mardi777@bk.ru');
// $mail->addAddress('');              
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');        
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта mardi-mo.ru';
$mail->Body = 'Имя: <b>' . $name . '</b><br>' . 'Телефон: <b>' . $phone . '</b><br>' . 'Город: <b>' . $city . '</b><br>' . 'Комментарий: <b>' . $comment . '</b><br>';
$mail->AltBody = '';

$mail->send();
