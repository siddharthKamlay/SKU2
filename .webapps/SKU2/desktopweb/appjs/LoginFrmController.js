define("userLoginFrmController", {
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
define("LoginFrmControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLogin **/
    AS_Button_je7479732d18461f8a986160b7b3c4c0: function AS_Button_je7479732d18461f8a986160b7b3c4c0(eventobject) {
        var self = this;
        return self.validateLoginAndNavigate.call(this);
    }
});
define("LoginFrmController", ["userLoginFrmController", "LoginFrmControllerActions"], function() {
    var controller = require("userLoginFrmController");
    var controllerActions = ["LoginFrmControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
