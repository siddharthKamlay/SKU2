define("userSKUDemandController", {
    sortDirectionMap: {},
    sortByField: function(fieldKey) {
        const data = this.view.segDemandRequest.data;
        let asc = this.sortDirectionMap[fieldKey] === undefined ? true : this.sortDirectionMap[fieldKey];
        data.sort((a, b) => {
            const textA = (a[fieldKey].text || "").toLowerCase();
            const textB = (b[fieldKey].text || "").toLowerCase();
            return asc ? textA.localeCompare(textB) : textB.localeCompare(textA);
        });
        this.view.segDemandRequest.setData(data);
        this.sortDirectionMap[fieldKey] = !asc;
    },
    filterData: function() {
        this.originalSegData = taskData;
        kony.print("Nothing");
        var selectedType = this.view.ListBoxCategories.selectedKeyValue[1];
        var selectedStatus = this.view.ListBoxStatus.selectedKeyValue[1];
        var searchText = this.view.TextFieldSearchBox.text.trim().toLowerCase();
        var filteredData;
        kony.print("Selected Task Type: " + selectedType);
        kony.print("Selected Task Status: " + selectedStatus);
        kony.print("Search Text: " + searchText);
        kony.print("Original Data: " + JSON.stringify(this.originalSegData));
        if (selectedType === "All Categories") {
            filteredData = this.originalSegData;
        } else {
            filteredData = this.originalSegData.filter(function(item) {
                kony.print("Item what" + JSON.stringify(item.Category));
                return item.Category.toLowerCase() === selectedType.toLowerCase();
            });
        }
        if (selectedStatus !== "All Status") {
            filteredData = filteredData.filter(function(item) {
                return item.Status === selectedStatus;
            });
        }
        if (searchText !== "") {
            filteredData = filteredData.filter(function(item) {
                var nameMatch = item.Name && item.Name.toLowerCase().indexOf(searchText) !== -1;
                var skuidMatch = item.SKUID && item.SKUID.toLowerCase().indexOf(searchText) !== -1;
                return nameMatch || skuidMatch;
            });
        }
        kony.print("Filtered Data: " + JSON.stringify(filteredData));
        var tempCollection9723 = [];
        var tempData3846 = filteredData;
        for (var each796 in tempData3846) {
            var shouldShow = typeof tempData3846[each796]["x_0024FILES"] !== 'undefined' && tempData3846[each796]["x_0024FILES"] && tempData3846[each796]["x_0024FILES"].length > 0
            tempCollection9723.push({
                "lblSKUID1": {
                    "text": tempData3846[each796]["SKUID"]
                },
                "lblName1": {
                    "text": tempData3846[each796]["Name"]
                },
                "lblCategory1": {
                    "text": tempData3846[each796]["Category"]
                },
                "lblStock1": {
                    "text": tempData3846[each796]["Stock"]
                },
                "lblForecasted1": {
                    "text": tempData3846[each796]["Forecasted"]
                },
                "lblEnrichedQTY1": {
                    "text": tempData3846[each796]["EnrichedQTY"]
                },
                "lblRequested1": {
                    "text": tempData3846[each796]["Requested"]
                },
                "lblStatus1": {
                    "text": tempData3846[each796]["Status"]
                },
                "lblRequestedBY1": {
                    "text": tempData3846[each796]["RequestedBy"]
                },
                "lblRequestDate1": {
                    "text": tempData3846[each796]["RequestDate"]
                },
            });
        }
        this.view.segDemandRequest.setData(tempCollection9723);
    }
});
define("SKUDemandControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for lblName **/
    AS_Label_g98ccbb79b5c4fda802abb12822b0b9b: function AS_Label_g98ccbb79b5c4fda802abb12822b0b9b(eventobject, x, y) {
        var self = this;
        return self.sortByField.call(this, null);
    },
    /** onTextChange defined for TextFieldSearchBox **/
    AS_TextField_d001906d70c44fc2807c43c55b8d34a3: function AS_TextField_d001906d70c44fc2807c43c55b8d34a3(eventobject, changedtext) {
        var self = this;
        return self.filterData.call(this);
    },
    /** onSelection defined for ListBoxCategories **/
    AS_ListBox_c9bd2ff52144480c955ead8257217004: function AS_ListBox_c9bd2ff52144480c955ead8257217004(eventobject) {
        var self = this;
        return self.filterData.call(this);
    },
    /** onSelection defined for ListBoxStatus **/
    AS_ListBox_c927ae555a8444ddb905c8a59c786e27: function AS_ListBox_c927ae555a8444ddb905c8a59c786e27(eventobject) {
        var self = this;
        return self.filterData.call(this);
    },
    /** onMapping defined for SKUDemand **/
    AS_Form_c0dd210e25d54aff9eafc381b1dfe411: function AS_Form_c0dd210e25d54aff9eafc381b1dfe411(eventobject) {
        var self = this;

        function SHOW_ALERT_e3b4ecb1ad2049969ae8833aac6c7ea8_True() {}

        function INVOKE_SERVICE_g498ebcd252b41ff9f8955cc0185954f_Callback(DemandRequest) {
            if (DemandRequest.opstatus == 0) {
                voltmx.application.dismissLoadingScreen();
                var tempCollection6531 = [];
                var tempData4865 = DemandRequest.records;
                for (var each3352 in tempData4865) {
                    var shouldShow = typeof tempData4865[each3352]["x_0024FILES"] !== 'undefined' && tempData4865[each3352]["x_0024FILES"] && tempData4865[each3352]["x_0024FILES"].length > 0
                    tempCollection6531.push({
                        "lblSKUID1": {
                            "text": tempData4865[each3352]["SKUID"]
                        },
                        "lblName1": {
                            "text": tempData4865[each3352]["Name"]
                        },
                        "lblCategory1": {
                            "text": tempData4865[each3352]["Category"]
                        },
                        "lblStock1": {
                            "text": tempData4865[each3352]["Stock"]
                        },
                        "lblForecasted1": {
                            "text": tempData4865[each3352]["Forecasted"]
                        },
                        "lblEnrichedQTY1": {
                            "text": tempData4865[each3352]["EnrichedQTY"]
                        },
                        "lblRequested1": {
                            "text": tempData4865[each3352]["Requested"]
                        },
                        "lblStatus1": {
                            "text": tempData4865[each3352]["Status"]
                        },
                        "lblRequestedBY1": {
                            "text": tempData4865[each3352]["RequestedBY"]
                        },
                        "lblRequestDate1": {
                            "text": tempData4865[each3352]["RequestDate"]
                        },
                    });
                }
                self.view.segDemandRequest.setData(tempCollection6531);
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
            } else {
                function SHOW_ALERT_e3b4ecb1ad2049969ae8833aac6c7ea8_Callback() {
                    SHOW_ALERT_e3b4ecb1ad2049969ae8833aac6c7ea8_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "message": "Data fetching failed",
                    "alertHandler": SHOW_ALERT_e3b4ecb1ad2049969ae8833aac6c7ea8_Callback
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
        SKUDemandRequests$DemandRequest$get = mfobjectsecureinvokerasync(DemandRequest_inputparam, "SKUDemandRequests", "DemandRequest", INVOKE_SERVICE_g498ebcd252b41ff9f8955cc0185954f_Callback);
    }
});
define("SKUDemandController", ["userSKUDemandController", "SKUDemandControllerActions"], function() {
    var controller = require("userSKUDemandController");
    var controllerActions = ["SKUDemandControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
