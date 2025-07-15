define("SKUDemand", function() {
    return function(controller) {
        function addWidgetsSKUDemand() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15%",
                "id": "FlexContainer",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "100dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "86.38%",
                "zIndex": 2,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer.setDefaultUnit(voltmx.flex.DP);
            var Label1 = new voltmx.ui.Label({
                "id": "Label1",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopydefLabel0e6472f5744614f",
                "text": "SKU DEMAND MANAGEMENT",
                "top": "37dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label2 = new voltmx.ui.Label({
                "id": "Label2",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopydefLabel0d3f2b59491324d",
                "text": "Manage and approve  demand requests across all SKUs",
                "top": "80dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer.add(Label1, Label2);
            var FlexContainerHeaders = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "15.56%",
                "id": "FlexContainerHeaders",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "80dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "135dp",
                "width": "100%",
                "zIndex": 2,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerHeaders.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0f33f26919d934e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.42%",
                "id": "FlexContainer0f33f26919d934e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3.00%",
                "isModalContainer": false,
                "skin": "slFboxPurple",
                "top": "20dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0f33f26919d934e.setDefaultUnit(voltmx.flex.DP);
            var Label00 = new voltmx.ui.Label({
                "id": "Label00",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LabelTotalRequests = new voltmx.ui.Label({
                "id": "LabelTotalRequests",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Total Requests",
                "top": "70dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0f33f26919d934e.add(Label00, LabelTotalRequests);
            var CopyFlexContainer0de1dbf6c79f442 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.42%",
                "id": "CopyFlexContainer0de1dbf6c79f442",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3.00%",
                "isModalContainer": false,
                "skin": "slFboxYellow",
                "top": "20dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0de1dbf6c79f442.setDefaultUnit(voltmx.flex.DP);
            var LabelPending = new voltmx.ui.Label({
                "id": "LabelPending",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Pending",
                "top": "73dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label01 = new voltmx.ui.Label({
                "id": "Label01",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0de1dbf6c79f442.add(LabelPending, Label01);
            var CopyFlexContainer0a81cef57546647 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.42%",
                "id": "CopyFlexContainer0a81cef57546647",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3.00%",
                "isModalContainer": false,
                "skin": "slFboxgreen",
                "top": "21dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0a81cef57546647.setDefaultUnit(voltmx.flex.DP);
            var LabelApproved = new voltmx.ui.Label({
                "id": "LabelApproved",
                "isVisible": true,
                "left": "19dp",
                "skin": "defLabel",
                "text": "Approved",
                "top": "73dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label03 = new voltmx.ui.Label({
                "id": "Label03",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0a81cef57546647.add(LabelApproved, Label03);
            var CopyFlexContainer0c5033b5aec0a42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80.42%",
                "id": "CopyFlexContainer0c5033b5aec0a42",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3.00%",
                "isModalContainer": false,
                "skin": "slFboxRed",
                "top": "20dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0c5033b5aec0a42.setDefaultUnit(voltmx.flex.DP);
            var labelRejected = new voltmx.ui.Label({
                "id": "labelRejected",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Rejected",
                "top": "71dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var label04 = new voltmx.ui.Label({
                "id": "label04",
                "isVisible": true,
                "left": "20dp",
                "skin": "defLabel",
                "text": "Label",
                "top": "15dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0c5033b5aec0a42.add(labelRejected, label04);
            FlexContainerHeaders.add(FlexContainer0f33f26919d934e, CopyFlexContainer0de1dbf6c79f442, CopyFlexContainer0a81cef57546647, CopyFlexContainer0c5033b5aec0a42);
            var FlexSKUTable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "57.78%",
                "id": "FlexSKUTable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "5.85%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0i2f208e36e0f41",
                "top": "38.83%",
                "width": "93.70%",
                "zIndex": 2,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexSKUTable.setDefaultUnit(voltmx.flex.DP);
            var flexHeaderDemandRequest = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60.00%",
                "id": "flexHeaderDemandRequest",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "-0.76%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "38.18%",
                "width": "95%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexHeaderDemandRequest.setDefaultUnit(voltmx.flex.DP);
            var flexDemandRequest = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flexDemandRequest",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "top": "0%",
                "width": "101.97%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexDemandRequest.setDefaultUnit(voltmx.flex.DP);
            var flexSKUID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexSKUID",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "5%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexSKUID.setDefaultUnit(voltmx.flex.DP);
            var lblSKUID = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblSKUID",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "SKUID",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexSKUID.add(lblSKUID);
            var flexName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexName.setDefaultUnit(voltmx.flex.DP);
            var lblName = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblName",
                "isVisible": true,
                "left": "0%",
                "onTouchEnd": controller.AS_Label_g98ccbb79b5c4fda802abb12822b0b9b,
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Name",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexName.add(lblName);
            var flexCategory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexCategory",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "7%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexCategory.setDefaultUnit(voltmx.flex.DP);
            var lblCategory = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblCategory",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Category",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexCategory.add(lblCategory);
            var flexStock = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexStock",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "5%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexStock.setDefaultUnit(voltmx.flex.DP);
            var lblStock = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblStock",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Stock",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexStock.add(lblStock);
            var flexForecasted = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexForecasted",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "6%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexForecasted.setDefaultUnit(voltmx.flex.DP);
            var lblForecasted = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblForecasted",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Forecasted",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexForecasted.add(lblForecasted);
            var flexEnrichedQTY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexEnrichedQTY",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexEnrichedQTY.setDefaultUnit(voltmx.flex.DP);
            var lblEnrichedQTY = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblEnrichedQTY",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "EnrichedQTY",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexEnrichedQTY.add(lblEnrichedQTY);
            var flexRequested = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequested",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequested.setDefaultUnit(voltmx.flex.DP);
            var lblRequested = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequested",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Requested",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequested.add(lblRequested);
            var flexStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexStatus.setDefaultUnit(voltmx.flex.DP);
            var lblStatus = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblStatus",
                "isVisible": true,
                "left": "0%",
                "skin": "lblStatusSkin0d1b3c7ffb10440",
                "text": "Status",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexStatus.add(lblStatus);
            var flexRequestedBY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequestedBY",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "10%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequestedBY.setDefaultUnit(voltmx.flex.DP);
            var lblRequestedBY = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequestedBY",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "RequestedBY",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequestedBY.add(lblRequestedBY);
            var flexRequestDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexRequestDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "10%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexRequestDate.setDefaultUnit(voltmx.flex.DP);
            var lblRequestDate = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblRequestDate",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "RequestDate",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexRequestDate.add(lblRequestDate);
            var flexApprovedDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexApprovedDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "10%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexApprovedDate.setDefaultUnit(voltmx.flex.DP);
            var lblApprovedDate = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblApprovedDate",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Approved Date",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexApprovedDate.add(lblApprovedDate);
            var flexActions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexActions",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexActions.setDefaultUnit(voltmx.flex.DP);
            var lblAtions = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblAtions",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Actions",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexActions.add(lblAtions);
            flexDemandRequest.add(flexSKUID, flexName, flexCategory, flexStock, flexForecasted, flexEnrichedQTY, flexRequested, flexStatus, flexRequestedBY, flexRequestDate, flexApprovedDate, flexActions);
            var segDemandRequest = new voltmx.ui.SegmentedUI2({
                "alternateRowSkin": "defDataPanelAlternateRowSkinDW0ccd9302b745549",
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }, {
                    "imgcross": "cross.jpg",
                    "imgeye": "eye.png",
                    "imgtick": "tick.png",
                    "lblApprovedDate": "Approved Date",
                    "lblCategory": "Category",
                    "lblEnrichedQTY": "Enriched QTY",
                    "lblForecasted": "Forecasted",
                    "lblName": "Name",
                    "lblRequestDate": "Requested date",
                    "lblRequested": "Requested",
                    "lblRequestedBY": "Requested By",
                    "lblSKUID": "SKU ID",
                    "lblStatus": "Status",
                    "lblStock": "Stock"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segDemandRequest",
                "isVisible": true,
                "left": "0.67%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "defDataPanelRowFocusSkin0bd1dff1eda834e",
                "rowSkin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "rowTemplate": "CopyFlex0ff43866586004c",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0i672f9ffb35a4b",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyFlex0ff43866586004c": "CopyFlex0ff43866586004c",
                    "imgcross": "imgcross",
                    "imgeye": "imgeye",
                    "imgtick": "imgtick",
                    "lblApprovedDate": "lblApprovedDate",
                    "lblCategory": "lblCategory",
                    "lblEnrichedQTY": "lblEnrichedQTY",
                    "lblForecasted": "lblForecasted",
                    "lblName": "lblName",
                    "lblRequestDate": "lblRequestDate",
                    "lblRequested": "lblRequested",
                    "lblRequestedBY": "lblRequestedBY",
                    "lblSKUID": "lblSKUID",
                    "lblStatus": "lblStatus",
                    "lblStock": "lblStock"
                },
                "width": "104.76%",
                "appName": "SKU2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeaderDemandRequest.add(flexDemandRequest, segDemandRequest);
            var LabelID = new voltmx.ui.Label({
                "id": "LabelID",
                "isVisible": true,
                "left": "31dp",
                "skin": "CopydefLabel0c9e00abaf49641",
                "text": "SKU Demand Requests",
                "top": "18dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LabelID1 = new voltmx.ui.Label({
                "id": "LabelID1",
                "isVisible": true,
                "left": "31dp",
                "skin": "CopydefLabel0e6dd4a9eb46b40",
                "text": "Detailed view of  all demand requests",
                "top": "62dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextFieldSearchBox = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextFieldSearchBox",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "31dp",
                "onTextChange": controller.AS_TextField_d001906d70c44fc2807c43c55b8d34a3,
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ffc21e68237640",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "108dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var ListBoxCategories = new voltmx.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxCategories",
                "isVisible": true,
                "left": "410dp",
                "masterData": [
                    ["All_Categories", "All Categories"],
                    ["Clothing", "Clothing"],
                    ["Home_Garden", "Home & Garden"],
                    ["Sports", "Sports"],
                    ["Books", "Books"],
                    ["Electronics", "Electronics"]
                ],
                "onSelection": controller.AS_ListBox_c9bd2ff52144480c955ead8257217004,
                "skin": "CopydefListBoxNormal0e2b722993c6543",
                "top": "110dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var ListBoxStatus = new voltmx.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxStatus",
                "isVisible": true,
                "left": "790dp",
                "masterData": [
                    ["All Status", "All Status"],
                    ["Approved", "Approved"],
                    ["Rejected", "Rejected"],
                    ["Pending", "Pending"]
                ],
                "onSelection": controller.AS_ListBox_c927ae555a8444ddb905c8a59c786e27,
                "skin": "CopydefListBoxNormal0d1b8af389ce64c",
                "top": "108dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var BtnReset = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "39dp",
                "id": "BtnReset",
                "isVisible": true,
                "left": "1120dp",
                "skin": "CopydefBtnNormal0ie6f7de736d049",
                "text": "Reset all ",
                "top": "108dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexSKUTable.add(flexHeaderDemandRequest, LabelID, LabelID1, TextFieldSearchBox, ListBoxCategories, ListBoxStatus, BtnReset);
            var FlexContainerslidemenu = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "900dp",
                "id": "FlexContainerslidemenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-180%",
                "isModalContainer": false,
                "skin": "CopyslFbox0gae0f93674bb43",
                "top": "0dp",
                "width": "12.34%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerslidemenu.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0j9c682737e714f = new voltmx.ui.Label({
                "id": "CopyLabel0j9c682737e714f",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0d01b683017a64e",
                "text": "Demand Planning",
                "top": "30dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label02 = new voltmx.ui.Label({
                "id": "Label02",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0j936dd23cb674a",
                "text": "Navigation",
                "top": "74dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0c2616b70466946 = new voltmx.ui.Label({
                "id": "CopyLabel0c2616b70466946",
                "isVisible": true,
                "left": "10dp",
                "onTouchEnd": controller.AS_Label_e3a9d7a2b54f40e8bccae785c869feae,
                "skin": "CopydefLabel0c85f7f3632f247",
                "text": "Overview",
                "top": "110dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0a138d2c742a340 = new voltmx.ui.Label({
                "id": "CopyLabel0a138d2c742a340",
                "isVisible": true,
                "left": "10dp",
                "onTouchEnd": controller.AS_Label_f70828358dce40018fdee062495dbbc7,
                "skin": "CopydefLabel0e6ade8a8c97c4d",
                "text": "S&OP",
                "top": "143dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label05 = new voltmx.ui.Label({
                "id": "Label05",
                "isVisible": true,
                "left": "10dp",
                "onTouchEnd": controller.AS_Label_ef28823a15424ff6b94cc4c23729f67a,
                "onTouchStart": controller.AS_Label_ad9133d4135c453f87290c089a74695a,
                "skin": "CopydefLabel0b193f12240ae46",
                "text": "SKU Demand",
                "top": "176dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainerslidemenu.add(CopyLabel0j9c682737e714f, Label02, CopyLabel0c2616b70466946, CopyLabel0a138d2c742a340, Label05);
            var Image0dc6e78981a6c4f = new voltmx.ui.Image2({
                "height": "81dp",
                "id": "Image0dc6e78981a6c4f",
                "isVisible": true,
                "left": "12dp",
                "skin": "slImage",
                "src": "menu.png",
                "top": "9dp",
                "width": "68dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
                "640": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                },
                "1024": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                },
                "1366": {
                    "flexHeaderDemandRequest": {
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {}
            this.add(FlexContainer, FlexContainerHeaders, FlexSKUTable, FlexContainerslidemenu, Image0dc6e78981a6c4f);
        };
        return [{
            "addWidgets": addWidgetsSKUDemand,
            "enabledForIdleTimeout": false,
            "id": "SKUDemand",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slFormSkinCommon",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2",
            "preShow": function(eventobject) {
                controller.AS_Form_c0dd210e25d54aff9eafc381b1dfe411(eventobject);
                voltmx.visualizer.syncComponentInstanceDataCache(eventobject);
            },
            "info": {
                "kuid": "bb67880847304d79ab85353202f9a604"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});