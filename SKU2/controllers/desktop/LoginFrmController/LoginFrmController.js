define({ 

 validateLoginAndNavigate: function() {
  var username = this.view.txtUsername.text;
  var password = this.view.txtPassword.text;

  if (username === "admin" && password === "admin123") {
    var navObj = new voltmx.mvc.Navigation("DemandRequestFrm");
    navObj.navigate();
  } else {
    alert("Invalid username or password.");
  }
}

 });