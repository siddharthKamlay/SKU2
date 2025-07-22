define("userOverviewController", {
    pieChartFromSegment: function() {
        try {
            var rawData = this.view.segDemandRequest.data;
            kony.print("Raw Segment Data: " + JSON.stringify(rawData));
            var categoryTotals = {};
            var totalRequestedQty = 0;
            // Group Requested Qty by Category
            rawData.forEach(function(item) {
                if (item && item.lblCategory1 && item.lblRequested1) {
                    var category = item.lblCategory1.text.trim();
                    var requestedQty = parseInt(item.lblRequested1.text, 10);
                    if (!isNaN(requestedQty)) {
                        totalRequestedQty += requestedQty;
                        categoryTotals[category] = (categoryTotals[category] || 0) + requestedQty;
                    }
                }
            });
            if (totalRequestedQty === 0) {
                kony.print("No valid requested quantity to chart.");
                return;
            }
            // Pastel color palette
            var pastelColors = ["#A3D5FF", "#FFD6A5", "#C3FDB8", "#FFB3C1", "#D5D6EA"];
            var chartData = [];
            var colorIndex = 0;
            for (var category in categoryTotals) {
                var qty = categoryTotals[category];
                var percentage = ((qty / totalRequestedQty) * 100).toFixed(1);
                chartData.push({
                    label: category + " (" + qty + ")", // Label shows quantity
                    value: qty, // Show raw value in chart
                    colorCode: pastelColors[colorIndex % pastelColors.length],
                    toolTip: category + ": " + qty + " (" + percentage + "%)" // Tooltip with value and %
                });
                colorIndex++;
            }
            // Assign data and config to pie chart
            this.view.piechart.chartTitle = "RequestedQTY by Category";
            this.view.piechart.enableStaticPreview = true;
            this.view.piechart.chartData = {
                data: chartData
            };
            this.view.piechart.chartConfig = {
                labelPosition: "inside",
                showLegend: true,
                showValues: true,
                toolTip: true
            };
            this.view.piechart.createChart();
            kony.print("Pie chart created with: " + JSON.stringify(chartData));
        } catch (e) {
            kony.print("Error in pieChartFromSegment: " + JSON.stringify(e));
        }
    },
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
define("OverviewControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMapping defined for Overview **/
    AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07: function AS_Form_c9d44fb4d5ad4928932f0eeb9e353e07(eventobject) {
        var self = this;

        function SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_True() {}

        function INVOKE_SERVICE_jaeb26165b184047aca6d7d11e45e1aa_Callback(DemandRequest) {
            voltmx.application.dismissLoadingScreen();
            if (DemandRequest.opstatus == 0) {
                taskData = DemandRequest.records;
                kony.print("taskData" + JSON.stringify(taskData));
                var tempCollection9467 = [];
                var tempData9074 = DemandRequest.records;
                for (var each4862 in tempData9074) {
                    var shouldShow = typeof tempData9074[each4862]["x_0024FILES"] !== 'undefined' && tempData9074[each4862]["x_0024FILES"] && tempData9074[each4862]["x_0024FILES"].length > 0
                    tempCollection9467.push({
                        "lblSKUID1": {
                            "text": tempData9074[each4862]["SKUID"]
                        },
                        "lblName1": {
                            "text": tempData9074[each4862]["Name"]
                        },
                        "lblCategory1": {
                            "text": tempData9074[each4862]["Category"]
                        },
                        "lblStock1": {
                            "text": tempData9074[each4862]["Stock"]
                        },
                        "lblForecasted1": {
                            "text": tempData9074[each4862]["Forecasted"]
                        },
                        "lblEnrichedQTY1": {
                            "text": tempData9074[each4862]["EnrichedQTY"]
                        },
                        "lblRequested1": {
                            "text": tempData9074[each4862]["Requested"]
                        },
                        "lblStatus1": {
                            "text": tempData9074[each4862]["Status"]
                        },
                        "lblRequestedBY1": {
                            "text": tempData9074[each4862]["RequestedBY"]
                        },
                        "lblRequestDate1": {
                            "text": tempData9074[each4862]["RequestDate"]
                        },
                        "lblApprovedDate1": {
                            "text": tempData9074[each4862]["ApprovedDate"]
                        },
                    });
                }
                self.view.segDemandRequest.setData(tempCollection9467);
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
                function SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_Callback() {
                    SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_True();
                }
                voltmx.ui.Alert({
                    "alertType": constants.ALERT_TYPE_INFO,
                    "message": "failed to fetch data",
                    "alertHandler": SHOW_ALERT_b9d577f648ff446bba1ae44b749551b6_Callback
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
        SKUDemandRequests$DemandRequest$get = mfobjectsecureinvokerasync(DemandRequest_inputparam, "SKUDemandRequests", "DemandRequest", INVOKE_SERVICE_jaeb26165b184047aca6d7d11e45e1aa_Callback);
    },
    /** preShow defined for Overview **/
    AS_Form_g59a2ef8557045418e7aecff9e8b333b: function AS_Form_g59a2ef8557045418e7aecff9e8b333b(eventobject) {
        var self = this;
        self.view.FlexContaineroverview.left = "-180%";
    },
    /** onTouchEnd defined for Bars **/
    AS_Label_ccb1f37491fa443d8857b72030ce776a: function AS_Label_ccb1f37491fa443d8857b72030ce776a(eventobject, x, y) {
        var self = this;

        function _ide_onTouchEnd_ia54d0f426044f22bd718b9f49eaa193_Callback() {}
        self.view.FlexContaineroverview.animate(voltmx.ui.createAnimation({
            "100": {
                "left": "0px",
                "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": _ide_onTouchEnd_ia54d0f426044f22bd718b9f49eaa193_Callback
        });
    },
    /** onTouchEnd defined for Label03 **/
    AS_Label_e3a9d7a2b54f40e8bccae785c869feae: function AS_Label_e3a9d7a2b54f40e8bccae785c869feae(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("Overview");
        ntf.navigate();
    },
    /** onTouchEnd defined for Label04 **/
    AS_Label_f70828358dce40018fdee062495dbbc7: function AS_Label_f70828358dce40018fdee062495dbbc7(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("SOP");
        ntf.navigate();
    },
    /** onTouchEnd defined for Label05 **/
    AS_Label_g8499c9129424cf09a17f7294d793cb8: function AS_Label_g8499c9129424cf09a17f7294d793cb8(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("SKUDemand");
        ntf.navigate();
    },
    /** onTouchEnd defined for lblName **/
    AS_Label_g98ccbb79b5c4fda802abb12822b0b9b: function AS_Label_g98ccbb79b5c4fda802abb12822b0b9b(eventobject, x, y) {
        var self = this;
        return self.sortByField.call(this, null);
    },
    /** onSelection defined for ListBoxCategories **/
    AS_ListBox_cdfff7a0ec2b49099a32bd66ab80db6c: function AS_ListBox_cdfff7a0ec2b49099a32bd66ab80db6c(eventobject) {
        var self = this;
        return self.filterData.call(this);
    },
    /** onSelection defined for ListBoxStatus **/
    AS_ListBox_e142ea5b752e4766817f055209389d11: function AS_ListBox_e142ea5b752e4766817f055209389d11(eventobject) {
        var self = this;
        return self.filterData.call(this);
    },
    /** onTextChange defined for TextFieldSearchBox **/
    AS_TextField_i399824987dc42e28a801263c10a9da3: function AS_TextField_i399824987dc42e28a801263c10a9da3(eventobject, changedtext) {
        var self = this;
        return self.filterData.call(this);
    }
});
define("OverviewController", ["userOverviewController", "OverviewControllerActions"], function() {
    var controller = require("userOverviewController");
    var controllerActions = ["OverviewControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
