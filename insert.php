<?php 

$conn = mysqli_connect('localhost:3306','root','root','subscription');

$email = $_POST['email'];

$sql = "INSERT INTO subscription_users(user_email) VALUES('$email')";

if(mysqli_query($conn,$sql)) {
	echo $email;
}else {
	echo 'Error Query' . mysqli_error($conn);
}



?>
