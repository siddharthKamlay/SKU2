define("Overview", function() {
    return function(controller) {
        function addWidgetsOverview() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerPieChart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "29%",
                "id": "FlexContainerPieChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "67.50%",
                "isModalContainer": false,
                "skin": "CopyslFbox0e88f7dca09d544",
                "top": "17.50%",
                "width": "28.99%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerPieChart.setDefaultUnit(voltmx.flex.DP);
            var piechart = new com.konymp.piechart({
                "bottom": "0dp",
                "centerX": "50%",
                "height": "98.84%",
                "id": "piechart",
                "isVisible": true,
                "left": "0",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0",
                "skin": "sknComponentFlex",
                "top": "0dp",
                "width": "77.50%",
                "appName": "SKU2",
                "viewType": "piechart",
                "overrides": {
                    "piechart": {
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            piechart.chartTitle = "Pie Chart";
            piechart.enableLegend = true;
            piechart.bgColor = "#ffffff";
            piechart.chartData = {
                "data": [{
                    "colorCode": "#1B9ED9",
                    "label": "Data1",
                    "value": "40"
                }, {
                    "colorCode": "#E8672B",
                    "label": "Data2",
                    "value": "20"
                }, {
                    "colorCode": "#76C044",
                    "label": "Data3",
                    "value": "20"
                }, {
                    "colorCode": "#FFC522",
                    "label": "Data4",
                    "value": "10"
                }, {
                    "colorCode": "#97CDED",
                    "label": "Data5",
                    "value": "10"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label",
                    "columnHeaderType": "text",
                    "columnID": "label",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "c8434b6cbed443e6a6167d99e8c3bdcb"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "value",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "cddb65c1fe8c429bb5a4b5f93bd171ef"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Color Code",
                    "columnHeaderType": "text",
                    "columnID": "colorCode",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f722303b71a8439eae528d9af9856f30"
                }]
            };
            piechart.titleFontSize = "5";
            piechart.legendFontSize = "9";
            piechart.enableStaticPreview = true;
            piechart.titleFontColor = "#000000";
            piechart.legendFontColor = "#000000";
            FlexContainerPieChart.add(piechart);
            var FlexContainerchart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "29%",
                "id": "FlexContainerchart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9.53%",
                "isModalContainer": false,
                "skin": "CopyslFbox0eeb6273f1e3345",
                "top": "17.509999999999998%",
                "width": "41.30%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerchart.setDefaultUnit(voltmx.flex.DP);
            var verticalbar = new com.konymp.verticalbar({
                "height": "100%",
                "id": "verticalbar",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "appName": "SKU2",
                "viewType": "verticalbar",
                "overrides": {
                    "verticalbar": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            verticalbar.enableGrid = true;
            verticalbar.chartData = {
                "data": [{
                    "colorCode": "#1B9ED9",
                    "label": "Data1",
                    "value": "25"
                }, {
                    "colorCode": "#76C044",
                    "label": "Data2",
                    "value": "20"
                }, {
                    "colorCode": "#E8672B",
                    "label": "Data3",
                    "value": "10"
                }, {
                    "colorCode": "#464648",
                    "label": "Data4",
                    "value": "30"
                }, {
                    "colorCode": "#FFC522",
                    "label": "Data5",
                    "value": "40"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "value",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "adb02a6b13a046f4861d9d64ef0c34ee"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Color Code",
                    "columnHeaderType": "text",
                    "columnID": "colorCode",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f7ad02b6f3df4493bb1ef588ab70e008"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label",
                    "columnHeaderType": "text",
                    "columnID": "label",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "b59fe0cbc1394743a3214ea7583c0180"
                }]
            };
            verticalbar.chartTitle = "Vertical Bar";
            verticalbar.xAxisTitle = "x-axis";
            verticalbar.lowValue = "0";
            verticalbar.enableGridAnimation = true;
            verticalbar.titleFontSize = "12";
            verticalbar.yAxisTitle = "y-axis";
            verticalbar.titleFontColor = "#000000";
            verticalbar.highValue = "40";
            verticalbar.bgColor = "#ffffff";
            verticalbar.enableChartAnimation = true;
            verticalbar.enableStaticPreview = true;
            FlexContainerchart.add(verticalbar);
            var FlexContaineroverview = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "940dp",
                "id": "FlexContaineroverview",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-180%",
                "isModalContainer": false,
                "onTouchEnd": controller.AS_FlexContainer_dd612b19076045b582dae85ccc93faa6,
                "skin": "CopyslFbox0gae0f93674bb43",
                "top": "0dp",
                "width": "18.39%",
                "zIndex": 3,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContaineroverview.setDefaultUnit(voltmx.flex.DP);
            var Label01 = new voltmx.ui.Label({
                "id": "Label01",
                "isVisible": true,
                "left": "5dp",
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
            var Label03 = new voltmx.ui.Label({
                "id": "Label03",
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
            var Label04 = new voltmx.ui.Label({
                "id": "Label04",
                "isVisible": true,
                "left": "10dp",
                "onTouchEnd": controller.AS_Label_f70828358dce40018fdee062495dbbc7,
                "skin": "CopydefLabel0e6ade8a8c97c4d",
                "text": "S&OP",
                "top": "158dp",
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
                "onTouchEnd": controller.AS_Label_g8499c9129424cf09a17f7294d793cb8,
                "skin": "CopydefLabel0b193f12240ae46",
                "text": "SKU Demand",
                "top": "206dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContaineroverview.add(Label01, Label03, Label04, Label05);
            var FlexContainerHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "140dp",
                "id": "FlexContainerHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9.50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "87.23%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerHeader.setDefaultUnit(voltmx.flex.DP);
            var flxforecast = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "110dp",
                "id": "flxforecast",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0cf69183343c84b",
                "top": "20dp",
                "width": "20.83%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flxforecast.setDefaultUnit(voltmx.flex.DP);
            var lbl1 = new voltmx.ui.Label({
                "centerX": "49.81%",
                "id": "lbl1",
                "isVisible": true,
                "skin": "CopydefLabel0dff0a512056e4a",
                "text": "Forecast Accuracy",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbl2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "lbl2",
                "isVisible": true,
                "skin": "CopydefLabel0aaae496075d949",
                "text": " 94.2%  ",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbl3 = new voltmx.ui.Label({
                "centerX": "46.67%",
                "id": "lbl3",
                "isVisible": true,
                "skin": "CopydefLabel0e37d99e471f945",
                "text": "+2.1% from last month",
                "top": "6dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxforecast.add(lbl1, lbl2, lbl3);
            var flxsuppy = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "110dp",
                "id": "flxsuppy",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24.690497096226004%",
                "isModalContainer": false,
                "skin": "CopyslFbox0j5389f56cd2449",
                "top": "20dp",
                "width": "22.53%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flxsuppy.setDefaultUnit(voltmx.flex.DP);
            var Copylbl01 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl01",
                "isVisible": true,
                "skin": "CopydefLabel0dff0a512056e4a",
                "text": "Supply Variance",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl02 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl02",
                "isVisible": true,
                "skin": "CopydefLabel0aaae496075d949",
                "text": "8.7%",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl03 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl03",
                "isVisible": true,
                "skin": "CopydefLabel0e37d99e471f945",
                "text": "-1.3% from last month",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxsuppy.add(Copylbl01, Copylbl02, Copylbl03);
            var flxinventory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "110dp",
                "id": "flxinventory",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "51.080741880468985%",
                "isModalContainer": false,
                "skin": "CopyslFbox0c3f8ae40a95946",
                "top": "20dp",
                "width": "22.53%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flxinventory.setDefaultUnit(voltmx.flex.DP);
            var Copylbl1 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl1",
                "isVisible": true,
                "skin": "CopydefLabel0dff0a512056e4a",
                "text": "Inventory Turnover ",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl2 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl2",
                "isVisible": true,
                "skin": "CopydefLabel0aaae496075d949",
                "text": "12.4x",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl3 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl3",
                "isVisible": true,
                "skin": "CopydefLabel0e37d99e471f945",
                "text": " +0.8x from last month",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxinventory.add(Copylbl1, Copylbl2, Copylbl3);
            var flxstock = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "110dp",
                "id": "flxstock",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "77.47098666471196%",
                "isModalContainer": false,
                "skin": "CopyslFbox0b1e93838bc484a",
                "top": "20dp",
                "width": "22.53%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flxstock.setDefaultUnit(voltmx.flex.DP);
            var Copylbl04 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl04",
                "isVisible": true,
                "skin": "CopydefLabel0dff0a512056e4a",
                "text": "Stockout Risk ",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl05 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl05",
                "isVisible": true,
                "skin": "CopydefLabel0aaae496075d949",
                "text": "3.2% ",
                "top": "10dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Copylbl06 = new voltmx.ui.Label({
                "centerX": "50%",
                "id": "Copylbl06",
                "isVisible": true,
                "skin": "CopydefLabel0e37d99e471f945",
                "text": " -0.5% from last month",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxstock.add(Copylbl04, Copylbl05, Copylbl06);
            FlexContainerHeader.add(flxforecast, flxsuppy, flxinventory, flxstock);
            var FlexSKUTable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "51.15%",
                "id": "FlexSKUTable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "9.52%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0i2f208e36e0f41",
                "top": "49.99%",
                "width": "87.27%",
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
                "width": "103.97%",
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
                "width": "12%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexName.setDefaultUnit(voltmx.flex.DP);
            var lblName = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblName",
                "isVisible": true,
                "left": "1%",
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
                "left": "2.50%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "8%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexCategory.setDefaultUnit(voltmx.flex.DP);
            var lblCategory = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblCategory",
                "isVisible": true,
                "left": "2.50%",
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
                "left": "3%",
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
                "left": "3%",
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
                "width": "7%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexForecasted.setDefaultUnit(voltmx.flex.DP);
            var lblForecasted = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblForecasted",
                "isVisible": true,
                "left": "1%",
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
                "left": "0.50%",
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
                "left": "0.50%",
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
                "left": "1.50%",
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
                "left": "1.50%",
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
                "width": "10%",
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
                "left": "1%",
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
                "left": "1%",
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
                "left": "-1%",
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
                "left": "-1%",
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
            var flexApproved = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexApproved",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "-1%",
                "isModalContainer": false,
                "skin": "slFbox0c447e39f18754f",
                "top": "0%",
                "width": "9%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexApproved.setDefaultUnit(voltmx.flex.DP);
            var lblApproveddate = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblApproveddate",
                "isVisible": true,
                "left": "-1%",
                "skin": "defDataPanelLabelNormalSkinDW0c7b20c06c3214b",
                "text": "Approved Date",
                "top": "0%",
                "width": "101.37%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexApproved.add(lblApproveddate);
            flexDemandRequest.add(flexSKUID, flexName, flexCategory, flexStock, flexForecasted, flexEnrichedQTY, flexRequested, flexStatus, flexRequestedBY, flexRequestDate, flexApproved);
            var segDemandRequest = new voltmx.ui.SegmentedUI2({
                "alternateRowSkin": "defDataPanelAlternateRowSkinDW0ccd9302b745549",
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
                }, {
                    "lblApprovedDate1": "Approved Date",
                    "lblCategory1": "Category",
                    "lblEnrichedQTY1": "Enriched QTY",
                    "lblForecasted1": "Forecasted",
                    "lblName1": "Name",
                    "lblRequestDate1": "Requested date",
                    "lblRequested1": "Requested",
                    "lblRequestedBY1": "Requested By",
                    "lblSKUID1": "SKU ID",
                    "lblStatus1": "Status",
                    "lblStock1": "Stock"
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
                "rowTemplate": "Flex0f834108d4cc042",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0i672f9ffb35a4b",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Flex0f834108d4cc042": "Flex0f834108d4cc042",
                    "lblApprovedDate1": "lblApprovedDate1",
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
                "left": "2%",
                "skin": "CopydefLabel0c9e00abaf49641",
                "text": "Recent SKU Demand Requests",
                "top": "2%",
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
                "left": "2%",
                "skin": "CopydefLabel0e6dd4a9eb46b40",
                "text": "Overview of  latest demand requests across all SKUs",
                "top": "11%",
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
                "left": "2%",
                "onTextChange": controller.AS_TextField_i399824987dc42e28a801263c10a9da3,
                "placeholder": "Search",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0ffc21e68237640",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "21%",
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
                "left": "37%",
                "masterData": [
                    ["All_Categories", "All Categories"],
                    ["Clothing", "Clothing"],
                    ["Home_Garden", "Home & Garden"],
                    ["Sports", "Sports"],
                    ["Books", "Books"],
                    ["Electronics", "Electronics"]
                ],
                "onSelection": controller.AS_ListBox_cdfff7a0ec2b49099a32bd66ab80db6c,
                "skin": "CopydefListBoxNormal0e2b722993c6543",
                "top": "21%",
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
                "left": "72%",
                "masterData": [
                    ["All Status", "All Status"],
                    ["Approved", "Approved"],
                    ["Rejected", "Rejected"],
                    ["Pending", "Pending"]
                ],
                "onSelection": controller.AS_ListBox_e142ea5b752e4766817f055209389d11,
                "skin": "CopydefListBoxNormal0d1b8af389ce64c",
                "top": "21%",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            FlexSKUTable.add(flexHeaderDemandRequest, LabelID, LabelID1, TextFieldSearchBox, ListBoxCategories, ListBoxStatus);
            var Bars = new voltmx.ui.Label({
                "id": "Bars",
                "isVisible": true,
                "left": "2%",
                "onTouchEnd": controller.AS_Label_ccb1f37491fa443d8857b72030ce776a,
                "skin": "CopyslFontAwesomeIcon0a2a3d24700e048",
                "text": "",
                "top": "4%",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1380,
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
            this.compInstData = {
                "piechart": {
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerY": ""
                },
                "verticalbar": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                }
            }
            this.add(FlexContainerPieChart, FlexContainerchart, FlexContaineroverview, FlexContainerHeader, FlexSKUTable, Bars);
        };
        return [{
            "addWidgets": addWidgetsOverview,
            "enabledForIdleTimeout": false,
            "id": "Overview",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g59a2ef8557045418e7aecff9e8b333b(eventobject);
                controller.AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07(eventobject);
                voltmx.visualizer.syncComponentInstanceDataCache(eventobject);
            },
            "skin": "CopyslForm0je5baca4810942",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200, 1366, 1380],
            "appName": "SKU2",
            "info": {
                "kuid": "a1716dc115ec46f7b708dd80999458a8"
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