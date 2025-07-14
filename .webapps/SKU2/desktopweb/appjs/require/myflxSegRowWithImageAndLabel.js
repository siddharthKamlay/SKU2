define("myflxSegRowWithImageAndLabel", function() {
    return function(controller) {
        var myflxSegRowWithImageAndLabel = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "75dp",
            "id": "myflxSegRowWithImageAndLabel",
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
        myflxSegRowWithImageAndLabel.setDefaultUnit(voltmx.flex.DP);
        var imgMenuOption = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgMenuOption",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMenuOption = new voltmx.ui.Label({
            "centerY": "50.00%",
            "id": "lblMenuOption",
            "isVisible": true,
            "left": "10dp",
            "skin": "defLabel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Imgarrow = new voltmx.ui.Image2({
            "height": "40dp",
            "id": "Imgarrow",
            "isVisible": true,
            "left": "800dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        myflxSegRowWithImageAndLabel.add(imgMenuOption, lblMenuOption, Imgarrow);
        return myflxSegRowWithImageAndLabel;
    }
})