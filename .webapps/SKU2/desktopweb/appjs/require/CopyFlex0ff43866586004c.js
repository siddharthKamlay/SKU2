define("CopyFlex0ff43866586004c", function() {
    return function(controller) {
        var CopyFlex0ff43866586004c = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "CopyFlex0ff43866586004c",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFlex0ff43866586004c.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "7dp",
            "skin": "CopydefLabel0aca9109f5b8a4d",
            "text": "SKU ID",
            "top": "22dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopydefLabel0b82dc6acc4fb45",
            "text": "Name",
            "top": "20dp",
            "width": "12%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCategory1 = new voltmx.ui.Label({
            "id": "lblCategory1",
            "isVisible": true,
            "left": "34dp",
            "skin": "CopydefLabel0ac9dd36920e847",
            "text": "Category",
            "top": "21dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "id": "lblStock1",
            "isVisible": true,
            "left": "32dp",
            "skin": "CopydefLabel0c26aec5fbc0740",
            "text": "Stock",
            "top": "26dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblForecasted1 = new voltmx.ui.Label({
            "id": "lblForecasted1",
            "isVisible": true,
            "left": "27dp",
            "skin": "CopydefLabel0e9ecd4791be946",
            "text": "Forecasted",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "35dp",
            "skin": "CopydefLabel0cf619ed0268645",
            "text": "Enriched QTY",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequested1 = new voltmx.ui.Label({
            "id": "lblRequested1",
            "isVisible": true,
            "left": "33dp",
            "skin": "CopydefLabel0cc7e8040462441",
            "text": "Requested",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStatus1 = new voltmx.ui.Label({
            "id": "lblStatus1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0cfa912c41e194a",
            "text": "Status",
            "top": "26dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "26dp",
            "skin": "CopydefLabel0fdef3af8f8ae47",
            "text": "Requested By",
            "top": "19dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestDate1 = new voltmx.ui.Label({
            "id": "lblRequestDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Requested date",
            "top": "18dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate1 = new voltmx.ui.Label({
            "id": "lblApprovedDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Approved Date",
            "top": "19dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgeye = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgeye",
            "isVisible": true,
            "left": "14dp",
            "skin": "slImage",
            "src": "eye.png",
            "top": "19dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgtick = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgtick",
            "isVisible": true,
            "left": "-2dp",
            "skin": "slImage",
            "src": "tick.png",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgcross = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgcross",
            "isVisible": true,
            "left": "-3dp",
            "skin": "slImage",
            "src": "cross.jpg",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlex0ff43866586004c.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, lblApprovedDate1, imgeye, imgtick, imgcross);
        return CopyFlex0ff43866586004c;
    }
})