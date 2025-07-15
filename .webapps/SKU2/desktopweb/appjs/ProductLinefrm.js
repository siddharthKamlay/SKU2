define("ProductLinefrm", function() {
    return function(controller) {
        function addWidgetsProductLinefrm() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainertable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "370dp",
                "id": "FlexContainertable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "120dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0b75c50fb9d0e41",
                "top": "520dp",
                "width": "87.13%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainertable.setDefaultUnit(voltmx.flex.DP);
            var flexHeaderProductline = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "76.09%",
                "id": "flexHeaderProductline",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0.02%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0dfa9b4121ade47",
                "top": "23.91%",
                "width": "100.03%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexHeaderProductline.setDefaultUnit(voltmx.flex.DP);
            var flexProductline = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flexProductline",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "defDataPanelFlexBorderSkinDW0d99447afab9340",
                "top": "0%",
                "width": "100%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexProductline.setDefaultUnit(voltmx.flex.DP);
            var flexProductLine1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexProductLine1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0dfa9b4121ade47",
                "top": "0%",
                "width": "25%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexProductLine1.setDefaultUnit(voltmx.flex.DP);
            var lblProductLine = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblProductLine",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0f236c797f91642",
                "text": "ProductLine",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexProductLine1.add(lblProductLine);
            var flexForcasted = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexForcasted",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0dfa9b4121ade47",
                "top": "0%",
                "width": "24.5%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexForcasted.setDefaultUnit(voltmx.flex.DP);
            var lblForcasted = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblForcasted",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0f236c797f91642",
                "text": "Forcasted",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexForcasted.add(lblForcasted);
            var flexActual = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexActual",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0dfa9b4121ade47",
                "top": "0%",
                "width": "24.5%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexActual.setDefaultUnit(voltmx.flex.DP);
            var lblActual = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblActual",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0f236c797f91642",
                "text": "Actual",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexActual.add(lblActual);
            var flexVariance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flexVariance",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox0dfa9b4121ade47",
                "top": "0%",
                "width": "24.5%",
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            flexVariance.setDefaultUnit(voltmx.flex.DP);
            var lblVariance = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblVariance",
                "isVisible": true,
                "left": "0%",
                "skin": "defDataPanelLabelNormalSkinDW0f236c797f91642",
                "text": "Variance",
                "top": "0%",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexVariance.add(lblVariance);
            flexProductline.add(flexProductLine1, flexForcasted, flexActual, flexVariance);
            voltmx.mvc.registry.add('CopyFBoxProductline0g693a35b70844a', 'CopyFBoxProductline0g693a35b70844a', 'CopyFBoxProductline0g693a35b70844aController');
            var segProductline = new voltmx.ui.SegmentedUI2({
                "alternateRowSkin": "defDataPanelAlternateRowSkinDW0da01a77efa2e4a",
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }, {
                    "lblActual1": "Actual",
                    "lblForcasted1": "Forcasted",
                    "lblProductLine1": "ProductLine",
                    "lblVariance1": "Variance"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segProductline",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "defDataPanelRowFocusSkin0f23f1eafa9e942",
                "rowSkin": "defDataPanelFlexBorderSkinDW0d99447afab9340",
                "rowTemplate": "CopyFBoxProductline0g693a35b70844a",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0be63ae0797a143",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblActual1": "lblActual1",
                    "lblForcasted1": "lblForcasted1",
                    "lblProductLine1": "lblProductLine1",
                    "lblVariance1": "lblVariance1"
                },
                "width": "100%",
                "appName": "SKU2"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeaderProductline.add(flexProductline, segProductline);
            var Label1 = new voltmx.ui.Label({
                "id": "Label1",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0e19d9397d5b44d",
                "text": "Product Line Comparision",
                "top": "14dp",
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
                "left": "10dp",
                "skin": "CopydefLabel0eadcb933c28e4a",
                "text": "Detailed comparison of  forecasted vs actual values",
                "top": "58dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainertable.add(flexHeaderProductline, Label1, Label2);
            var FlexChart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "321dp",
                "id": "FlexChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "690dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "160dp",
                "width": "45.39%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexChart.setDefaultUnit(voltmx.flex.DP);
            var barchart = new com.voltmxmp.multiseriesverticalbar({
                "height": "100%",
                "id": "barchart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0i9ba5738169540",
                "top": "0dp",
                "width": "100%",
                "appName": "SKU2",
                "viewType": "barchart",
                "overrides": {
                    "multiseriesverticalbar": {
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
            barchart.enableGrid = true;
            barchart.chartData = {
                "data": [{
                    "label": "d1",
                    "value1": "25",
                    "value2": "12",
                    "value3": "8",
                    "value4": "32",
                    "value5": "5"
                }, {
                    "label": "d2",
                    "value1": "12",
                    "value2": "32",
                    "value3": "36",
                    "value4": "10",
                    "value5": "22"
                }, {
                    "label": "d3",
                    "value1": "22",
                    "value2": "3",
                    "value3": "15",
                    "value4": "8",
                    "value5": "24"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label",
                    "columnHeaderType": "text",
                    "columnID": "label",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "adb02a6b13a046f4861d9d64ef0c34ee"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value1",
                    "columnHeaderType": "text",
                    "columnID": "value1",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f7ad02b6f3df4493bb1ef588ab70e008"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value2",
                    "columnHeaderType": "text",
                    "columnID": "value2",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "b59fe0cbc1394743a3214ea7583c0180"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value3",
                    "columnHeaderType": "text",
                    "columnID": "value3",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "d9cae0e9fe1548b0becf2dac23f4ceef"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value4",
                    "columnHeaderType": "text",
                    "columnID": "value4",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f03e4f1fe95c4dd4b6f8e6f3d7629bd9"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value5",
                    "columnHeaderType": "text",
                    "columnID": "value5",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "bb532b4caa214aabb1f9e17780f59200"
                }]
            };
            barchart.chartTitle = "Vertical Bars";
            barchart.indicatorFontColor = "#000000";
            barchart.barDetails = {
                "data": [{
                    "color": "#1B9ED9",
                    "legendName": "blue"
                }, {
                    "color": "#76C044",
                    "legendName": "green"
                }, {
                    "color": "#F26B29",
                    "legendName": "orange"
                }, {
                    "color": "#464648",
                    "legendName": "black"
                }, {
                    "color": "#FFC522",
                    "legendName": "yellow"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Legend Name",
                    "columnHeaderType": "text",
                    "columnID": "legendName",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f6de75a55e614f8385befc3ec254a1bd"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Color Code",
                    "columnHeaderType": "text",
                    "columnID": "color",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "g50365d432034b0a92c5a5cd4b07d1c7"
                }]
            };
            barchart.xAxisTitle = "x-axis";
            barchart.lowValue = "0";
            barchart.highValue = "16000";
            barchart.bgColor = "#FFFFFF";
            barchart.enableChartAnimation = true;
            barchart.enableLegends = true;
            barchart.yAxisTitle = "y-axis";
            barchart.titleFontSize = "12";
            barchart.indicatorFontSize = "8";
            barchart.legendFontSize = "95%";
            barchart.enableStaticPreview = true;
            barchart.titleFontColor = "#000000";
            barchart.legendFontColor = "#000000";
            FlexChart.add(barchart);
            var FlexContainerLinechart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "35.19%",
                "id": "FlexContainerLinechart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "120dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0j91f9d0a0ef540",
                "top": "170dp",
                "width": "38.80%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerLinechart.setDefaultUnit(voltmx.flex.DP);
            var linechart = new com.konymp.linechart({
                "height": "104.10%",
                "id": "linechart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-10dp",
                "width": "100.42%",
                "appName": "SKU2",
                "viewType": "linechart",
                "overrides": {
                    "linechart": {
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
            linechart.chartTitle = "Line Chart";
            linechart.chartData = {
                "data": [{
                    "dataVal": "9",
                    "lblName": "data1"
                }, {
                    "dataVal": "2",
                    "lblName": "data2"
                }, {
                    "dataVal": "5",
                    "lblName": "data3"
                }, {
                    "dataVal": "12",
                    "lblName": "data4"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label Name",
                    "columnHeaderType": "text",
                    "columnID": "lblName",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f1a80a1c509a45d0ad84b3097d1e8cb7"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "dataVal",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "c4dc7111a5f24c0da4cf8236ddad5233"
                }]
            };
            linechart.enableGrid = true;
            linechart.xAxisTitle = "x-axis";
            linechart.yAxisTitle = "y-axis";
            linechart.lowValue = "0";
            linechart.titleFontColor = "#000000";
            linechart.enableGridAnimation = true;
            linechart.titleFontSize = "12";
            linechart.highValue = "40";
            linechart.lineColor = "#1B9ED9";
            linechart.bgColor = "#FFFFFF";
            linechart.enableChartAnimation = true;
            linechart.enableStaticPreview = true;
            FlexContainerLinechart.add(linechart);
            var FlexContainerHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "120dp",
                "id": "FlexContainerHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "120dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "87.09%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerHeader.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "FlexContainer1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0acf09a4b32db44",
                "top": "16dp",
                "width": "28.57%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer1.setDefaultUnit(voltmx.flex.DP);
            var Label01 = new voltmx.ui.Label({
                "id": "Label01",
                "isVisible": true,
                "left": "90dp",
                "skin": "defLabel",
                "text": "Alignment %",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label001 = new voltmx.ui.Label({
                "id": "Label001",
                "isVisible": true,
                "left": "133dp",
                "skin": "defLabel",
                "text": "99.4%",
                "top": "56dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer1.add(Label01, Label001);
            var CopyFlexContainer1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "CopyFlexContainer1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "433dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0gf74b9b5ca0e48",
                "top": "16dp",
                "width": "28.57%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer1.setDefaultUnit(voltmx.flex.DP);
            var Label02 = new voltmx.ui.Label({
                "id": "Label02",
                "isVisible": true,
                "left": "80dp",
                "skin": "defLabel",
                "text": "Revenue Gap",
                "top": "9dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label002 = new voltmx.ui.Label({
                "id": "Label002",
                "isVisible": true,
                "left": "142dp",
                "skin": "defLabel",
                "text": "$-0k",
                "top": "53dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer1.add(Label02, Label002);
            var CopyFlexContainer2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "CopyFlexContainer2",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "850dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0fd3e435713e548",
                "top": "16dp",
                "width": "28.57%",
                "zIndex": 1,
                "appName": "SKU2"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer2.setDefaultUnit(voltmx.flex.DP);
            var Label03 = new voltmx.ui.Label({
                "id": "Label03",
                "isVisible": true,
                "left": "80dp",
                "skin": "defLabel",
                "text": "Service Level",
                "top": "9dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer2.add(Label03);
            FlexContainerHeader.add(FlexContainer1, CopyFlexContainer1, CopyFlexContainer2);
            var Label003 = new voltmx.ui.Label({
                "id": "Label003",
                "isVisible": true,
                "left": "1058dp",
                "skin": "defLabel",
                "text": "92.5%",
                "top": "79dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Imagemenu = new voltmx.ui.Image2({
                "height": "77dp",
                "id": "Imagemenu",
                "isVisible": true,
                "left": "12dp",
                "onTouchEnd": controller.AS_Image_c07533c757414f3d8cf76a373f585070,
                "skin": "slImage",
                "src": "menu.png",
                "top": "31dp",
                "width": "90dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxcontainerslidemenu = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "900dp",
                "id": "flxcontainerslidemenu",
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
            flxcontainerslidemenu.setDefaultUnit(voltmx.flex.DP);
            var CopyLabel0cea9eb96dd2045 = new voltmx.ui.Label({
                "id": "CopyLabel0cea9eb96dd2045",
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
            var CopyLabel0e8c464feb75d4e = new voltmx.ui.Label({
                "id": "CopyLabel0e8c464feb75d4e",
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
            var CopyLabel0g28597a9261e4c = new voltmx.ui.Label({
                "id": "CopyLabel0g28597a9261e4c",
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
                "onTouchEnd": controller.AS_Label_f379af81f07e493387ce6a5b60cc4481,
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
            flxcontainerslidemenu.add(CopyLabel0cea9eb96dd2045, CopyLabel0e8c464feb75d4e, CopyLabel0g28597a9261e4c, Label04, Label05);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
                "640": {
                    "flexHeaderProductline": {
                        "segmentProps": []
                    }
                },
                "1024": {
                    "flexHeaderProductline": {
                        "segmentProps": []
                    }
                },
                "1366": {
                    "flexHeaderProductline": {
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {
                "barchart": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                },
                "linechart": {
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
            this.add(FlexContainertable, FlexChart, FlexContainerLinechart, FlexContainerHeader, Label003, Imagemenu, flxcontainerslidemenu);
        };
        return [{
            "addWidgets": addWidgetsProductLinefrm,
            "enabledForIdleTimeout": false,
            "id": "ProductLinefrm",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0fb417bbb10d849",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2",
            "preShow": function(eventobject) {
                controller.AS_Form_b5efcba627994b17a79cd6dcab8e6a47(eventobject);
                voltmx.visualizer.syncComponentInstanceDataCache(eventobject);
            },
            "info": {
                "kuid": "b3c9856e04514d829f4c8106e7ce4669"
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