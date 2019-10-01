<!DOCTYPE html>
<html>
<head>
<script>
//Mandates filling in the field
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
   //Alerts if form is not filled out
   alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>
//Titles page "Customer Information"
<h1>Customer Information</h1>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  //create text for first name
  First Name: <input type="text" name="fname">
  
  <script>
function validateForm() {
  var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
//create text for last name
 Last Name: <input type="text" name="lname"> 
  
<script>
function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
//creates text to display email
  Email: <input type="text" name="email">
  <input type="submit" value="Submit">
</form>

</body>
</html>