function AS_Form_c8de775696514eb9bbcf08e92d502192(eventobject) {
    var self = this;

    function SHOW_ALERT_f8d31ef794904e709d9952753d0b2683_True() {}
    function INVOKE_SERVICE_fd4b57fa4b154100a289d6a3c7de21f4_Callback(DemandRequest) {
        voltmx.application.dismissLoadingScreen();
        if (DemandRequest.opstatus == 0) {
            var tempCollection1104 = [];
            var tempData6821 = DemandRequest.records;
            for (var each3172 in tempData6821) {
                var shouldShow = typeof tempData6821[each3172]["x_0024FILES"] !== 'undefined' && tempData6821[each3172]["x_0024FILES"] && tempData6821[each3172]["x_0024FILES"].length > 0
                tempCollection1104.push({
                    "lblSKUID1": {
                        "text": tempData6821[each3172]["SKUID"]
                    },
                    "lblName1": {
                        "text": tempData6821[each3172]["Name"]
                    },
                    "lblCategory1": {
                        "text": tempData6821[each3172]["Category"]
                    },
                    "lblStock1": {
                        "text": tempData6821[each3172]["Stock"]
                    },
                    "lblForecasted1": {
                        "text": tempData6821[each3172]["Forecasted"]
                    },
                    "lblEnrichedQTY1": {
                        "text": tempData6821[each3172]["EnrichedQTY"]
                    },
                    "lblRequested1": {
                        "text": tempData6821[each3172]["Requested"]
                    },
                    "lblStatus1": {
                        "text": tempData6821[each3172]["Status"]
                    },
                    "lblRequestedBY1": {
                        "text": tempData6821[each3172]["RequestedBY"]
                    },
                    "lblRequestDate1": {
                        "text": tempData6821[each3172]["RequestDate"]
                    },
                });
            }
            self.view.segDemandRequest.setData(tempCollection1104);
            if ([640].indexOf(kony.application.getCurrentBreakpoint()) !== -1) {
                var templateId = self.view.segDemandRequest.rowTemplate;
                self.view.segDemandRequest.data.forEach(function(row) {
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
                var clonedWidgetDataMap = self.view.segDemandRequest.widgetDataMap;
                clonedWidgetDataMap[templateId] = templateId;
                self.view.segDemandRequest.widgetDataMap = clonedWidgetDataMap;
                self.view.segDemandRequest.setData(self.view.segDemandRequest.data);
                self.view.forceLayout();
            }
            self.pieChartFromSegment.call(this);
        } else {
            function SHOW_ALERT_f8d31ef794904e709d9952753d0b2683_Callback() {
                SHOW_ALERT_f8d31ef794904e709d9952753d0b2683_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "message": "Data fetch failed try again later",
                "alertHandler": SHOW_ALERT_f8d31ef794904e709d9952753d0b2683_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
    }
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    if (DemandRequest_inputparam == undefined) {
        var DemandRequest_inputparam = {};
    }
    DemandRequest_inputparam["serviceID"] = "SKUDemandRequests$DemandRequest$get";
    DemandRequest_inputparam["options"] = {
        "access": "online",
        "CRUD_TYPE": "get"
    };
    var DemandRequest_httpheaders = {};
    DemandRequest_inputparam["httpheaders"] = DemandRequest_httpheaders;
    var DemandRequest_httpconfigs = {};
    DemandRequest_inputparam["httpconfig"] = DemandRequest_httpconfigs;
    SKUDemandRequests$DemandRequest$get = mfobjectsecureinvokerasync(DemandRequest_inputparam, "SKUDemandRequests", "DemandRequest", INVOKE_SERVICE_fd4b57fa4b154100a289d6a3c7de21f4_Callback);
}