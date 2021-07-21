fuction validate()
{
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "snj";
  var corpass = "12345";

  if(user.value == coruser){
    if(pass.value == corpass){
      window.alert("You are logged in as!!" + user.value);
      
    } else{
      window.alert("Incorrect username or password");
    }
  } else{
    window.alert("Incorrect username or password");
  }
}
