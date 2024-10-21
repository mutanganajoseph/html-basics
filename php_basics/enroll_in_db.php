<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if user is logged in
//if (!isset($_SESSION['username'])) {
    // User is not logged in, redirect to login page
   // header("Location: login.php");
    //exit();
//}

// Database connection
$servername = "localhost";
$username = "root";
$password = "   321";
$dbname = "Details";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data and sanitize
$name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
$class = isset($_POST['class']) ? $conn->real_escape_string($_POST['class']) : '';
$marks = isset($_POST['marks']) ? intval($_POST['marks']) : 0; // Ensure it's an integer
$email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
$dob = isset($_POST['dob']) ? $_POST['dob'] : '';
$phone = isset($_POST['phone']) ? $conn->real_escape_string($_POST['phone']) : '';
$address = isset($_POST['address']) ? $conn->real_escape_string($_POST['address']) : '';
$fees = isset($_POST['fees']) ? floatval($_POST['fees']) : 0.00; // Ensure it's a float

// Validate and format date of birth
if ($dob !== '') {
    $dob = date('Y-m-d', strtotime($dob)); // Convert to YYYY-MM-DD format
}

// Insert student data
$sql = "INSERT INTO student (NAME, CLASS, MARKS, EMAIL, DOB, PHONE, ADDRESS, FEES)
        VALUES ('$name', '$class', $marks, '$email', '$dob', '$phone', '$address', $fees)";

if ($conn->query($sql) === TRUE) {
    // Get the last inserted Student_id
    $student_id = $conn->insert_id;

    // Check if courses are selected
    if (isset($_POST['courses']) && is_array($_POST['courses'])) {
        foreach ($_POST['courses'] as $course_id) {
            // Insert into enrollments table
            $sql_enroll = "INSERT INTO enrollments (Student_id, Course_id, Enrollment_date)
                           VALUES ($student_id, $course_id, NOW())";

            if ($conn->query($sql_enroll) !== TRUE) {
                echo "Error: " . $sql_enroll . "<br>" . $conn->error;
            }
        }

        $message = "Student enrolled successfully in selected courses.";
        $messageType = "success";
    } else {
        $message = "Student enrolled, but no courses were selected.";
        $messageType = "success";
    }
} else {
    $message = "Error: " . $sql . "<br>" . $conn->error;
    $messageType = "error";
}

$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Result</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            text-align: center;
        }
        .message {
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            font-weight: bold;
            margin: 10px;
        }
        .success {
            background-color: green;
            color: white;
        }
        .error {
            background-color: red;
            color: white;
        }
        p{
            color:white;
            margin:3em auto;
           text-align: center;
           text-decoration: none;
        }
        p a {
            color:white;
            
           text-align: center;
           text-decoration: none;
        }
        p a:hover {
        color: black;
        }

    </style>
</head>
<body>
    <div class="message <?php echo $messageType; ?>">
        <?php echo $message; ?>
        <p><a href="Details_db.php">Go Back</a></p>
    </div>
</body>
</html>
