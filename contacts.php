<?php 

	$conn = mysqli_connect('localhost:3306','root','root','subscription');

	

	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$pnumber = $_POST['pnumber'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	
	$sql = "INSERT INTO user_form(fname,lname,pnumber,email,message) VALUES('$fname','$lname','$pnumber','$email','$message')";
	
	
	if(!empty($fname) && !empty($lname) && !empty($pnumber) && !empty($email) && !empty($message)) {
		if(mysqli_query($conn,$sql)) {
			echo ' Message Suceesfully Added';
		}else {
			echo 'Query Error ' . mysqli_error($conn);
		}
	}else {
		echo 'Check your input form';
	}

?>
