<?php 
header("Access-Control-Allow-Origin: *"); // Allow all request Url eg. http://localhost:8080, http://127.0.0.1:8080, http://192.168.0.1:8080 etc.
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'); // Allow API methods;
header('Content-Type: application/json');
$conn = mysqli_connect("localhost","dogustan_talasemi_taloios","42b85MD0.","dogustan_talasemi_taloios");

?>


<?php
if(isset($_POST)){
	$user = $_POST['user'];

$sqlQuery = "SELECT isimsoyisim from oturum where uye_id='$user'";

$result = mysqli_query($conn,$sqlQuery);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);
echo json_encode($data);
}
?>