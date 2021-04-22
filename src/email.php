<?php
  header("Content-Type:text/html; charset=UTF-8");
  $para = 'contact@hubb-me.com';
  $titulo = '🧲 New Newsletter Lead';

  $cabeceras = 'MIME-Version: 1.0' . "\r\n";
  $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $cabeceras .= 'From: '.$_POST["userEmail"];


  $mensaje =
      '<html>'.
          '<head>
              <title>Hubb Landing Page Newsletter</title>
          </head>'.
          '<body>
            <p>👋 Hi!</p>
            <p>I am interested in receiving more details about <strong>Hubb</strong>.</p>'.
            '<p>📧 Email: <strong>'.$_POST["userEmail"].'</strong></p>'.
            '<p>Regards!</p>'.
        '</body>'.
      '</html>';


  if (mail($para, $titulo, $mensaje, $cabeceras)){
      echo json_encode("Correo enviado, muchas gracias por contactarnos.");
  }else{
      echo json_encode('Falló el envio');
  }
?>
