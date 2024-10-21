<?php
// Start output buffering
ob_start();
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if user is logged in
//if (!isset($_SESSION['username'])) {
    // User is not logged in, redirect to login page
   // header("Location: login.php");
    //exit(); // Ensure no further code is executed
//}

// Database connection settings
$servername = "localhost";
$username = "root"; // Database username
$password = "   321"; // Database password
$dbname = "Details"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch courses from the database
$result = $conn->query("SELECT Course_id, Course_name FROM COURSES");

if (!$result) {
    die("Query failed: " . $conn->error);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Information Form</title>
<style>
    /* Style for the fieldset */
    fieldset {
        border: 1px solid #ccc;
        padding: 20px;
        width: 400px;
        margin: 5em auto;
    }

    /* Style for the legend */
    legend {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    /* Style for the form groups (label + input) */
    .form-group {
        margin-bottom: 15px;
        position: relative;
    }

    /* Style for labels */
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #666;
    }

    /* Style for inputs */
    input[type=text],
    input[type=email],
    input[type=number],
    input[type=date],
    input[type=submit],
    select {
        width: calc(100% - 16px); /* Adjust for padding */
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    /* Additional styling as needed */
    input[type=submit] {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 10px;
    }

    input[type=submit]:hover {
        background-color: rgb(35, 56, 14);
    }
</style>
</head>
<body>

<form action="enroll_in_db.php" method="POST">
    <fieldset>
        <legend>Student Enrollment Form</legend>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="class">Class:</label>
            <input type="text" id="class" name="class" required>
        </div>
        <div class="form-group">
            <label for="marks">Marks:</label>
            <input type="number" id="marks" name="marks" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>
        </div>
        <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required>
        </div>
        <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>
        </div>
        <div class="form-group">
            <label for="fees">Fees:</label>
            <input type="number" step="0.01" id="fees" name="fees" required>
        </div>
        <div class="form-group">
            <label>Select Courses:</label>
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<div>
                            <input type="checkbox" id="course' . $row['Course_id'] . '" name="courses[]" value="' . $row['Course_id'] . '">
                            <label for="course' . $row['Course_id'] . '">' . $row['Course_name'] . '</label>
                          </div>';
                }
            } else {
                echo '<p>No courses available.</p>';
            }
            ?>
        </div>
        <input type="submit" value="Submit">
    </fieldset>
</form>

<?php
// Close the database connection
$conn->close();

// End output buffering and send output
ob_end_flush();
?>

</body>
</html>
