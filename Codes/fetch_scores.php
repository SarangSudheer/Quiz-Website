<?php
$host = "localhost";
$dbname = "quiz_app_user_info";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed");
}

$email = $_GET["email"];
$sql = "SELECT theme, score, total, attempt_time FROM quiz_scores WHERE email = '$email' ORDER BY attempt_time DESC";
$result = $conn->query($sql);

$scores = [];
while ($row = $result->fetch_assoc()) {
    $scores[] = $row;
}

echo json_encode($scores);
$conn->close();
?>
