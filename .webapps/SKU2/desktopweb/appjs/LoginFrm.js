define("LoginFrm", function() {
    return function(controller) {
        function addWidgetsLoginFrm() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerlogo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "150dp",
                "id": "FlexContainerlogo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "12.45%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerlogo.setDefaultUnit(voltmx.flex.DP);
            var imgLogo = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgLogo",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "alphaleo.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerlogo.add(imgLogo);
            var lbl1 = new voltmx.ui.Label({
                "id": "lbl1",
                "isVisible": true,
                "left": "230dp",
                "skin": "CopydefLabel0a1a3e3b2909941",
                "text": "Alphaleo Technology Pvt. Ltd",
                "top": "58dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainerLogin = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "450dp",
                "id": "FlexContainerLogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "328dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0bb3b537c4e2445",
                "top": "270dp",
                "width": "51.98%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.setDefaultUnit(voltmx.flex.DP);
            var Label2 = new voltmx.ui.Label({
                "id": "Label2",
                "isVisible": true,
                "left": "43dp",
                "skin": "CopydefLabel0c66dd2f3c2fa43",
                "text": "Login to SKU Demand Dashboard",
                "top": "70dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtUsername = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "txtUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "198dp",
                "placeholder": "Username",
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "180dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var txtPassword = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "198dp",
                "placeholder": "Passsword",
                "secureTextEntry": true,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "260dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var btnLogin = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnLogin",
                "isVisible": true,
                "left": "198dp",
                "onClick": controller.AS_Button_je7479732d18461f8a986160b7b3c4c0,
                "skin": "CopydefBtnNormal0ccb5ff15ba0a42",
                "text": "Login",
                "top": "340dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.add(Label2, txtUsername, txtPassword, btnLogin);
            this.compInstData = {}
            this.add(FlexContainerlogo, lbl1, FlexContainerLogin);
        };
        return [{
            "addWidgets": addWidgetsLoginFrm,
            "enabledForIdleTimeout": false,
            "id": "LoginFrm",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d3a9ccf0f45e4e",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200, 1366, 1380],
            "appName": "SKU2",
            "info": {
                "kuid": "c1126366a5114e4ea37731546b425144"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});