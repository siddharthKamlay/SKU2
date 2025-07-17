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

        function INVOKE_SERVICE_c3601d82e2dc438a972f872ed33c5b6a_Success(response) {
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

        function INVOKE_SERVICE_c3601d82e2dc438a972f872ed33c5b6a_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_fc6f5269753e48ab9ad8761e497dbb6c_Callback() {
                SHOW_ALERT_fc6f5269753e48ab9ad8761e497dbb6c_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_ERROR,
                "alertTitle": "Login",
                "yesLabel": "Ok",
                "message": "Invalid Credentials.",
                "alertHandler": SHOW_ALERT_fc6f5269753e48ab9ad8761e497dbb6c_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_fc6f5269753e48ab9ad8761e497dbb6c_True() {}
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "LoginAuthentication$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.txtUsername.text;
        login_inputparam["password"] = self.view.txtPassword.text;
        LoginAuthentication$login = mfidentityserviceinvoker("LoginAuthentication", login_inputparam, INVOKE_SERVICE_c3601d82e2dc438a972f872ed33c5b6a_Success, INVOKE_SERVICE_c3601d82e2dc438a972f872ed33c5b6a_Failure);
    }
});
define("LoginFrmController", ["userLoginFrmController", "LoginFrmControllerActions"], function() {
    var controller = require("userLoginFrmController");
    var controllerActions = ["LoginFrmControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
