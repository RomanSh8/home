// Когда страница запрашивается через GET, сумма не должна выводиться. Когда страница запрашивается через POST, 
должна выводиться сумма, а так же форма должна проверяться на заполненность. И чтобы были только цифры.
   

   <?php
    $post = $_POST;
    $x = $post['x'];
    $y = $post['y'];
    if ($x !== '' && $y !== '') {
    $sum = $x + $y;
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form action="calc.php" method="post">
        <input placeholder="Число x" name="x">
        <input placeholder="Число y" name="y">
        <input type="submit" value="Суммировать">
        
    </form>
    <p><?php 
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            
        } else {
            
        echo $sum;} ?></p>
</body>
</html>
