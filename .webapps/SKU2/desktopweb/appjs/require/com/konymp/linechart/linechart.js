define(function() {
    return function(controller) {
        var linechart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "linechart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "linechart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "linechart"), extendConfig({}, controller.args[2], "linechart"));
        linechart.setDefaultUnit(voltmx.flex.DP);
        var lineChartBrowser = new voltmx.ui.Browser(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "lineChartBrowser",
            "isVisible": true,
            "left": 0,
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "chartist_line/lineChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lineChartBrowser"), extendConfig({}, controller.args[1], "lineChartBrowser"), extendConfig({}, controller.args[2], "lineChartBrowser"));
        linechart.add(lineChartBrowser);
        return linechart;
    }
})