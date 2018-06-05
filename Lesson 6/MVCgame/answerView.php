<?php 

function resultForm($result) {
echo " 
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>Document</title>
</head>
<body>
    <p> $result </p>
    <form action=\"controller.php\"method=\"get\">
        <input type=\"submit\" value=\"Обратно\">
    </form>
</body>
</html>";
}

?>