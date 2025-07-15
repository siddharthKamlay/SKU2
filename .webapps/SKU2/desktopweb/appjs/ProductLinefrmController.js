define("userProductLinefrmController", {
    barChart: function() {
        var rawData = this.view.segProductline.data;
        // Print raw segment data for debugging
        kony.print("Raw Segment Data: " + JSON.stringify(rawData));
        // Prepare data for chartData and barDetails
        var chartData = [];
        rawData.forEach(function(item) {
            chartData.push({
                label: item.lblProductLine1.text,
                value1: parseInt(item.lblForcasted1.text),
                value2: parseInt(item.lblActual1.text)
            });
        });
        var barDetails = [{
            legendName: "Forecasted",
            color: "#7b61ff"
        }, {
            legendName: "Actual",
            color: "#ff4dc4"
        }];
        // Set chart properties
        this.view.barchart.chartTitle = "Product Line Performance";
        this.view.barchart.xAxisTitle = "Product Line";
        this.view.barchart.yAxisTitle = "Revenue";
        // Set the chartData and barDetails
        this.view.barchart.chartData = {
            data: chartData
        };
        this.view.barchart.barDetails = {
            data: barDetails
        };
        // Draw the chart using the createChart() function
        this.view.barchart.createChart(chartData, barDetails);
    }
});
define("ProductLinefrmControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMapping defined for ProductLinefrm **/
    AS_Form_b5efcba627994b17a79cd6dcab8e6a47: function AS_Form_b5efcba627994b17a79cd6dcab8e6a47(eventobject) {
        var self = this;

        function SHOW_ALERT_habd84cdb77746daba05126fbc331f15_True() {}

        function INVOKE_SERVICE_j9260bc7feed4f0784e30f5319b2030f_Callback(Productline) {
            voltmx.application.dismissLoadingScreen();
            if (Productline.opstatus == 0) {
                if ([640].indexOf(kony.application.getCurrentBreakpoint()) !== -1) {
                    var templateId = self.view.segProductline.rowTemplate;
                    self.view.segProductline.data.forEach(function(row) {
                        row[templateId] = {
                            layoutType: kony.flex.FLOW_VERTICAL
                        };
                        Object.keys(row).forEach(function(key) {
                            if (key.includes("lbl")) {
                                row[key].width = '80%';
                                row[key].height = kony.flex.USE_PREFERRED_SIZE;
                            }
                        });
                    });
                    var clonedWidgetDataMap = self.view.segProductline.widgetDataMap;
                    clonedWidgetDataMap[templateId] = templateId;
                    self.view.segProductline.widgetDataMap = clonedWidgetDataMap;
                    self.view.segProductline.setData(self.view.segProductline.data);
                    self.view.forceLayout();
                }
                self.barChart.call(this);
            } else {
                function SHOW_ALERT_habd84cdb77746daba05126fbc331f15_Callback() {
                    SHOW_ALERT_habd84cdb77746daba05126fbc331f15_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "message": "data fetch failed......",
                    "alertHandler": SHOW_ALERT_habd84cdb77746daba05126fbc331f15_Callback
                }, {
                    "iconPosition": constants.ALERT_ICON_POSITION_LEFT
                });
            }
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (Productline_inputparam == undefined) {
            var Productline_inputparam = {};
        }
        Productline_inputparam["serviceID"] = "SKUDemandRequests$Productline$get";
        Productline_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var Productline_httpheaders = {};
        Productline_inputparam["httpheaders"] = Productline_httpheaders;
        var Productline_httpconfigs = {};
        Productline_inputparam["httpconfig"] = Productline_httpconfigs;
        SKUDemandRequests$Productline$get = mfobjectsecureinvokerasync(Productline_inputparam, "SKUDemandRequests", "Productline", INVOKE_SERVICE_j9260bc7feed4f0784e30f5319b2030f_Callback);
    },
    /** onTouchEnd defined for Imagemenu **/
    AS_Image_c07533c757414f3d8cf76a373f585070: function AS_Image_c07533c757414f3d8cf76a373f585070(eventobject, x, y) {
        var self = this;

        function MOVE_ACTION_f60c16b1ef8f4d83a09fe0227a8cf9c8_Callback() {}
        self.view.flxcontainerslidemenu.animate(voltmx.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION_f60c16b1ef8f4d83a09fe0227a8cf9c8_Callback
        });
    },
    /** onTouchEnd defined for CopyLabel0g28597a9261e4c **/
    AS_Label_e3a9d7a2b54f40e8bccae785c869feae: function AS_Label_e3a9d7a2b54f40e8bccae785c869feae(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("DemandRequestFrm");
        ntf.navigate();
    },
    /** onTouchEnd defined for Label05 **/
    AS_Label_ef28823a15424ff6b94cc4c23729f67a: function AS_Label_ef28823a15424ff6b94cc4c23729f67a(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("SKUDemand");
        ntf.navigate();
    },
    /** onTouchEnd defined for Label04 **/
    AS_Label_f379af81f07e493387ce6a5b60cc4481: function AS_Label_f379af81f07e493387ce6a5b60cc4481(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("ProductLinefrm");
        ntf.navigate();
    }
});
define("ProductLinefrmController", ["userProductLinefrmController", "ProductLinefrmControllerActions"], function() {
    var controller = require("userProductLinefrmController");
    var controllerActions = ["ProductLinefrmControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
