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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer.setDefaultUnit(voltmx.flex.DP);
            var Label1 = new voltmx.ui.Label({
                "id": "Label1",
                "isVisible": true,
                "left": "69dp",
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
                "left": "69dp",
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
                "height": "20%",
                "id": "FlexContainerHeaders",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "140dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerHeaders.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0f33f26919d934e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61.11%",
                "id": "FlexContainer0f33f26919d934e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b47ed57bc2b749",
                "top": "37dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0f33f26919d934e.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0f33f26919d934e.add();
            var CopyFlexContainer0de1dbf6c79f442 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "61.52%",
                "id": "CopyFlexContainer0de1dbf6c79f442",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0e7b52cc062fe4b",
                "top": "37dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0de1dbf6c79f442.setDefaultUnit(voltmx.flex.DP);
            var Label0ce0ff3e12bf64b = new voltmx.ui.Label({
                "id": "Label0ce0ff3e12bf64b",
                "isVisible": true,
                "left": "59dp",
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
            CopyFlexContainer0de1dbf6c79f442.add(Label0ce0ff3e12bf64b);
            var CopyFlexContainer0a81cef57546647 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "62.73%",
                "id": "CopyFlexContainer0a81cef57546647",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0bebbbf6a9fc948",
                "top": "37dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0a81cef57546647.setDefaultUnit(voltmx.flex.DP);
            var Label0c53ac9ca64934a = new voltmx.ui.Label({
                "id": "Label0c53ac9ca64934a",
                "isVisible": true,
                "left": "58dp",
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
            CopyFlexContainer0a81cef57546647.add(Label0c53ac9ca64934a);
            var CopyFlexContainer0c5033b5aec0a42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60.22%",
                "id": "CopyFlexContainer0c5033b5aec0a42",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3.00%",
                "isModalContainer": false,
                "skin": "CopyslFbox0d77399fd11aa42",
                "top": "37dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0c5033b5aec0a42.setDefaultUnit(voltmx.flex.DP);
            var Label0b331aac8e10443 = new voltmx.ui.Label({
                "id": "Label0b331aac8e10443",
                "isVisible": true,
                "left": "59dp",
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
            CopyFlexContainer0c5033b5aec0a42.add(Label0b331aac8e10443);
            FlexContainerHeaders.add(FlexContainer0f33f26919d934e, CopyFlexContainer0de1dbf6c79f442, CopyFlexContainer0a81cef57546647, CopyFlexContainer0c5033b5aec0a42);
            var FlexSKUTable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "57.78%",
                "id": "FlexSKUTable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2.22%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0i2f208e36e0f41",
                "top": "38.89%",
                "width": "96.63%",
                "zIndex": 1,
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
                "left": "2.50%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "top": "0%",
                "width": "100%",
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
                "width": "10%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "width": "9.5%",
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
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9.5%",
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
                "width": "9.5%",
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
            flexDemandRequest.add(flexSKUID, flexName, flexCategory, flexStock, flexForecasted, flexEnrichedQTY, flexRequested, flexStatus, flexRequestedBY, flexRequestDate);
            voltmx.mvc.registry.add('CopyFBoxDemandRequest0c2c1c51673ed4d', 'CopyFBoxDemandRequest0c2c1c51673ed4d', 'CopyFBoxDemandRequest0c2c1c51673ed4dController');
            var segDemandRequest = new voltmx.ui.SegmentedUI2({
                "alternateRowSkin": "defDataPanelAlternateRowSkinDW0ccd9302b745549",
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "EnrichedQTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "RequestDate",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "RequestedBY",
                    "lblSKUID1": "SKUID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segDemandRequest",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "defDataPanelRowFocusSkin0bd1dff1eda834e",
                "rowSkin": "defDataPanelFlexBorderSkinDW0a2758320af6449",
                "rowTemplate": "CopyFBoxDemandRequest0c2c1c51673ed4d",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0i672f9ffb35a4b",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblCategory1": "lblCategory1",
                    "lblEnrichedQTY1": "lblEnrichedQTY1",
                    "lblForecasted1": "lblForecasted1",
                    "lblName1": "lblName1",
                    "lblRequestDate1": "lblRequestDate1",
                    "lblRequested1": "lblRequested1",
                    "lblRequestedBY1": "lblRequestedBY1",
                    "lblSKUID1": "lblSKUID1",
                    "lblStatus1": "lblStatus1",
                    "lblStock1": "lblStock1"
                },
                "width": "100%",
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
            var ListBoxStatus = new voltmx.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxStatus",
                "isVisible": true,
                "left": "800dp",
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
                "left": "1156dp",
                "skin": "CopydefBtnNormal0ie6f7de736d049",
                "text": "Reset all ",
                "top": "109dp",
                "width": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexSKUTable.add(flexHeaderDemandRequest, LabelID, LabelID1, TextFieldSearchBox, ListBoxCategories, ListBoxStatus, BtnReset);
            var Label0iaeda4e8763946 = new voltmx.ui.Label({
                "id": "Label0iaeda4e8763946",
                "isVisible": true,
                "left": "76dp",
                "skin": "defLabel",
                "text": "Total Requests",
                "top": "243dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            this.add(FlexContainer, FlexContainerHeaders, FlexSKUTable, Label0iaeda4e8763946);
        };
        return [{
            "addWidgets": addWidgetsSKUDemand,
            "enabledForIdleTimeout": false,
            "id": "SKUDemand",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
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