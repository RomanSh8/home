<?php
include "requestView.php";
include "answerView.php";
function controller() {
    if($_SERVER['REQUEST_METHOD'] == 'GET') {
        showForm();
    } if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $post = $_POST;
        $x = mt_rand(1, 2);
        $y = $post['y'];
        include "model.php";
        $result = comparison($x, $y);
        resultForm($result);
        
    }
}

controller();
?>