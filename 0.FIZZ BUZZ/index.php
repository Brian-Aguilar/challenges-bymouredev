<?php

function fizzbuzz($numero)
{
    $temp = "";
    if ($numero % 3 == 0) $temp .= "fizz";
    if ($numero % 5 == 0) $temp .= "buzz";

    print_r(($temp == "" ? $numero : $temp) . "\n");
}

for ($i = 0; $i <= 100; $i++) {
    fizzBuzz($i);
}
