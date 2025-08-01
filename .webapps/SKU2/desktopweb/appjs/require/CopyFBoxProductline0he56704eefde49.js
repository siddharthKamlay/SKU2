define("CopyFBoxProductline0he56704eefde49", function() {
    return function(controller) {
        CopyFBoxProductline0he56704eefde49 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0he56704eefde49",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0fc45f1947b9841",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0he56704eefde49.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "ProductLine",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForcasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForcasted1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Forcasted",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblActual1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblActual1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Actual",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblVariance1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblVariance1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0he56704eefde49.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0he56704eefde49;
    }
})