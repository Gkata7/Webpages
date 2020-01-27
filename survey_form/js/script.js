function validation(){
  var firstName = document.getElementById("first-Name").value;
  var lastName = document.getElementById("last-Name").value;
  var age = document.getElementById("person_age").value;
  var description = document.getElementById("role-fit").value;
  if(firstName === '' || lastName === '' || age === '' || description === ''){
    alert('Please fill out all fields!!');
    return false;
  } else {
    return true;
  }
};


function submit_by_class() {
  var firstName = document.getElementById("first-Name").value;
  console.log(firstName);
  var lastName = document.getElementById("last-Name").value;
  var age = document.getElementById("person_age").value;
  var description = document.getElementById("role-fit").value;
  if (validation()) // Calling validation function
  {
    var x = document.getElementById("form_id").submit();
    alert(" First Name : " + firstName + " Last Name : " + lastName + " Age : " + age + " Description: " + description + " Form Submitted Successfully......");
  }
};
