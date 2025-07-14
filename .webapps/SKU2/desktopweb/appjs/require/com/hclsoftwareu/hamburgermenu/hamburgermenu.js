define(function() {
    return function(controller) {
        var hamburgermenu = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "hamburgermenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0e00d83b5950546",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2"
        }, controller.args[0], "hamburgermenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "hamburgermenu"), extendConfig({}, controller.args[2], "hamburgermenu"));
        hamburgermenu.setDefaultUnit(voltmx.flex.DP);
        var FlexTitle = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "150dp",
            "id": "FlexTitle",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SKU2"
        }, controller.args[0], "FlexTitle"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexTitle"), extendConfig({}, controller.args[2], "FlexTitle"));
        FlexTitle.setDefaultUnit(voltmx.flex.DP);
        var Labeloverview = new voltmx.ui.Label(extendConfig({
            "height": "100.33%",
            "id": "Labeloverview",
            "isVisible": true,
            "left": "0dp",
            "right": "50%",
            "skin": "defLabel",
            "text": "   Demand Planning",
            "top": "0dp",
            "width": "90.58%",
            "zIndex": 2
        }, controller.args[0], "Labeloverview"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Labeloverview"), extendConfig({}, controller.args[2], "Labeloverview"));
        var sublabel = new voltmx.ui.Label(extendConfig({
            "centerX": "46.66%",
            "id": "sublabel",
            "isVisible": true,
            "skin": "defLabel",
            "text": "Intelligent forecasting",
            "top": "114dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "sublabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "sublabel"), extendConfig({}, controller.args[2], "sublabel"));
        FlexTitle.add(Labeloverview, sublabel);
        var segMenu = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "data": [{
                "Imgarrow": "arrow.png",
                "imgMenuOption": "overview.png",
                "lblMenuOption": "Overview"
            }, {
                "Imgarrow": "arrow.png",
                "imgMenuOption": "sop.png",
                "lblMenuOption": "SOP        "
            }],
            "groupCells": false,
            "height": "97.78%",
            "id": "segMenu",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "sknseg",
            "rowTemplate": "myflxSegRowWithImageAndLabel",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "170dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "Imgarrow": "Imgarrow",
                "imgMenuOption": "imgMenuOption",
                "lblMenuOption": "lblMenuOption",
                "myflxSegRowWithImageAndLabel": "myflxSegRowWithImageAndLabel"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SKU2"
        }, controller.args[0], "segMenu"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenu"), extendConfig({}, controller.args[2], "segMenu"));
        hamburgermenu.add(FlexTitle, segMenu);
        return hamburgermenu;
    }
})