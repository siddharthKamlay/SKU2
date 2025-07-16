define("Flex0f834108d4cc042", function() {
    return function(controller) {
        var Flex0f834108d4cc042 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "Flex0f834108d4cc042",
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
        Flex0f834108d4cc042.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "1dp",
            "skin": "CopydefLabel0aca9109f5b8a4d",
            "text": "SKU ID",
            "top": "22dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "8dp",
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
            "left": "24dp",
            "skin": "CopydefLabel0ac9dd36920e847",
            "text": "Category",
            "top": "20dp",
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "id": "lblStock1",
            "isVisible": true,
            "left": "29dp",
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
            "left": "31dp",
            "skin": "CopydefLabel0e9ecd4791be946",
            "text": "Forecasted",
            "top": "26dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "41dp",
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
            "left": "47dp",
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
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0fdef3af8f8ae47",
            "text": "Requested By",
            "top": "19dp",
            "width": "7%",
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
            "top": "26dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Image1 = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "Image1",
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
        var image2 = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "image2",
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
        var image3 = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "image3",
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
        Flex0f834108d4cc042.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, Image1, image2, image3);
        return Flex0f834108d4cc042;
    }
})