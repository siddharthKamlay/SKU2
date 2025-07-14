define(function() {
    return function(controller) {
        var piechart = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "piechart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknComponentFlex",
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "piechart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "piechart"), extendConfig({}, controller.args[2], "piechart"));
        piechart.setDefaultUnit(voltmx.flex.DP);
        var PieBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "PieBrowser",
            "isVisible": true,
            "left": "1dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_pie/Pie_chartistChart.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "PieBrowser"), extendConfig({}, controller.args[1], "PieBrowser"), extendConfig({}, controller.args[2], "PieBrowser"));
        piechart.add(PieBrowser);
        return piechart;
    }
})