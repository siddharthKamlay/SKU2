define("CopyFBoxProductline0g693a35b70844a", function() {
    return function(controller) {
        CopyFBoxProductline0g693a35b70844a = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0g693a35b70844a",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0d035211fab6944",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0g693a35b70844a.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
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
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
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
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
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
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0g693a35b70844a.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0g693a35b70844a;
    }
})