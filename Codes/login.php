<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"] ?? '';
    $password = $_POST["pwd"] ?? '';

    // Connect to DB
    $conn = new mysqli("localhost", "root", "", "quiz_app_user_info");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Find user by email
    $stmt = $conn->prepare("SELECT * FROM user_info WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            $username = $user['username'];
            echo "<script>
            localStorage.setItem('username', '" . $user['username'] . "');
            localStorage.setItem('email', '$email');
            alert('Login successful!');
            window.location.href = 'main_menu.html';
            </script>";
            exit();
        } else {
            echo "<script>
                alert('Incorrect password. Please try again.');
                window.location.href = 'login.html';
            </script>";
        }
    } else {
        echo "<script>
            alert('No account found with this email. Please sign up.');
            window.location.href = 'signup.html';
        </script>";
    }

    $stmt->close();
    $conn->close();
}
?>
