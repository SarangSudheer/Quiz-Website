<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"] ?? '';
    $email = $_POST["email"] ?? '';
    $password = $_POST["pwd"] ?? '';

    $conn = new mysqli("localhost", "root", "", "quiz_app_user_info");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if email already exists
    $checkStmt = $conn->prepare("SELECT * FROM user_info WHERE email = ?");
    $checkStmt->bind_param("s", $email);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        echo "<script>
            alert('Email already registered. Please log in.');
            window.location.href = 'login.html';
        </script>";
        exit();
    }

    // Hash password & insert user
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO user_info (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "<script>
            alert('Sign up successful!');
            window.location.href = 'login.html';
        </script>";
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $checkStmt->close();
    $conn->close();
}
?>