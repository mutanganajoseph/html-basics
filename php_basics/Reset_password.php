<?php
// Start session
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection settings
$servername = "localhost";
$username = "root"; // Database username
$password = "   321"; // Database password (Note: Remove spaces around the password)
$dbname = "Details"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize variables
$error_message = "";

// Validate token from URL
if (isset($_GET['token'])) {
    $token = $_GET['token'];

    // Query to find the user with the given token
    $sql = "SELECT User_id FROM Users WHERE reset_token = ? AND reset_token_expiry > NOW()";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Token is valid, allow user to reset password
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $new_password = $_POST['new_password'];
            $confirm_password = $_POST['confirm_password'];

            if (empty($new_password) || empty($confirm_password)) {
                $error_message = "Please enter both fields";
            } elseif ($new_password !== $confirm_password) {
                $error_message = "Passwords do not match";
            } else {
                // Hash the new password
                $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

                // Update user's password in the database
                $row = $result->fetch_assoc();
                $user_id = $row['User_id'];

                $update_sql = "UPDATE Users SET Password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE User_id = ?";
                $update_stmt = $conn->prepare($update_sql);
                $update_stmt->bind_param("si", $hashed_password, $user_id);

                if ($update_stmt->execute()) {
                    // Password updated successfully
                    // Optionally, delete the token from PasswordReset table to prevent reuse
                    // Redirect to login page or success message
                    header("Location: login.php");
                    exit;
                } else {
                    $error_message = "Error updating password: " . $conn->error;
                }
            }
        }
    } else {
        $error_message = "Invalid or expired token";
    }
} else {
    // Token not provided
    $error_message = "Token not found";
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        form {
            width: 300px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        input[type="password"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .error-message {
            color: red;
            margin-top: 5px;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <div>
        <h2>Reset Password</h2>

        <?php if (!empty($error_message)) : ?>
            <p class="error-message"><?php echo $error_message; ?></p>
        <?php else : ?>
            <p>Please enter your new password:</p>
        <?php endif; ?>

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) . "?token=" . htmlspecialchars($_GET['token']); ?>" method="post">
            <label for="new_password">New Password:</label>
            <input type="password" id="new_password" name="new_password" required>

            <label for="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required>

            <input type="submit" value="Reset Password">
        </form>

        <p style="text-align: center;"><a href="login.php">Back to Login</a></p>
    </div>

</body>
</html>
