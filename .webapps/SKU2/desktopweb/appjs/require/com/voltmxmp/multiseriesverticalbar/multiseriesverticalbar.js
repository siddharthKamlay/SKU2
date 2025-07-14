define(function() {
    return function(controller) {
        var multiseriesverticalbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "multiseriesverticalbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox1",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2"
        }, controller.args[0], "multiseriesverticalbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "multiseriesverticalbar"), extendConfig({}, controller.args[2], "multiseriesverticalbar"));
        multiseriesverticalbar.setDefaultUnit(voltmx.flex.DP);
        var multiSeriesHbarBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": false,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "multiSeriesHbarBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "chartist_MultiseriesVbar/multiseriesVbar.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "multiSeriesHbarBrowser"), extendConfig({}, controller.args[1], "multiSeriesHbarBrowser"), extendConfig({}, controller.args[2], "multiSeriesHbarBrowser"));
        multiseriesverticalbar.add(multiSeriesHbarBrowser);
        multiseriesverticalbar.compInstData = {}
        return multiseriesverticalbar;
    }
})