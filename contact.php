<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PORTFOLIO - CAMILO ARIAS</title>
	<link rel="stylesheet" type="text/css" href="style.css">

	<!--- box icons link --->
	<link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <!--- remix icons link --->
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet"/>

    <!--- google fonts link --->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>

	<header>    
		<a href="./index.html" class="logo">Portfolio</a>

		<ul class="navlist">
			<li><a href="./index.html">Home</a></li>
			<li><a href="./curriculum.html">Curriculum</a></li>
			<li><a href="./skills.html">Skills</a></li>
			<li><a href="./about.html">About Me</a></li>
		</ul>

		<div class="nav-right">
			<a href="./contact.html" class="nav-btn">Hire Me!</a>
			<div class="bx bx-menu" id="menu-icon"></div>
		</div>
	</header>

    <section class="contact">
        <div class="contact-container">
            <h2>Contact Me</h2>
            <form action="#" method="post">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Recuperar los datos del formulario
                $name = $_POST['name'];
                $email = $_POST['email'];
                $message = $_POST['message'];

                // Destinatario y asunto del correo
                $to = "tucorreo@tuempresa.com"; // Cambiar "tucorreo@tuempresa.com" por tu dirección de correo electrónico real de la empresa
                $subject = "Mensaje de contacto de $name";

                // Cuerpo del correo
                $body = "Nombre: $name\n";
                $body .= "Email: $email\n";
                $body .= "Mensaje:\n$message";

                // Cabeceras del correo
                $headers = "From: $email";

                // Enviar el correo
                if (mail($to, $subject, $body, $headers)) {
                    echo "<script>alert('Mensaje enviado correctamente');</script>";
                } else {
                    echo "<script>alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde');</script>";
                }
            }
            ?>
        </div>
    
        <div class="social-icons">
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-twitch"></i></a>
            <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>

        <div class="contact-email">camiloarias.frg@gmail.com</div>

    </section>

    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script type="text/javascript">
        let menu = document.querySelector('#menu-icon');
        let navlist = document.querySelector('.navlist');
    
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open')
        }
    </script>

</body>