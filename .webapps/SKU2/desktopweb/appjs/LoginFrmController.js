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
    AS_Button_j552308d32b14fcea290030d1c202d4d: function AS_Button_j552308d32b14fcea290030d1c202d4d(eventobject) {
        var self = this;

        function INVOKE_IDENTITY_SERVICE_ide_onClick_bc659208af1740d2b572323035028348_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("Overview");
            ntf.navigate({
                "txtUsername_text": self.view.txtUsername.text,
                "_meta_": {
                    "eventName": "onClick",
                    "widgetId": "btnLogin"
                }
            });
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_bc659208af1740d2b572323035028348_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_d12cb9e412b348869c4e4f08967d23ee_Callback() {
                SHOW_ALERT_ide_onClick_d12cb9e412b348869c4e4f08967d23ee_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Login",
                "yesLabel": "Ok",
                "message": "Invalid Credentials.",
                "alertHandler": SHOW_ALERT_ide_onClick_d12cb9e412b348869c4e4f08967d23ee_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_ide_onClick_d12cb9e412b348869c4e4f08967d23ee_True() {}
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "LoginAuthentication$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.txtUsername.text;
        login_inputparam["password"] = self.view.txtPassword.text;
        LoginAuthentication$login = mfidentityserviceinvoker("LoginAuthentication", login_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_bc659208af1740d2b572323035028348_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_bc659208af1740d2b572323035028348_Failure);
    }
});
define("LoginFrmController", ["userLoginFrmController", "LoginFrmControllerActions"], function() {
    var controller = require("userLoginFrmController");
    var controllerActions = ["LoginFrmControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
