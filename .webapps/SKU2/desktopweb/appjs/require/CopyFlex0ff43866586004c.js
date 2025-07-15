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
        var lblSKUID = new voltmx.ui.Label({
            "id": "lblSKUID",
            "isVisible": true,
            "left": "1dp",
            "skin": "CopydefLabel0aca9109f5b8a4d",
            "text": "SKU ID",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName = new voltmx.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopydefLabel0b82dc6acc4fb45",
            "text": "Name",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCategory = new voltmx.ui.Label({
            "id": "lblCategory",
            "isVisible": true,
            "left": "34dp",
            "skin": "CopydefLabel0ac9dd36920e847",
            "text": "Category",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStock = new voltmx.ui.Label({
            "id": "lblStock",
            "isVisible": true,
            "left": "39dp",
            "skin": "CopydefLabel0c26aec5fbc0740",
            "text": "Stock",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblForecasted = new voltmx.ui.Label({
            "id": "lblForecasted",
            "isVisible": true,
            "left": "36dp",
            "skin": "CopydefLabel0e9ecd4791be946",
            "text": "Forecasted",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY = new voltmx.ui.Label({
            "id": "lblEnrichedQTY",
            "isVisible": true,
            "left": "36dp",
            "skin": "CopydefLabel0cf619ed0268645",
            "text": "Enriched QTY",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequested = new voltmx.ui.Label({
            "id": "lblRequested",
            "isVisible": true,
            "left": "33dp",
            "skin": "CopydefLabel0cc7e8040462441",
            "text": "Requested",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStatus = new voltmx.ui.Label({
            "id": "lblStatus",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0cfa912c41e194a",
            "text": "Status",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY = new voltmx.ui.Label({
            "id": "lblRequestedBY",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0fdef3af8f8ae47",
            "text": "Requested By",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestDate = new voltmx.ui.Label({
            "id": "lblRequestDate",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Requested date",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate = new voltmx.ui.Label({
            "id": "lblApprovedDate",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Approved Date",
            "top": "26dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
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
        CopyFlex0ff43866586004c.add(lblSKUID, lblName, lblCategory, lblStock, lblForecasted, lblEnrichedQTY, lblRequested, lblStatus, lblRequestedBY, lblRequestDate, lblApprovedDate, imgeye, imgtick, imgcross);
        return CopyFlex0ff43866586004c;
    }
})