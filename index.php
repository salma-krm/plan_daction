<?php
include './db/db_conix.php';
$id= 1;
$firtname = 'salma';
$lastname ='tergui';
$email = 'salmatergui7@gmail.com'
$passwordd ='salmasalma'
if($__POST(['submit'])){
    $id = $__POST(['id']);
    $firtname=$__POST(['firstname']);
    $lastname =$__POST(['lastname']);
    $email = $__POST(['email']);
    $passwordd =$__POST(['passwordd']);
    $sql="INSERT INTO ('id','firstname','lastname','email','passwordd')values ($id,$firtname,$lastname,$email,$passwordd)";
    mysqli_query($conn,$sql);

    $result =$conn->query($sql_query);



}



$sql ="SELECT id,firstname,lastname,email,passwordd FROM `users` ";
$row=mysqli_fetch_assoc($result);
if(empty($row)){
    $id = $row(['id']);
    $firtname=$row(['firstname']);
    $lastname =$row(['lastname']);
    $email = $row(['email']);
    $passwordd =$row(['passwordd']);
    mysqli_query($conn,$sql);
    $result =$conn->query($sql_query);
}

//  delte crud
if (isset($_GET['id'])) {
$id = $__GET(['id']);
 $sql = "DELETE FROM player WHERE id = $id";
$result = mysqli_query($coon, $sql); 
}







?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

</body>
</html>