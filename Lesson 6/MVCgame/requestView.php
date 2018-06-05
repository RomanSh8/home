<?php function showForm() {
echo " 
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>Document</title>
</head>
<body>
    <p>Угадайте число</p>
    <form method=\"post\">
        <input placeholder=\"Введите число\" name=\"y\">
        <input type=\"submit\" value=\"Проверить\">
    </form>        
</body>
</html>";
}


?>