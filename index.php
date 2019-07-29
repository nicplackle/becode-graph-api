<?php

$newArray = array();

for ($i = 0; $i <= 9; $i++) {
    $newNumber1 = rand(1, 20);
    
$newNumber = [$i, $newNumber1 ];
    array_push($newArray, $newNumber);
}
echo json_encode($newArray);
?>
