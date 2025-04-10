<?php
$host = "localhost";
$dbname = "quiz_app_user_info";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$email = $conn->real_escape_string($data["email"]);
$theme = $conn->real_escape_string($data["theme"]);
$score = intval($data["score"]);
$total = intval($data["total"]);

$sql = "INSERT INTO quiz_scores (email, theme, score, total) VALUES ('$email', '$theme', $score, $total)";
$conn->query($sql);

$conn->close();
?>
