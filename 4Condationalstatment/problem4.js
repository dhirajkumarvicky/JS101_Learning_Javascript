// Problem 4: Given stored username and password and input username and password,
// Print if the user can login or not.


let system_username="Dhiraj";
let system_password="vicky@145";

let username= "Dhiraj";
let password=  "vicky@145";

if(system_username==username)
{
  if(system_password==password)
  {
    console.log(" Login successful")
  }
  else
  {
    console.log("pleas forget password")
  }
}
else
{
  console.log("pleas input valid username ")
}