define(function() {
    return function(controller) {
        var verticalbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "verticalbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "verticalbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "verticalbar"), extendConfig({}, controller.args[2], "verticalbar"));
        verticalbar.setDefaultUnit(voltmx.flex.DP);
        var verticalBarBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "verticalBarBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_vertical/verticalBarChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "verticalBarBrowser"), extendConfig({}, controller.args[1], "verticalBarBrowser"), extendConfig({}, controller.args[2], "verticalBarBrowser"));
        verticalbar.add(verticalBarBrowser);
        return verticalbar;
    }
})