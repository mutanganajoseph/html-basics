<?php
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

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize email input
    if (isset($_POST['email'])) {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        // Check if email exists in database
        $check_sql = "SELECT User_id, email FROM Users WHERE email = ?";
        $check_stmt = $conn->prepare($check_sql);
        $check_stmt->bind_param("s", $email);
        $check_stmt->execute();
        $check_stmt->store_result();

        if ($check_stmt->num_rows > 0) {
            // Generate a unique token
            $token = bin2hex(random_bytes(32)); // Generate a 32-character random token

            // Store the token in the database for the user
            $update_sql = "UPDATE Users SET reset_token = ? WHERE email = ?";
            $update_stmt = $conn->prepare($update_sql);
            $update_stmt->bind_param("ss", $token, $email);

            if ($update_stmt->execute()) {
                // Send email with reset link using mail() function
                $reset_link = "http://localhost/Reset_password.php?token=" . $token; // Replace with your actual domain
                $to = $email;
                $subject = "Password Reset Request";
                $message = "Dear user,\n\nYou requested a password reset. Please click the link below to reset your password:\n\n$reset_link\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nYour Application Team";
                $headers = "From: josephmutangana65@gmail.com"; // Replace with your actual email address

                // Send email
                if (mail($to, $subject, $message, $headers)) {
                    echo "An email has been sent to your registered email address with instructions to reset your password.";
                    exit;
                } else {
                    $error_message = "Failed to send email. Please try again later.";
                }
            } else {
                $error_message = "Error updating reset token: " . $conn->error;
            }

            $update_stmt->close();
        } else {
            $error_message = "Email not found";
        }

        $check_stmt->close();
    } else {
        $error_message = "Email field is required";
    }
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
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
            margin-top:2em;
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        input[type="text"] {
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
        p{

            margin-top:2em;
           
        }
    </style>
</head>
<body>

    <div>
        <h2>Forgot Password</h2>

        <?php if (!empty($error_message)) : ?>
            <p class="error-message"><?php echo $error_message; ?></p>
        <?php endif; ?>

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required>

            <input type="submit" value="Reset Password">
            <p style="text-align: center;">Back to <a href="login.php">Login</a></p>
        </form>

     
    </div>

</body>
</html>
