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
define(function() {
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
          
            chart_barMS_defined_global = function(state){
              if(state ==='ready'){
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
                  	if(!isNaN(parseInt(val))) {
                      	this._chartProperties._titleFontSize = val;
                    }
                  	else {
                      	throw {"Error": "NotNumber", "message": "Title font size value should be a number"};
                    }
                }
              	catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                  	if(exception.Error === "NotNumber") {
                      	throw(exception);
                    }
                }
        		voltmxmp.logger.trace("----------Exiting titleFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "indicatorFontColor", function(val) {
        		voltmxmp.logger.trace("----------Entering indicatorFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        		try {
          			if(this.hexCodeFormat.test(val)) {
          	  			this._chartProperties._indicatorFontColor = val;
          			}
          			else {
            			throw {"Error": "InvalidIndicatorFontColor", "message": "Indicator font color code must be in hex format. Eg.:#000000/#000"};
          			}
        		}
        		catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
          			if(exception.Error === "InvalidTitleFontColorCode") {
            			throw(exception);
          			}
        		}
        		voltmxmp.logger.trace("----------Exiting titleFontColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "titleFontColor", function(val) {
        		voltmxmp.logger.trace("----------Entering titleFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        		try {
          			if(this.hexCodeFormat.test(val)) {
            			this._chartProperties._titleFontColor = val;
          			}
          			else {
            			throw {"Error": "InvalidTitleFontColorCode", "message": "The title font color code must be in hex format. Eg.:#000000"};
          			}
        		}
        		catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
          			if(exception.Error === "InvalidTitleFontColorCode") {
            			throw(exception);
          			}
        		}
        		voltmxmp.logger.trace("----------Exiting titleFontColor Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "indicatorFontSize", function(val) {
        		voltmxmp.logger.trace("----------Entering indicatorFontSize Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
              	try {
                  	if(!isNaN(parseInt(val))) {
                      	this._chartProperties._indicatorFontSize = val;
                    }
                  	else {
                      	throw {"Error": "NotNumber", "message": "Indicator font size value should be a number"};
                    }
                }
              	catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                  	if(exception.Error === "NotNumber") {
                      	throw(exception);
                    }
                }
        		voltmxmp.logger.trace("----------Exiting indicatorFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "lowValue", function(val) {
        		voltmxmp.logger.trace("----------Entering lowValue Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        		try {
          			if(!isNaN(parseInt(val))) {
            			this._chartProperties._lowValue = val;
          			}
          			else {
            			throw {"Error": "NotNumber", "message": "Low/High value should be a number"};
          			}
        		}
        		catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
          			if(exception.Error === "NotNumber") {
            			throw(exception);
          			}
        		}
        		voltmxmp.logger.trace("----------Exiting lowValue Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "highValue", function(val) {
        		voltmxmp.logger.trace("----------Entering highValue Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        		try {
          			if(!isNaN(parseInt(val))) {
            			this._chartProperties._highValue = val;
          			}
          			else {
            			throw {"Error": "NotNumber", "message": "Low/High value should be a number"};
          			}
        		}
        		catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
          			if(exception.Error === "NotNumber") {
            			throw(exception);
          			}
        		}
        		voltmxmp.logger.trace("----------Exiting highValue Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      		});
      		defineSetter(this, "bgColor", function(val) {
        		voltmxmp.logger.trace("----------Entering bgColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        		try {
          			if(this.hexCodeFormat.test(val)) {
            			this._chartProperties._bgColor = val;
          			}
          			else {
            			throw {"Error": "InvalidBackgoundColorCode", "message": "The background color code must be in hex format. Eg.:#000000"};
          			}
        		}
        		catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
          			if(exception.Error === "InvalidBackgoundColorCode") {
            			throw(exception);
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
                  	if(this.legendFontSizeFormat.test(val)) {
                      	this._chartProperties._legendFontSize = val;
                    }
                  	else {
                      	throw {"Error": "WrongFormat", "message": "Legend font size value should be a number followed by %"};
                    }
                }
              	catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                  	if(exception.Error === "WrongFormat") {
                      	throw(exception);
                    }
                }
              	voltmxmp.logger.trace("----------Exiting legendFontSize Setter---------", voltmxmp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "legendFontColor", function(val) {
              	voltmxmp.logger.trace("----------Entering legendFontColor Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
              	try {
                  	if(this.hexCodeFormat.test(val)) {
                      	this._chartProperties._legendFontColor = val;
                    }
                  	else {
                      	throw {"Error": "InvalidLegendFontColorCode", "message": "The color code must be in hex format. Eg.:#000000"};
                    }
                }
              	catch(exception) {
                  	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
                  	if(exception.Error === "InvalidLegendFontColorCode") {
                      	throw(exception);
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
        		if(arguments.length!==2) {
           			throw {"Error": "Wrong Params", "message": "Wrong number of params passed."};
          		}
        		if(dataSet !== null && dataSet !== undefined && dataSet !== "" && barDetails !== null && barDetails !== undefined && barDetails !== "") {
          			for(var count=1;count<=5;count++) {
            			try {
            				var temp = dataSet.map(function(count,obj) {
              					return obj['value'+count]||0;
            				}.bind(this,count));
            				data.push({data: temp ,name: barDetails[count-1].legendName});
              			}
                      	catch(e) {
                          	voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
              			}
          			}          
          			labels = dataSet.map(function(obj){
            			return obj.label;
          			});
          			colors = barDetails.map(function(obj){
            			return obj.color;
          			});
        		}
        		if(this.validateAllParams(this._chartTitle, data, labels, colors, this._chartProperties)) {
          			this.view.multiSeriesHbarBrowser.evaluateJavaScript('var chartObj = new voltmxmp.charts.msVbar(); chartObj.Generate_multiseriesVbarChart(' +
                                                            JSON.stringify(this._chartTitle) + ',' +
                                                            JSON.stringify(labels) + ',' +
                                                            JSON.stringify(data) + ',' +
                                                            JSON.stringify(colors) + ',' +
                                                            JSON.stringify(this._chartProperties) + ')');
                  	this.view.forceLayout();
        			voltmxmp.logger.trace("----------Exiting createChart Function---------", voltmxmp.logger.FUNCTION_EXIT);
                  	return true;
        		}
      		}
      		catch(exception) {
              	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
        		if(exception.Error==="Wrong Params") {
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
        		if(type == 'array') {
          			voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
          			return Array.isArray(data);
        		}
        		else if(typeof data === type) {
          			voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
          			return true;
        		}
        		else {
          			voltmxmp.logger.trace("----------Exiting validateData Function---------", voltmxmp.logger.FUNCTION_EXIT);
          			return false;
        		}
      		}
      		catch(exception) {
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
        		if(!this.validateData(title,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for title " + title};
        		}
        		if(!this.validateData(data,'array')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for data " + JSON.stringify(data)};
        		}
        		if(!this.validateData(labels,'array')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for labels " + JSON.stringify(labels)};
        		}
        		if(!this.validateData(colors,'array')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for bgColor " + JSON.stringify(colors)};
        		}	
        		if(!this.validateData(properties._xAxisTitle,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for xAxisTitle " + JSON.stringify(properties._xAxisTitle)};
        		}
        		if(!this.validateData(properties._yAxisTitle,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for yAxisTitle " + JSON.stringify(properties._yAxisTitle)};
        		}
        		if(!this.validateData(properties._bgColor,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for bgColor " + JSON.stringify(properties._bgColor)};
        		}
        		if(!this.validateData(properties._titleFontSize,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for titleFontSize " + JSON.stringify(properties._titleFontSize)};
        		}
        		if(!this.validateData(properties._titleFontColor,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for titleFontColor " + JSON.stringify(properties._titleFontColor)};
        		}
        		if(!this.validateData(properties._highValue,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for highValue " + JSON.stringify(properties._highValue)};
        		}
        		if(!this.validateData(properties._lowValue,'string')) {
          			throw {"Error": "Invalid Datatype", "message": "wrong dataType for lowValue " + JSON.stringify(properties._lowValue)};
        		}
              	if(!this.validateData(properties._legendFontColor, 'string')) {
              		throw {"Error": "Invalid Datatype", "message": "Wrong dataType for legendFontColor " + JSON.stringify(properties._legendFontColor)};
            	}
          		if(!this.validateData(properties._legendFontSize, 'string')) {
              		throw {"Error": "Invalid Datatype", "message": "Wrong dataType for legendFontSize " + JSON.stringify(properties._legendFontSize)};
            	}
      		}
      		catch(exception) {
              	voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
        		if(exception.Error === "Invalid Datatype") {
          			throw(exception);
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
        		if(this._chartProperties._enableStaticPreview && this._chartData.length>0 && this._barDetails.length>0) {
          			this.createChart(this._chartData,this._barDetails);
        		}
        		else {
          			throw {"Error": "NoData", "message": "No data in data grid"};
        		}
      		}
      		catch(exception) {
        		if(exception.Error === "NoData") {
          			voltmxmp.logger.error(JSON.stringify(exception), voltmxmp.logger.EXCEPTION);
        		}
      		}
    	}
  	};
});