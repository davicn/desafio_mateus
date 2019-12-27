<?php
$link = mysqli_connect(
    'localhost',
    'root',
    '12345',
    'desafio'
);

if(!$link){
    echo 'connection fields';
}