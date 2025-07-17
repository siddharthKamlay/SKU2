define(function() {
    return function(controller) {
        var verticalbarCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "verticalbarCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "verticalbarCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "verticalbarCopy"), extendConfig({}, controller.args[2], "verticalbarCopy"));
        verticalbarCopy.setDefaultUnit(voltmx.flex.DP);
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
                "URL": "CopyChart_vertical3/verticalBarChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "verticalBarBrowser"), extendConfig({}, controller.args[1], "verticalBarBrowser"), extendConfig({}, controller.args[2], "verticalBarBrowser"));
        verticalbarCopy.add(verticalBarBrowser);
        return verticalbarCopy;
    }
})