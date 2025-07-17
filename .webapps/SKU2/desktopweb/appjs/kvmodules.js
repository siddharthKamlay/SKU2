define('applicationController',{
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.hclsoftwareu.hamburgermenu", {
            "viewName": "hamburgermenu",
            "controllerName": "hamburgermenuController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hclsoftwareu",
            "classname": "hamburgermenu",
            "name": "com.hclsoftwareu.hamburgermenu"
        });
        voltmx.mvc.registry.add("com.konymp.linechart", {
            "viewName": "linechart",
            "controllerName": "linechartController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "linechart",
            "name": "com.konymp.linechart"
        });
        voltmx.mvc.registry.add("com.konymp.piechart", {
            "viewName": "piechart",
            "controllerName": "piechartController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "piechart",
            "name": "com.konymp.piechart"
        });
        voltmx.mvc.registry.add("com.konymp.verticalbar", {
            "viewName": "verticalbar",
            "controllerName": "verticalbarController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "verticalbar",
            "name": "com.konymp.verticalbar"
        });
        voltmx.mvc.registry.add("com.konymp.verticalbarCopy", {
            "viewName": "verticalbarCopy",
            "controllerName": "verticalbarCopyController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "verticalbarCopy",
            "name": "com.konymp.verticalbarCopy"
        });
        voltmx.mvc.registry.add("com.voltmxmp.multiseriesverticalbar", {
            "viewName": "multiseriesverticalbar",
            "controllerName": "multiseriesverticalbarController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.voltmxmp",
            "classname": "multiseriesverticalbar",
            "name": "com.voltmxmp.multiseriesverticalbar"
        });
        voltmx.mvc.registry.add("myflxSegRowWithImageAndLabel", {
            "viewName": "myflxSegRowWithImageAndLabel",
            "controllerName": "myflxSegRowWithImageAndLabelController"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("Flex0f834108d4cc042", {
            "viewName": "Flex0f834108d4cc042",
            "controllerName": "Flex0f834108d4cc042Controller"
        });
        voltmx.mvc.registry.add("CopyFlex0ff43866586004c", {
            "viewName": "CopyFlex0ff43866586004c",
            "controllerName": "CopyFlex0ff43866586004cController"
        });
        voltmx.mvc.registry.add("LoginFrm", {
            "viewName": "LoginFrm",
            "controllerName": "LoginFrmController"
        });
        voltmx.mvc.registry.add("Overview", {
            "viewName": "Overview",
            "controllerName": "OverviewController"
        });
        voltmx.mvc.registry.add("SKUDemand", {
            "viewName": "SKUDemand",
            "controllerName": "SKUDemandController"
        });
        voltmx.mvc.registry.add("SOP", {
            "viewName": "SOP",
            "controllerName": "SOPController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Overview").navigate();
    }
});
define("com/hclsoftwareu/hamburgermenu/userhamburgermenuController", [],function() {
    return {};
});
define("com/hclsoftwareu/hamburgermenu/hamburgermenuControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hclsoftwareu/hamburgermenu/hamburgermenuController", ["com/hclsoftwareu/hamburgermenu/userhamburgermenuController", "com/hclsoftwareu/hamburgermenu/hamburgermenuControllerActions"], function() {
    var controller = require("com/hclsoftwareu/hamburgermenu/userhamburgermenuController");
    var actions = require("com/hclsoftwareu/hamburgermenu/hamburgermenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hclsoftwareu/hamburgermenu/hamburgermenu',[],function() {
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
});
define('com/konymp/linechart/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "b6f81f4c0dfb41aea20c2c0deb34e15f",
                    "assetName": "com.konymp.linechart",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "u06986058ef24b329da7b2ab680ed831",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/linechart/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Line Chart UDW
 * @author: Tejaswini Tubati and Sumeet Bartha
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates line chart by taking the required parameters as input
 */
define("com/konymp/linechart/userlinechartController", ['com/konymp/linechart/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/linechart/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Line Chart Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "linechart" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _lineColor: "#1B9ED9",
                _lowValue: "0",
                _highValue: "40",
                _bgColor: "#FFFFFF",
                _enableChartAnimation: true,
                _enableStaticPreview: true,
                _xAxisTitle: "",
                _yAxisTitle: "",
                _enableGrid: true,
                _enableGridAnimation: true,
                _titleFontSize: "12",
                _titleFontColor: "#000000"
            };
            this._chartTitle = "";
            this._chartData = [];
            chart_lineChart_defined_global = function(state) {
                if (state === 'ready') {
                    this.showGridChart();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor ---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lineColor", function(val) {
                konymp.logger.trace("----------Entering lineColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._lineColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLineColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLineColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lineColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "xAxisTitle", function(val) {
                konymp.logger.trace("----------Entering xAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._xAxisTitle = val;
                konymp.logger.trace("----------Exiting xAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "yAxisTitle", function(val) {
                konymp.logger.trace("----------Entering yAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._yAxisTitle = val;
                konymp.logger.trace("----------Exiting yAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title Font Size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering backgroundColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgoundColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgoundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting backgroundColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
                konymp.logger.trace("----------Entering enableGrid Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGrid = val;
                konymp.logger.trace("----------Exiting enableGrid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGridAnimation", function(val) {
                konymp.logger.trace("----------Entering enableGridAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGridAnimation = val;
                konymp.logger.trace("----------Exiting enableGridAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lowValue", function(val) {
                konymp.logger.trace("----------Entering lowValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._lowValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lowValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "highValue", function(val) {
                konymp.logger.trace("----------Entering highValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._highValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting highValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering chartData Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartData = val.data;
                konymp.logger.trace("----------Exiting chartData Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.lineChartBrowser.onPageFinished = this.showGridChart.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createChart
         * @access exposed to user
         * @param {JSON} dataSet
         * @description: generates line chart by taking the data and the other params as input
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var labels, series, data;
                if (dataSet !== null && dataSet !== undefined && dataSet !== "" && dataSet.length !== 0) {
                    labels = dataSet.map(function(obj) {
                        return obj.lblName;
                    });
                    series = dataSet.map(function(obj) {
                        return Number(obj.dataVal);
                    });
                } else if (this._chartData !== null && this._chartData !== undefined && this._chartData !== "" && this._chartData.length !== 0) {
                    data = this._chartData;
                    labels = data.map(function(obj) {
                        return obj.lblName;
                    });
                    series = data.map(function(obj) {
                        return Number(obj.dataVal);
                    });
                } else {
                    throw {
                        "Error": "noData",
                        "message": "Data not passed to chart"
                    };
                }
                series = [series];
                if (this.validateAllParams(this._chartTitle, labels, series, this._chartProperties)) {
                    var x = this.view.lineChartBrowser.evaluateJavaScript('var chartObj = new konymp.charts.lineChart(); chartObj.drawLineChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(series) + ',' + JSON.stringify(this._chartProperties) + ');');
                    this.view.forceLayout();
                    konymp.logger.trace("----------Exiting createChart Function---------", konymp.logger.FUNCTION_EXIT);
                    return true;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.Error === "noData") {
                    throw (exception);
                }
            }
        },
        /**
         * @function validateData
         * @private
         * @param {String/Array/JSON} data
         * @param {String(datatype)} type
         * @description: validates the data param based on the corresponding type param
         */
        validateData: function(data, type) {
            konymp.logger.trace("----------Entering validateData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (type === 'array') {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return Array.isArray(data);
                } else if (typeof data === type) {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return true;
                } else {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return false;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @params {String} title, color, xAxisTitle, yAxisTitle
         * @params {JS Array} labels, series 
         * @description: invokes the validation of all params and returns a true only if all are validated
         */
        validateAllParams: function(title, labels, series, properties) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (!this.validateData(title, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for title " + JSON.stringify(title)
                    };
                }
                if (!this.validateData(labels, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for labels " + JSON.stringify(labels)
                    };
                }
                if (!this.validateData(series, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for series " + JSON.stringify(series)
                    };
                }
                if (!this.validateData(properties._lineColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for lineColor " + JSON.stringify(properties._lineColor)
                    };
                }
                if (!this.validateData(properties._xAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for xAxisTitle " + JSON.stringify(properties._xAxisTitle)
                    };
                }
                if (!this.validateData(properties._yAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for yAxisTitle " + JSON.stringify(properties._yAxisTitle)
                    };
                }
                if (!this.validateData(properties._titleFontColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for titleFontColor " + JSON.stringify(properties._titleFontColor)
                    };
                }
                if (!this.validateData(properties._titleFontSize, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for titleFontSize " + JSON.stringify(properties._titleFontSize)
                    };
                }
                if (!this.validateData(properties._bgColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for backgroundColor " + JSON.stringify(properties._bgColor)
                    };
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.Error === "Invalid Datatype") {
                    throw (exception);
                }
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function showGridChart
         * @param dataSet 
         * @description creates the chart with the data in the data grid on browser load
         */
        showGridChart: function() {
            try {
                if (this._chartProperties._enableStaticPreview && this._chartData.length !== 0) {
                    this.createChart(this._chartData);
                } else {
                    throw {
                        "Error": "NoData",
                        "message": "No data in data grid"
                    };
                }
            } catch (exception) {
                if (exception.Error === "NoData") {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                }
            }
        }
    };
});
define("com/konymp/linechart/linechartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/linechart/linechartController", ["com/konymp/linechart/userlinechartController", "com/konymp/linechart/linechartControllerActions"], function() {
    var controller = require("com/konymp/linechart/userlinechartController");
    var actions = require("com/konymp/linechart/linechartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/linechart/linechart',[],function() {
    return function(controller) {
        var linechart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "linechart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "linechart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "linechart"), extendConfig({}, controller.args[2], "linechart"));
        linechart.setDefaultUnit(voltmx.flex.DP);
        var lineChartBrowser = new voltmx.ui.Browser(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "lineChartBrowser",
            "isVisible": true,
            "left": 0,
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "chartist_line/lineChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lineChartBrowser"), extendConfig({}, controller.args[1], "lineChartBrowser"), extendConfig({}, controller.args[2], "lineChartBrowser"));
        linechart.add(lineChartBrowser);
        return linechart;
    }
});
define('com/konymp/linechart/linechartConfig',[],function() {
    return {
        "properties": [{
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGrid",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "xAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "yAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lowValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGridAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "highValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lineColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
define('com/konymp/piechart/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "f624df4700284c31a4f3076d14968e33",
                    "assetName": "com.konymp.piechart",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "uc133acad53245bf80a57bc359771aca",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/piechart/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Doughnut Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates Pie chart by taking the data as input
 */
define("com/konymp/piechart/userpiechartController", ['com/konymp/piechart/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/piechart/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Pie Chart MultiSeries Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "piechart" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _titleFontSize: 12,
                _titleFontColor: "#000000",
                _enableLegend: true,
                _legendFontSize: 10,
                _legendFontColor: "#000000",
                _bgColor: "#ffffff"
            };
            this._data = [];
            this._chartTitle = "";
            this._enableStaticPreview = true;
            chart_pie_defined_global = function(state) {
                if (state === 'ready') {
                    this.myPostShow();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering data Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._data = val.data;
                konymp.logger.trace("----------Exiting data Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "Title Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableLegend", function(val) {
                konymp.logger.trace("----------Entering enableLegend Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableLegend = val;
                konymp.logger.trace("----------Exiting enableLegend Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontSize", function(val) {
                konymp.logger.trace("----------Entering legendFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._legendFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Legend font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontColor", function(val) {
                konymp.logger.trace("----------Entering legendFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._legendFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLegendFontColorCode",
                            "message": "Legend Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLegendFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgroundColorCode",
                            "message": "Background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgroundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "labelColor", function(val) {
                konymp.logger.trace("----------Entering labelColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._labelColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLabelColorCode",
                            "message": "Label color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLabelColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting labelColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.PieBrowser.onPageFinished = this.myPostShow.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createDonutChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of Pie chart
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createPieChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (dataSet === undefined) {
                    if (this._data.length < 0) throw {
                        Error: 'No Data',
                        message: "no data assigned for chart"
                    };
                    else dataSet = this._data;
                }
                var data = dataSet.map(function(obj) {
                    return Number(obj.Value || obj.value);
                });
                var labels = dataSet.map(function(obj) {
                    return obj.label;
                });
                var colors = dataSet.map(function(obj) {
                    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
                    if (obj.colorCode === null || obj.colorCode === "" || (!regColorcode.test(obj.colorCode))) {
                        throw {
                            error: "wrong dataType",
                            message: "wrong colorCode for data " + JSON.stringify(obj.colorCode)
                        };
                    }
                    return obj.colorCode;
                });
                if (this.validateAllParams(this._chartTitle, data, labels, colors)) {
                    this.view.PieBrowser.evaluateJavaScript('(new konymp.charts.pie()).Generate_PieChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ');');
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.error === "wrong dataType") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        _validationData: function(data, type) {
            konymp.logger.trace("----------Entering _validationData Function---------", konymp.logger.FUNCTION_ENTRY);
            if (type === 'array') {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return Array.isArray(data);
            } else if (typeof data === type) {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return true;
            } else {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return false;
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            if (!this._validationData(title, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for title " + title
                };
            }
            if (!this._validationData(data, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for data " + JSON.stringify(data)
                };
            }
            if (!this._validationData(labels, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for labels " + JSON.stringify(labels)
                };
            }
            if (!this._validationData(colors, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for bgColor " + JSON.stringify(colors)
                };
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function
         *@description: called to create using data
         */
        myPostShow: function() {
            try {
                if (this._enableStaticPreview) {
                    this.createChart(this._data);
                    return;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        }
    };
});
define("com/konymp/piechart/piechartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/piechart/piechartController", ["com/konymp/piechart/userpiechartController", "com/konymp/piechart/piechartControllerActions"], function() {
    var controller = require("com/konymp/piechart/userpiechartController");
    var actions = require("com/konymp/piechart/piechartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/piechart/piechart',[],function() {
    return function(controller) {
        var piechart = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "piechart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknComponentFlex",
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "piechart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "piechart"), extendConfig({}, controller.args[2], "piechart"));
        piechart.setDefaultUnit(voltmx.flex.DP);
        var PieBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "PieBrowser",
            "isVisible": true,
            "left": "1dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_pie/Pie_chartistChart.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "PieBrowser"), extendConfig({}, controller.args[1], "PieBrowser"), extendConfig({}, controller.args[2], "PieBrowser"));
        piechart.add(PieBrowser);
        return piechart;
    }
});
define('com/konymp/piechart/piechartConfig',[],function() {
    return {
        "properties": [{
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableLegend",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
define('com/konymp/verticalbar/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "cb6b24c0ac6840099fdb7f6a4af87198",
                    "assetName": "com.konymp.verticalbar",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "2b90b128899b43528dc1109e042784fe",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/verticalbar/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2020 HCL Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Vertical Bar Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates vertical bar chart by taking the data as input
 */
define("com/konymp/verticalbar/userverticalbarController", ['com/konymp/verticalbar/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/verticalbar/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Vertical Bar Chart Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "verticalbar" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _titleFontSize: "12",
                _titleFontColor: "#000000",
                _bgColor: "#fff",
                _lowValue: "0",
                _highValue: "40",
                _xAxisTitle: "",
                _yAxisTitle: "",
                _enableGrid: true,
                _enableGridAnimation: true,
                _enableChartAnimation: true
            };
            this._chartData = [];
            this._chartTitle = "";
            this._enableStaticPreview = true;
            chart_barDS_defined_global = function(state) {
                if (state === 'ready') {
                    this.myPostShow();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
                konymp.logger.trace("----------Entering enableGrid Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGrid = val;
                konymp.logger.trace("----------Exiting enableGrid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGridAnimation", function(val) {
                konymp.logger.trace("----------Entering enableGridAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGridAnimation = val;
                konymp.logger.trace("----------Exiting enableGridAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering chartData Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartData = val.data;
                konymp.logger.trace("----------Exiting chartData Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "Title font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lowValue", function(val) {
                konymp.logger.trace("----------Entering lowValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._lowValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lowValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "highValue", function(val) {
                konymp.logger.trace("----------Entering highValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._highValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting highValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgroundColorCode",
                            "message": "Background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgroundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "xAxisTitle", function(val) {
                konymp.logger.trace("----------Entering xAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._xAxisTitle = val;
                konymp.logger.trace("----------Exiting xAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "yAxisTitle", function(val) {
                konymp.logger.trace("----------Entering yAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._yAxisTitle = val;
                konymp.logger.trace("----------Exiting yAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.verticalBarBrowser.onPageFinished = this.myPostShow.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createDonutChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (dataSet === undefined || dataSet === null) {
                    throw {
                        error: 'wrong dataType',
                        message: "wrong datatype passed to createChart"
                    };
                }
                var labels, colors, data, gridData;
                if (dataSet !== null && dataSet !== undefined && dataSet !== "") {
                    data = dataSet.map(function(obj) {
                        return Number(obj.Value || obj.value);
                    });
                    labels = dataSet.map(function(obj) {
                        return obj.label;
                    });
                    colors = dataSet.map(function(obj) {
                        var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
                        if (obj.colorCode === null || obj.colorCode === "" || (!regColorcode.test(obj.colorCode))) {
                            throw {
                                error: "wrong dataType",
                                message: "wrong colorCode for data " + JSON.stringify(obj.colorCode)
                            };
                        }
                        return obj.colorCode;
                    });
                } else if (this._chartData !== null && this._chartData !== undefined && this._chartData !== "") {
                    gridData = this._chartData;
                    data = gridData.map(function(obj) {
                        return Number(obj.Value || obj.value);
                    });
                    labels = gridData.map(function(obj) {
                        return obj.label;
                    });
                    colors = gridData.map(function(obj) {
                        return obj.colorCode;
                    });
                } else {
                    return false;
                }
                if (this.validateAllParams(this._chartTitle, data, labels, colors, this._chartProperties)) {
                    this.view.verticalBarBrowser.evaluateJavaScript('var chartObj = new konymp.charts.verticalBar(); chartObj.Generate_verticalChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ')');
                }
                konymp.logger.trace("----------Exiting createChart Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.error === "wrong dataType") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        validateData: function(data, type) {
            konymp.logger.trace("----------Entering validateData Function---------", konymp.logger.FUNCTION_ENTRY);
            if (type === 'array') {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return Array.isArray(data);
            } else if (typeof data === type) {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return true;
            } else {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return false;
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors, properties) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            if (!this.validateData(title, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for title " + title
                };
            }
            if (!this.validateData(data, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for data " + JSON.stringify(data)
                };
            }
            if (!this.validateData(labels, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for labels " + JSON.stringify(labels)
                };
            }
            if (!this.validateData(colors, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for bgColor " + JSON.stringify(colors)
                };
            }
            if (!this.validateData(properties._xAxisTitle, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for xAxisTitle " + JSON.stringify(properties._xAxisTitle)
                };
            }
            if (!this.validateData(properties._yAxisTitle, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for yAxisTitle " + JSON.stringify(properties._yAxisTitle)
                };
            }
            if (!this.validateData(properties._bgColor, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for bgColor " + JSON.stringify(properties._bgColor)
                };
            }
            if (!this.validateData(properties._lowValue, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for lowValue " + JSON.stringify(properties._lowValue)
                };
            }
            if (!this.validateData(properties._highValue, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for highValue " + JSON.stringify(properties._highValue)
                };
            }
            if (!this.validateData(properties._titleFontSize, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for titleFontSize " + JSON.stringify(properties._titleFontSize)
                };
            }
            if (!this.validateData(properties._titleFontColor, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for titleFontColor " + JSON.stringify(properties._titleFontColor)
                };
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        myPostShow: function() {
            try {
                if (this._enableStaticPreview) {
                    if (this._chartData !== undefined && this._chartData !== null && this._chartData.length > 0) this.createChart(this._chartData);
                    return;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        }
    };
});
define("com/konymp/verticalbar/verticalbarControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/verticalbar/verticalbarController", ["com/konymp/verticalbar/userverticalbarController", "com/konymp/verticalbar/verticalbarControllerActions"], function() {
    var controller = require("com/konymp/verticalbar/userverticalbarController");
    var actions = require("com/konymp/verticalbar/verticalbarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/verticalbar/verticalbar',[],function() {
    return function(controller) {
        var verticalbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "verticalbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "verticalbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "verticalbar"), extendConfig({}, controller.args[2], "verticalbar"));
        verticalbar.setDefaultUnit(voltmx.flex.DP);
        var verticalBarBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "verticalBarBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_vertical/verticalBarChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "verticalBarBrowser"), extendConfig({}, controller.args[1], "verticalBarBrowser"), extendConfig({}, controller.args[2], "verticalBarBrowser"));
        verticalbar.add(verticalBarBrowser);
        return verticalbar;
    }
});
define('com/konymp/verticalbar/verticalbarConfig',[],function() {
    return {
        "properties": [{
            "name": "enableGrid",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "xAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lowValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGridAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "yAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "highValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
define('com/konymp/verticalbarCopy/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "cb6b24c0ac6840099fdb7f6a4af87198",
                    "assetName": "com.konymp.verticalbar",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "2b90b128899b43528dc1109e042784fe",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/verticalbarCopy/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2020 HCL Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Vertical Bar Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates vertical bar chart by taking the data as input
 */
define("com/konymp/verticalbarCopy/userverticalbarCopyController", ['com/konymp/verticalbar/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/verticalbar/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Vertical Bar Chart Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "verticalbar" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _titleFontSize: "12",
                _titleFontColor: "#000000",
                _bgColor: "#fff",
                _lowValue: "0",
                _highValue: "40",
                _xAxisTitle: "",
                _yAxisTitle: "",
                _enableGrid: true,
                _enableGridAnimation: true,
                _enableChartAnimation: true
            };
            this._chartData = [];
            this._chartTitle = "";
            this._enableStaticPreview = true;
            chart_barDS_defined_global = function(state) {
                if (state === 'ready') {
                    this.myPostShow();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
                konymp.logger.trace("----------Entering enableGrid Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGrid = val;
                konymp.logger.trace("----------Exiting enableGrid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGridAnimation", function(val) {
                konymp.logger.trace("----------Entering enableGridAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGridAnimation = val;
                konymp.logger.trace("----------Exiting enableGridAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering chartData Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartData = val.data;
                konymp.logger.trace("----------Exiting chartData Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "Title font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lowValue", function(val) {
                konymp.logger.trace("----------Entering lowValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._lowValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lowValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "highValue", function(val) {
                konymp.logger.trace("----------Entering highValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._highValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting highValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgroundColorCode",
                            "message": "Background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgroundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "xAxisTitle", function(val) {
                konymp.logger.trace("----------Entering xAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._xAxisTitle = val;
                konymp.logger.trace("----------Exiting xAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "yAxisTitle", function(val) {
                konymp.logger.trace("----------Entering yAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._yAxisTitle = val;
                konymp.logger.trace("----------Exiting yAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.verticalBarBrowser.onPageFinished = this.myPostShow.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createDonutChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (dataSet === undefined || dataSet === null) {
                    throw {
                        error: 'wrong dataType',
                        message: "wrong datatype passed to createChart"
                    };
                }
                var labels, colors, data, gridData;
                if (dataSet !== null && dataSet !== undefined && dataSet !== "") {
                    data = dataSet.map(function(obj) {
                        return Number(obj.Value || obj.value);
                    });
                    labels = dataSet.map(function(obj) {
                        return obj.label;
                    });
                    colors = dataSet.map(function(obj) {
                        var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
                        if (obj.colorCode === null || obj.colorCode === "" || (!regColorcode.test(obj.colorCode))) {
                            throw {
                                error: "wrong dataType",
                                message: "wrong colorCode for data " + JSON.stringify(obj.colorCode)
                            };
                        }
                        return obj.colorCode;
                    });
                } else if (this._chartData !== null && this._chartData !== undefined && this._chartData !== "") {
                    gridData = this._chartData;
                    data = gridData.map(function(obj) {
                        return Number(obj.Value || obj.value);
                    });
                    labels = gridData.map(function(obj) {
                        return obj.label;
                    });
                    colors = gridData.map(function(obj) {
                        return obj.colorCode;
                    });
                } else {
                    return false;
                }
                if (this.validateAllParams(this._chartTitle, data, labels, colors, this._chartProperties)) {
                    this.view.verticalBarBrowser.evaluateJavaScript('var chartObj = new konymp.charts.verticalBar(); chartObj.Generate_verticalChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ')');
                }
                konymp.logger.trace("----------Exiting createChart Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.error === "wrong dataType") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        validateData: function(data, type) {
            konymp.logger.trace("----------Entering validateData Function---------", konymp.logger.FUNCTION_ENTRY);
            if (type === 'array') {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return Array.isArray(data);
            } else if (typeof data === type) {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return true;
            } else {
                konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                return false;
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors, properties) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            if (!this.validateData(title, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for title " + title
                };
            }
            if (!this.validateData(data, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for data " + JSON.stringify(data)
                };
            }
            if (!this.validateData(labels, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for labels " + JSON.stringify(labels)
                };
            }
            if (!this.validateData(colors, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong dataType for bgColor " + JSON.stringify(colors)
                };
            }
            if (!this.validateData(properties._xAxisTitle, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for xAxisTitle " + JSON.stringify(properties._xAxisTitle)
                };
            }
            if (!this.validateData(properties._yAxisTitle, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for yAxisTitle " + JSON.stringify(properties._yAxisTitle)
                };
            }
            if (!this.validateData(properties._bgColor, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for bgColor " + JSON.stringify(properties._bgColor)
                };
            }
            if (!this.validateData(properties._lowValue, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for lowValue " + JSON.stringify(properties._lowValue)
                };
            }
            if (!this.validateData(properties._highValue, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for highValue " + JSON.stringify(properties._highValue)
                };
            }
            if (!this.validateData(properties._titleFontSize, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for titleFontSize " + JSON.stringify(properties._titleFontSize)
                };
            }
            if (!this.validateData(properties._titleFontColor, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "Wrong datatype for titleFontColor " + JSON.stringify(properties._titleFontColor)
                };
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        myPostShow: function() {
            try {
                if (this._enableStaticPreview) {
                    if (this._chartData !== undefined && this._chartData !== null && this._chartData.length > 0) this.createChart(this._chartData);
                    return;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        }
    };
});
define("com/konymp/verticalbarCopy/verticalbarCopyControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/verticalbarCopy/verticalbarCopyController", ["com/konymp/verticalbarCopy/userverticalbarCopyController", "com/konymp/verticalbarCopy/verticalbarCopyControllerActions"], function() {
    var controller = require("com/konymp/verticalbarCopy/userverticalbarCopyController");
    var actions = require("com/konymp/verticalbarCopy/verticalbarCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/verticalbarCopy/verticalbarCopy',[],function() {
    return function(controller) {
        var verticalbarCopy = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "verticalbarCopy",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "appName": "SKU2"
        }, controller.args[0], "verticalbarCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "verticalbarCopy"), extendConfig({}, controller.args[2], "verticalbarCopy"));
        verticalbarCopy.setDefaultUnit(voltmx.flex.DP);
        var verticalBarBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "verticalBarBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "CopyChart_vertical3/verticalBarChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "verticalBarBrowser"), extendConfig({}, controller.args[1], "verticalBarBrowser"), extendConfig({}, controller.args[2], "verticalBarBrowser"));
        verticalbarCopy.add(verticalBarBrowser);
        return verticalbarCopy;
    }
});
define('com/konymp/verticalbarCopy/verticalbarCopyConfig',[],function() {
    return {
        "properties": [{
            "name": "enableGrid",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "xAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lowValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGridAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "yAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "highValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/voltmxmp/multiseriesverticalbar/voltmxLogger',[],function() {
    /**
     * @module VoltmxLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the VoltmxLogger class
     * VoltmxLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  VoltmxLogger.js
     * @function VoltmxLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of VoltmxLogger class.
     * @description - This is the constructor for VoltmxLogger. 
     * This method initializes the instance created.
     **/
    var VoltmxLogger = function() {
        this.printMethod = voltmx.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": VoltmxLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "VoltmxLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  VoltmxLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    VoltmxLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  VoltmxLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    VoltmxLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** VoltmxLogger EventTypes**/
    VoltmxLogger.prototype.DEFAULT = 0;
    VoltmxLogger.prototype.FUNCTION_ENTRY = 1;
    VoltmxLogger.prototype.FUNCTION_EXIT = 2;
    VoltmxLogger.prototype.SUCCESS_CALLBACK = 3;
    VoltmxLogger.prototype.ERROR_CALLBACK = 4;
    VoltmxLogger.prototype.EXCEPTION = 5;
    VoltmxLogger.prototype.SERVICE_CALL = 6;
    VoltmxLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  VoltmxLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    VoltmxLogger.prototype.defaultLogLevel = VoltmxLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  VoltmxLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    VoltmxLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  VoltmxLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    VoltmxLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  VoltmxLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    VoltmxLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    VoltmxLogger.Utils = {};
    /**
     * @member of  VoltmxLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    VoltmxLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return VoltmxLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Multi-Series Vertical Bar Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates multi-series vertical bar chart by taking the data as input
 */
define("com/voltmxmp/multiseriesverticalbar/usermultiseriesverticalbarController", ['com/voltmxmp/multiseriesverticalbar/voltmxLogger'],function() {
    var voltmxLoggerModule = require('com/voltmxmp/multiseriesverticalbar/voltmxLogger');
    voltmxmp = {};
    voltmxmp.logger = new voltmxLoggerModule("multiseriesverticalbar Bar Chart Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            voltmxmp.logger.trace("----------Entering constructor---------", voltmxmp.logger.FUNCTION_ENTRY);
            this._chartProperties = {};
            this._chartTitle = "";
            this._chartProperties._xAxisTitle = "";
            this._chartProperties._yAxisTitle = "";
            this._chartProperties._titleFontColor = "#000000";
            this._chartProperties._titleFontSize = "12";
            this._chartProperties._bgColor = "#FFFFFF";
            this._chartProperties._enableGrid = true;
            this._chartProperties._enableGridAnimation = false;
            this._chartProperties._enableChartAnimation = true;
            this._chartProperties._lowValue = "0";
            this._chartProperties._highValue = "50";
            this._chartProperties._indicatorFontSize = "8";
            this._chartProperties._indicatorFontColor = "#000000";
            this._chartProperties._enableLegends = true;
            this._chartProperties._legendFontColor = "#000000";
            this._chartProperties._legendFontSize = "95%";
            this._chartProperties._enableStaticPreview = true;
            this._chartData = [];
            this._barDetails = [];
            chart_barMS_defined_global = function(state) {
                if (state === 'ready') {
                    this.showGridChart();
                }
            }.bind(this);
            voltmxmp.logger.trace("----------Exiting constructor---------", voltmxmp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            voltmxmp.logger.trace("----------Entering initGettersSetters Function---------", voltmxmp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            this.legendFontSizeFormat = /[0-9]*[0-9]{2}(%)/;
            defineSetter(this, "chartTitle", function(val) {
                voltmxmp.logger.trace("----------Entering chartTitle Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                voltmxmp.logger.trace("----------Exiting chartTitle Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                voltmxmp.logger.trace("----------Entering titleFontSize Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting titleFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "indicatorFontColor", function(val) {
                voltmxmp.logger.trace("----------Entering indicatorFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._indicatorFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidIndicatorFontColor",
                            "message": "Indicator font color code must be in hex format. Eg.:#000000/#000"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting titleFontColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                voltmxmp.logger.trace("----------Entering titleFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "The title font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting titleFontColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "indicatorFontSize", function(val) {
                voltmxmp.logger.trace("----------Entering indicatorFontSize Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._indicatorFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Indicator font size value should be a number"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting indicatorFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lowValue", function(val) {
                voltmxmp.logger.trace("----------Entering lowValue Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._lowValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting lowValue Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "highValue", function(val) {
                voltmxmp.logger.trace("----------Entering highValue Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._highValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting highValue Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                voltmxmp.logger.trace("----------Entering bgColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgoundColorCode",
                            "message": "The background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgoundColorCode") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting bgColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "xAxisTitle", function(val) {
                voltmxmp.logger.trace("----------Entering xAxisTitle Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._xAxisTitle = val;
                voltmxmp.logger.trace("----------Exiting xAxisTitle Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "yAxisTitle", function(val) {
                voltmxmp.logger.trace("----------Entering yAxisTitle Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._yAxisTitle = val;
                voltmxmp.logger.trace("----------Exiting yAxisTitle Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
                voltmxmp.logger.trace("----------Entering enableGrid Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGrid = val;
                voltmxmp.logger.trace("----------Exiting enableGrid Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                voltmxmp.logger.trace("----------Entering enableChartAnimation Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                voltmxmp.logger.trace("----------Exiting enableChartAnimation Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableLegends", function(val) {
                voltmxmp.logger.trace("----------Entering enableLegends Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableLegends = val;
                voltmxmp.logger.trace("----------Exiting enableLegends Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontSize", function(val) {
                voltmxmp.logger.trace("----------Entering legendFontSize Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (this.legendFontSizeFormat.test(val)) {
                        this._chartProperties._legendFontSize = val;
                    } else {
                        throw {
                            "Error": "WrongFormat",
                            "message": "Legend font size value should be a number followed by %"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "WrongFormat") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting legendFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontColor", function(val) {
                voltmxmp.logger.trace("----------Entering legendFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._legendFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLegendFontColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLegendFontColorCode") {
                        throw (exception);
                    }
                }
                voltmxmp.logger.trace("----------Exiting legendFontColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartData", function(val) {
                voltmxmp.logger.trace("----------Entering chartData Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartData = val.data;
                voltmxmp.logger.trace("----------Exiting chartData Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "barDetails", function(val) {
                voltmxmp.logger.trace("----------Entering barDetails Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._barDetails = val.data;
                voltmxmp.logger.trace("----------Exiting barDetails Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                voltmxmp.logger.trace("----------Entering enableStaticPreview Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableStaticPreview = val;
                voltmxmp.logger.trace("----------Exiting enableStaticPreview Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
            this.view.multiSeriesHbarBrowser.onPageFinished = this.showGridChart.bind(this);
            voltmxmp.logger.trace("----------Exiting initGettersSetters Function---------", voltmxmp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
         */
        createChart: function(dataSet, barDetails) {
            voltmxmp.logger.trace("----------Entering createChart Function---------", voltmxmp.logger.FUNCTION_ENTRY);
            try {
                var labels, colors, gridData;
                var data = [];
                if (arguments.length !== 2) {
                    throw {
                        "Error": "Wrong Params",
                        "message": "Wrong number of params passed."
                    };
                }
                if (dataSet !== null && dataSet !== undefined && dataSet !== "" && barDetails !== null && barDetails !== undefined && barDetails !== "") {
                    for (var count = 1; count <= 5; count++) {
                        try {
                            var temp = dataSet.map(function(count, obj) {
                                return obj['value' + count] || 0;
                            }.bind(this, count));
                            data.push({
                                data: temp,
                                name: barDetails[count - 1].legendName
                            });
                        } catch (e) {
                            voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
                        }
                    }
                    labels = dataSet.map(function(obj) {
                        return obj.label;
                    });
                    colors = barDetails.map(function(obj) {
                        return obj.color;
                    });
                }
                if (this.validateAllParams(this._chartTitle, data, labels, colors, this._chartProperties)) {
                    this.view.multiSeriesHbarBrowser.evaluateJavaScript('var chartObj = new voltmxmp.charts.msVbar(); chartObj.Generate_multiseriesVbarChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ')');
                    this.view.forceLayout();
                    voltmxmp.logger.trace("----------Exiting createChart Function---------", voltmxmp.logger.FUNCTION_EXIT);
                    return true;
                }
            } catch (exception) {
                voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                if (exception.Error === "Wrong Params") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        validateData: function(data, type) {
            voltmxmp.logger.trace("----------Entering validateData Function---------", voltmxmp.logger.FUNCTION_ENTRY);
            try {
                if (type == 'array') {
                    voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
                    return Array.isArray(data);
                } else if (typeof data === type) {
                    voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
                    return true;
                } else {
                    voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
                    return false;
                }
            } catch (exception) {
                voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
            }
            voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors, properties) {
            voltmxmp.logger.trace("----------Entering validateAllParams Function---------", voltmxmp.logger.FUNCTION_ENTRY);
            try {
                if (!this.validateData(title, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for title " + title
                    };
                }
                if (!this.validateData(data, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for data " + JSON.stringify(data)
                    };
                }
                if (!this.validateData(labels, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for labels " + JSON.stringify(labels)
                    };
                }
                if (!this.validateData(colors, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for bgColor " + JSON.stringify(colors)
                    };
                }
                if (!this.validateData(properties._xAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for xAxisTitle " + JSON.stringify(properties._xAxisTitle)
                    };
                }
                if (!this.validateData(properties._yAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for yAxisTitle " + JSON.stringify(properties._yAxisTitle)
                    };
                }
                if (!this.validateData(properties._bgColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for bgColor " + JSON.stringify(properties._bgColor)
                    };
                }
                if (!this.validateData(properties._titleFontSize, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for titleFontSize " + JSON.stringify(properties._titleFontSize)
                    };
                }
                if (!this.validateData(properties._titleFontColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for titleFontColor " + JSON.stringify(properties._titleFontColor)
                    };
                }
                if (!this.validateData(properties._highValue, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for highValue " + JSON.stringify(properties._highValue)
                    };
                }
                if (!this.validateData(properties._lowValue, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "wrong dataType for lowValue " + JSON.stringify(properties._lowValue)
                    };
                }
                if (!this.validateData(properties._legendFontColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for legendFontColor " + JSON.stringify(properties._legendFontColor)
                    };
                }
                if (!this.validateData(properties._legendFontSize, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for legendFontSize " + JSON.stringify(properties._legendFontSize)
                    };
                }
            } catch (exception) {
                voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                if (exception.Error === "Invalid Datatype") {
                    throw (exception);
                }
            }
            voltmxmp.logger.trace("----------Exiting validateAllParams Function---------", voltmxmp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function showGridChart
         * @param dataSet 
         * @description creates the chart with the data in the data grid on browser load
         */
        showGridChart: function() {
            try {
                if (this._chartProperties._enableStaticPreview && this._chartData.length > 0 && this._barDetails.length > 0) {
                    this.createChart(this._chartData, this._barDetails);
                } else {
                    throw {
                        "Error": "NoData",
                        "message": "No data in data grid"
                    };
                }
            } catch (exception) {
                if (exception.Error === "NoData") {
                    voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                }
            }
        }
    };
});
define("com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarController", ["com/voltmxmp/multiseriesverticalbar/usermultiseriesverticalbarController", "com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarControllerActions"], function() {
    var controller = require("com/voltmxmp/multiseriesverticalbar/usermultiseriesverticalbarController");
    var actions = require("com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/voltmxmp/multiseriesverticalbar/multiseriesverticalbar',[],function() {
    return function(controller) {
        var multiseriesverticalbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "multiseriesverticalbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox1",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SKU2"
        }, controller.args[0], "multiseriesverticalbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "multiseriesverticalbar"), extendConfig({}, controller.args[2], "multiseriesverticalbar"));
        multiseriesverticalbar.setDefaultUnit(voltmx.flex.DP);
        var multiSeriesHbarBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": false,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "multiSeriesHbarBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "chartist_MultiseriesVbar/multiseriesVbar.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "multiSeriesHbarBrowser"), extendConfig({}, controller.args[1], "multiSeriesHbarBrowser"), extendConfig({}, controller.args[2], "multiSeriesHbarBrowser"));
        multiseriesverticalbar.add(multiSeriesHbarBrowser);
        multiseriesverticalbar.compInstData = {}
        return multiseriesverticalbar;
    }
});
define('com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarConfig',[],function() {
    return {
        "properties": [{
            "name": "enableGrid",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "indicatorFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "barDetails",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "xAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lowValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "highValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableLegends",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "yAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "indicatorFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
define("CopyFBoxDemandRequest0baf5ada8ae3645", [],function() {
    return function(controller) {
        CopyFBoxDemandRequest0baf5ada8ae3645 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxDemandRequest0baf5ada8ae3645",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "s0b58ebf3fb8e34f",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxDemandRequest0baf5ada8ae3645.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "SKUID",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblName1",
            "isVisible": true,
            "left": "-3%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Name",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCategory1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblCategory1",
            "isVisible": true,
            "left": "-2%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Category",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblStock1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Stock",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForecasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForecasted1",
            "isVisible": true,
            "left": "-5%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Forecasted",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "EnrichedQTY",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequested1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequested1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Requested",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblStatus1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblStatus1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Status",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestedBY",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequestDate1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequestDate1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestDate",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblApprovedDate1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestDate",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxDemandRequest0baf5ada8ae3645.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, lblApprovedDate1);
        return CopyFBoxDemandRequest0baf5ada8ae3645;
    }
});
define("CopyFBoxDemandRequest0c2c1c51673ed4d", [],function() {
    return function(controller) {
        CopyFBoxDemandRequest0c2c1c51673ed4d = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxDemandRequest0c2c1c51673ed4d",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "s0b58ebf3fb8e34f",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxDemandRequest0c2c1c51673ed4d.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "SKUID",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblName1",
            "isVisible": true,
            "left": "-3%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Name",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCategory1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblCategory1",
            "isVisible": true,
            "left": "-2%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Category",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblStock1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Stock",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForecasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForecasted1",
            "isVisible": true,
            "left": "-5%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Forecasted",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "EnrichedQTY",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequested1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequested1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Requested",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblStatus1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblStatus1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "Status",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "-1%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestedBY",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRequestDate1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblRequestDate1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestDate",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblApprovedDate1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0j74c514d827c41",
            "text": "RequestDate",
            "top": "5dp",
            "width": "9.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxDemandRequest0c2c1c51673ed4d.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, lblApprovedDate1);
        return CopyFBoxDemandRequest0c2c1c51673ed4d;
    }
});
define("CopyFBoxProductline0b4828ae3534343", [],function() {
    return function(controller) {
        CopyFBoxProductline0b4828ae3534343 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0b4828ae3534343",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0h3ed0281c90f4d",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0b4828ae3534343.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0ccc6dae528d04c",
            "text": "ProductLine",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForcasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForcasted1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0ccc6dae528d04c",
            "text": "Forcasted",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblActual1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblActual1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0ccc6dae528d04c",
            "text": "Actual",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblVariance1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblVariance1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0ccc6dae528d04c",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0b4828ae3534343.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0b4828ae3534343;
    }
});
define("CopyFBoxProductline0cfaf586391c248", [],function() {
    return function(controller) {
        CopyFBoxProductline0cfaf586391c248 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0cfaf586391c248",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0f7297365fded43",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0cfaf586391c248.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0c0ad2c59aefc44",
            "text": "ProductLine",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForcasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForcasted1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0c0ad2c59aefc44",
            "text": "Forcasted",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblActual1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblActual1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0c0ad2c59aefc44",
            "text": "Actual",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblVariance1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblVariance1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0c0ad2c59aefc44",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0cfaf586391c248.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0cfaf586391c248;
    }
});
define("CopyFBoxProductline0g693a35b70844a", [],function() {
    return function(controller) {
        CopyFBoxProductline0g693a35b70844a = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0g693a35b70844a",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0d035211fab6944",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0g693a35b70844a.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
            "text": "ProductLine",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForcasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForcasted1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
            "text": "Forcasted",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblActual1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblActual1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
            "text": "Actual",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblVariance1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblVariance1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0b1a56103dd1040",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0g693a35b70844a.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0g693a35b70844a;
    }
});
define("CopyFBoxProductline0he56704eefde49", [],function() {
    return function(controller) {
        CopyFBoxProductline0he56704eefde49 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "CopyFBoxProductline0he56704eefde49",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sffa0fc45f1947b9841",
            "top": "0%",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0he56704eefde49.setDefaultUnit(voltmx.flex.DP);
        var lblProductLine1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblProductLine1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "ProductLine",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblForcasted1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblForcasted1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Forcasted",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblActual1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblActual1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Actual",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblVariance1 = new voltmx.ui.Label({
            "bottom": "0dp",
            "id": "lblVariance1",
            "isVisible": true,
            "left": "0%",
            "skin": "defDataPanelLabelSubHeadingDW0f6102bf4408a4d",
            "text": "Variance",
            "top": "5dp",
            "width": "24.5%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        CopyFBoxProductline0he56704eefde49.add(lblProductLine1, lblForcasted1, lblActual1, lblVariance1);
        return CopyFBoxProductline0he56704eefde49;
    }
});
define("myflxSegRowWithImageAndLabel", [],function() {
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
});
define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "SKU2"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
});
define("Flex0f834108d4cc042", [],function() {
    return function(controller) {
        var Flex0f834108d4cc042 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "Flex0f834108d4cc042",
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
        Flex0f834108d4cc042.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "1dp",
            "skin": "CopydefLabel0aca9109f5b8a4d",
            "text": "SKU ID",
            "top": "22dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "8dp",
            "skin": "CopydefLabel0b82dc6acc4fb45",
            "text": "Name",
            "top": "20dp",
            "width": "12%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCategory1 = new voltmx.ui.Label({
            "id": "lblCategory1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0ac9dd36920e847",
            "text": "Category",
            "top": "20dp",
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "id": "lblStock1",
            "isVisible": true,
            "left": "29dp",
            "skin": "CopydefLabel0c26aec5fbc0740",
            "text": "Stock",
            "top": "26dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblForecasted1 = new voltmx.ui.Label({
            "id": "lblForecasted1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0e9ecd4791be946",
            "text": "Forecasted",
            "top": "26dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "41dp",
            "skin": "CopydefLabel0cf619ed0268645",
            "text": "Enriched QTY",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequested1 = new voltmx.ui.Label({
            "id": "lblRequested1",
            "isVisible": true,
            "left": "47dp",
            "skin": "CopydefLabel0cc7e8040462441",
            "text": "Requested",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStatus1 = new voltmx.ui.Label({
            "id": "lblStatus1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0cfa912c41e194a",
            "text": "Status",
            "top": "26dp",
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0fdef3af8f8ae47",
            "text": "Requested By",
            "top": "19dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestDate1 = new voltmx.ui.Label({
            "id": "lblRequestDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Requested date",
            "top": "26dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate1 = new voltmx.ui.Label({
            "id": "lblApprovedDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0i8a7b2a6a59f4b",
            "text": "Approved Date",
            "top": "19dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Flex0f834108d4cc042.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, lblApprovedDate1);
        return Flex0f834108d4cc042;
    }
});
define("CopyFlex0ff43866586004c", [],function() {
    return function(controller) {
        var CopyFlex0ff43866586004c = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "CopyFlex0ff43866586004c",
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
        CopyFlex0ff43866586004c.setDefaultUnit(voltmx.flex.DP);
        var lblSKUID1 = new voltmx.ui.Label({
            "id": "lblSKUID1",
            "isVisible": true,
            "left": "7dp",
            "skin": "CopydefLabel0aca9109f5b8a4d",
            "text": "SKU ID",
            "top": "22dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName1 = new voltmx.ui.Label({
            "id": "lblName1",
            "isVisible": true,
            "left": "28dp",
            "skin": "CopydefLabel0b82dc6acc4fb45",
            "text": "Name",
            "top": "20dp",
            "width": "12%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCategory1 = new voltmx.ui.Label({
            "id": "lblCategory1",
            "isVisible": true,
            "left": "34dp",
            "skin": "CopydefLabel0ac9dd36920e847",
            "text": "Category",
            "top": "21dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStock1 = new voltmx.ui.Label({
            "id": "lblStock1",
            "isVisible": true,
            "left": "32dp",
            "skin": "CopydefLabel0c26aec5fbc0740",
            "text": "Stock",
            "top": "26dp",
            "width": "4%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblForecasted1 = new voltmx.ui.Label({
            "id": "lblForecasted1",
            "isVisible": true,
            "left": "27dp",
            "skin": "CopydefLabel0e9ecd4791be946",
            "text": "Forecasted",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEnrichedQTY1 = new voltmx.ui.Label({
            "id": "lblEnrichedQTY1",
            "isVisible": true,
            "left": "35dp",
            "skin": "CopydefLabel0cf619ed0268645",
            "text": "Enriched QTY",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequested1 = new voltmx.ui.Label({
            "id": "lblRequested1",
            "isVisible": true,
            "left": "33dp",
            "skin": "CopydefLabel0cc7e8040462441",
            "text": "Requested",
            "top": "26dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStatus1 = new voltmx.ui.Label({
            "id": "lblStatus1",
            "isVisible": true,
            "left": "31dp",
            "skin": "CopydefLabel0cfa912c41e194a",
            "text": "Status",
            "top": "26dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestedBY1 = new voltmx.ui.Label({
            "id": "lblRequestedBY1",
            "isVisible": true,
            "left": "26dp",
            "skin": "CopydefLabel0fdef3af8f8ae47",
            "text": "Requested By",
            "top": "19dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRequestDate1 = new voltmx.ui.Label({
            "id": "lblRequestDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Requested date",
            "top": "18dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApprovedDate1 = new voltmx.ui.Label({
            "id": "lblApprovedDate1",
            "isVisible": true,
            "left": "24dp",
            "skin": "CopydefLabel0d1dbad73a99642",
            "text": "Approved Date",
            "top": "19dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgeye = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgeye",
            "isVisible": true,
            "left": "14dp",
            "skin": "slImage",
            "src": "eye.png",
            "top": "19dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgtick = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgtick",
            "isVisible": true,
            "left": "-2dp",
            "skin": "slImage",
            "src": "tick.png",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgcross = new voltmx.ui.Image2({
            "height": "33dp",
            "id": "imgcross",
            "isVisible": true,
            "left": "-3dp",
            "skin": "slImage",
            "src": "cross.jpg",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlex0ff43866586004c.add(lblSKUID1, lblName1, lblCategory1, lblStock1, lblForecasted1, lblEnrichedQTY1, lblRequested1, lblStatus1, lblRequestedBY1, lblRequestDate1, lblApprovedDate1, imgeye, imgtick, imgcross);
        return CopyFlex0ff43866586004c;
    }
});
define("userCopyFBoxDemandRequest0baf5ada8ae3645Controller", {
    //Type your controller code here 
});
define("CopyFBoxDemandRequest0baf5ada8ae3645ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxDemandRequest0baf5ada8ae3645Controller", ["userCopyFBoxDemandRequest0baf5ada8ae3645Controller", "CopyFBoxDemandRequest0baf5ada8ae3645ControllerActions"], function() {
    var controller = require("userCopyFBoxDemandRequest0baf5ada8ae3645Controller");
    var controllerActions = ["CopyFBoxDemandRequest0baf5ada8ae3645ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxDemandRequest0c2c1c51673ed4dController", {
    //Type your controller code here 
});
define("CopyFBoxDemandRequest0c2c1c51673ed4dControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxDemandRequest0c2c1c51673ed4dController", ["userCopyFBoxDemandRequest0c2c1c51673ed4dController", "CopyFBoxDemandRequest0c2c1c51673ed4dControllerActions"], function() {
    var controller = require("userCopyFBoxDemandRequest0c2c1c51673ed4dController");
    var controllerActions = ["CopyFBoxDemandRequest0c2c1c51673ed4dControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxProductline0b4828ae3534343Controller", {
    //Type your controller code here 
});
define("CopyFBoxProductline0b4828ae3534343ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxProductline0b4828ae3534343Controller", ["userCopyFBoxProductline0b4828ae3534343Controller", "CopyFBoxProductline0b4828ae3534343ControllerActions"], function() {
    var controller = require("userCopyFBoxProductline0b4828ae3534343Controller");
    var controllerActions = ["CopyFBoxProductline0b4828ae3534343ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxProductline0cfaf586391c248Controller", {
    //Type your controller code here 
});
define("CopyFBoxProductline0cfaf586391c248ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxProductline0cfaf586391c248Controller", ["userCopyFBoxProductline0cfaf586391c248Controller", "CopyFBoxProductline0cfaf586391c248ControllerActions"], function() {
    var controller = require("userCopyFBoxProductline0cfaf586391c248Controller");
    var controllerActions = ["CopyFBoxProductline0cfaf586391c248ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxProductline0g693a35b70844aController", {
    //Type your controller code here 
});
define("CopyFBoxProductline0g693a35b70844aControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxProductline0g693a35b70844aController", ["userCopyFBoxProductline0g693a35b70844aController", "CopyFBoxProductline0g693a35b70844aControllerActions"], function() {
    var controller = require("userCopyFBoxProductline0g693a35b70844aController");
    var controllerActions = ["CopyFBoxProductline0g693a35b70844aControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFBoxProductline0he56704eefde49Controller", {
    //Type your controller code here 
});
define("CopyFBoxProductline0he56704eefde49ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFBoxProductline0he56704eefde49Controller", ["userCopyFBoxProductline0he56704eefde49Controller", "CopyFBoxProductline0he56704eefde49ControllerActions"], function() {
    var controller = require("userCopyFBoxProductline0he56704eefde49Controller");
    var controllerActions = ["CopyFBoxProductline0he56704eefde49ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("usermyflxSegRowWithImageAndLabelController", {
    //Type your controller code here 
});
define("myflxSegRowWithImageAndLabelControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("myflxSegRowWithImageAndLabelController", ["usermyflxSegRowWithImageAndLabelController", "myflxSegRowWithImageAndLabelControllerActions"], function() {
    var controller = require("usermyflxSegRowWithImageAndLabelController");
    var controllerActions = ["myflxSegRowWithImageAndLabelControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userFlex0f834108d4cc042Controller", {
    //Type your controller code here 
});
define("Flex0f834108d4cc042ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Flex0f834108d4cc042Controller", ["userFlex0f834108d4cc042Controller", "Flex0f834108d4cc042ControllerActions"], function() {
    var controller = require("userFlex0f834108d4cc042Controller");
    var controllerActions = ["Flex0f834108d4cc042ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userCopyFlex0ff43866586004cController", {
    //Type your controller code here 
});
define("CopyFlex0ff43866586004cControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyFlex0ff43866586004cController", ["userCopyFlex0ff43866586004cController", "CopyFlex0ff43866586004cControllerActions"], function() {
    var controller = require("userCopyFlex0ff43866586004cController");
    var controllerActions = ["CopyFlex0ff43866586004cControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','com/hclsoftwareu/hamburgermenu/hamburgermenuController','com/hclsoftwareu/hamburgermenu/hamburgermenu','com/konymp/linechart/analytics','com/konymp/linechart/konyLogger','com/konymp/linechart/linechartController','com/konymp/linechart/linechart','com/konymp/linechart/linechartConfig','com/konymp/piechart/analytics','com/konymp/piechart/konyLogger','com/konymp/piechart/piechartController','com/konymp/piechart/piechart','com/konymp/piechart/piechartConfig','com/konymp/verticalbar/analytics','com/konymp/verticalbar/konyLogger','com/konymp/verticalbar/verticalbarController','com/konymp/verticalbar/verticalbar','com/konymp/verticalbar/verticalbarConfig','com/konymp/verticalbarCopy/analytics','com/konymp/verticalbarCopy/konyLogger','com/konymp/verticalbarCopy/verticalbarCopyController','com/konymp/verticalbarCopy/verticalbarCopy','com/konymp/verticalbarCopy/verticalbarCopyConfig','com/voltmxmp/multiseriesverticalbar/voltmxLogger','com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarController','com/voltmxmp/multiseriesverticalbar/multiseriesverticalbar','com/voltmxmp/multiseriesverticalbar/multiseriesverticalbarConfig','CopyFBoxDemandRequest0baf5ada8ae3645','CopyFBoxDemandRequest0c2c1c51673ed4d','CopyFBoxProductline0b4828ae3534343','CopyFBoxProductline0cfaf586391c248','CopyFBoxProductline0g693a35b70844a','CopyFBoxProductline0he56704eefde49','myflxSegRowWithImageAndLabel','flxSampleRowTemplate','flxSectionHeaderTemplate','Flex0f834108d4cc042','CopyFlex0ff43866586004c','CopyFBoxDemandRequest0baf5ada8ae3645Controller','CopyFBoxDemandRequest0c2c1c51673ed4dController','CopyFBoxProductline0b4828ae3534343Controller','CopyFBoxProductline0cfaf586391c248Controller','CopyFBoxProductline0g693a35b70844aController','CopyFBoxProductline0he56704eefde49Controller','myflxSegRowWithImageAndLabelController','flxSampleRowTemplateController','flxSectionHeaderTemplateController','Flex0f834108d4cc042Controller','CopyFlex0ff43866586004cController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

