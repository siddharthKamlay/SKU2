define("LoginFrm", function() {
    return function(controller) {
        function addWidgetsLoginFrm() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerheader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20%",
                "id": "FlexContainerheader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f7646bc0d8a647",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerheader.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerlogo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainerlogo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyslFbox0h22d676da58b4a",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerlogo.setDefaultUnit(voltmx.flex.DP);
            var imgLogo = new voltmx.ui.Image2({
                "height": "98%",
                "id": "imgLogo",
                "isVisible": true,
                "left": 0,
                "skin": "CopyslImage0cc1d9251e8e74d",
                "src": "alphaleo.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerlogo.add(imgLogo);
            var lbl1 = new voltmx.ui.Label({
                "id": "lbl1",
                "isVisible": true,
                "left": "32%",
                "skin": "CopydefLabel0a1a3e3b2909941",
                "text": "SKU Demand Forecasting",
                "top": "58dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerheader.add(FlexContainerlogo, lbl1);
            var FlexContainerSidebar = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "81%",
                "id": "FlexContainerSidebar",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ee58cca90d7346",
                "top": "20%",
                "width": "42.99%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerSidebar.setDefaultUnit(voltmx.flex.DP);
            var ImageSku = new voltmx.ui.Image2({
                "height": "50%",
                "id": "ImageSku",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "demandforecast.png",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Lbl11 = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "Lbl11",
                "isVisible": true,
                "skin": "CopydefLabel0j52fb1de51bb41",
                "text": "Innovating Digital Soluttions for Smarter Business",
                "top": "424dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbl12 = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "lbl12",
                "isVisible": true,
                "skin": "CopydefLabel0eebe600ee96b4f",
                "text": "Empowering data - driven decisions with",
                "top": "470dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbl13 = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "lbl13",
                "isVisible": true,
                "skin": "CopydefLabel0e942550347b04c",
                "text": "precision demand forecasting",
                "top": "517dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0f91c1c7ceac847 = new voltmx.ui.Label({
                "centerX": "50.00%",
                "id": "Label0f91c1c7ceac847",
                "isVisible": true,
                "skin": "CopydefLabel0f20f86d5641e41",
                "text": "Plan Better - Sell Smarter",
                "top": "568dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerSidebar.add(ImageSku, Lbl11, lbl12, lbl13, Label0f91c1c7ceac847);
            var FlexContainerRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "81%",
                "id": "FlexContainerRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "43%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20%",
                "width": "57%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerRight.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerLogin = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "60%",
                "id": "FlexContainerLogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "right": "0",
                "skin": "CopyslFbox0bb3b537c4e2445",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.setDefaultUnit(voltmx.flex.DP);
            var Label2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Label2",
                "isVisible": true,
                "skin": "CopydefLabel0c66dd2f3c2fa43",
                "text": "Login Here",
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
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "50dp",
                "id": "txtUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "198dp",
                "placeholder": "Username",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0e8a605bab8aa4d",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "165dp",
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
                "centerX": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "50dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "198dp",
                "placeholder": "Passsword",
                "secureTextEntry": true,
                "skin": "CopydefTextBoxNormal0c105da9f690e4c",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "239dp",
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
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnLogin",
                "isVisible": true,
                "left": "198dp",
                "onClick": controller.AS_Button_j552308d32b14fcea290030d1c202d4d,
                "skin": "CopydefBtnNormal0ccb5ff15ba0a42",
                "text": "Login",
                "top": "317dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerLogin.add(Label2, txtUsername, txtPassword, btnLogin);
            FlexContainerRight.add(FlexContainerLogin);
            this.compInstData = {}
            this.add(FlexContainerheader, FlexContainerSidebar, FlexContainerRight);
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