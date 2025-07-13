/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
voltmxmp = {};
voltmxmp.charts = voltmxmp.charts || {};

voltmxmp.charts.msVbar = function(){

};

voltmxmp.charts.msVbar.prototype.createClass = function(name, rules) {
	var style = document.createElement('style');
  	style.type = 'text/css';
  	document.getElementsByTagName('head')[0].appendChild(style);
  	if(!(style.sheet||{}).insertRule) 
    	(style.styleSheet || style.sheet).addRule(name, rules);
  	else
    	style.sheet.insertRule(name+"{"+rules+"}",0);
};

voltmxmp.charts.msVbar.prototype.createMultiseriesVbarChart_UI = function(labels, series, colors, properties) {
  	var myNode = document.getElementById("legends");
  	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
  	}
  	var pluginSet = [];
  	pluginSet.push(Chartist.plugins.ctAxisTitle({
        axisX: {
          	axisTitle: properties._xAxisTitle,
          	axisClass: 'ct-barlabelhzntl',
          	offset: {
            	x: 0,
            	y: 33
          	},
          	textAnchor: 'middle'
        },
        axisY: {
          	axisTitle: properties._yAxisTitle,
          	axisClass: 'ct-barlabelhzntl',
          	offset: {
            	x: 0,
            	y: 13.5
          	},
          	textAnchor: 'middle',
          	flipTitle: true
        }
    }));
  	if(properties._enableLegends) {
    	pluginSet.push(Chartist.plugins.legend({
        	horizontalAlign: "right",
        	clickable: false,
        	position: document.getElementById('legends')
      	}));
    }
  	var chart = new Chartist.Bar('#chart', {
    	labels: labels,
    	series: series
  	}, {
    	axisX: {
      		showLabel: true,
      		showGrid: true,
    	},
    	axisY: {
      		showLabel: true,
      		showGrid: true
    	},
    	low: parseFloat(properties._lowValue),
    	high: parseFloat(properties._highValue),
    	showArea: false,
    	plugins: pluginSet,
    	chartPadding: { 	  
      		right: 10,
      		left: 20
    	}
  	});

  	var seq = 0, delay = 80, duration = 300;
	var colorCount = 97;
  
  	chart.on('created', function() {
    	seq = 0;
  	});
  
  	chart.on('draw', function(context) {
    	if(!properties._enableGrid) {
      		if(context.type === 'grid' && context.index !== 0) {
        		context.element.remove();
      		} 
    	}
    	if(properties._enableGridAnimation===true && properties._enableGrid===true) {
      		seq++;
    	}
    	if(context.type === 'bar') {
       		var barHorizontalCenter, barVerticalCenter, label, value;
      		barHorizontalCenter = context.x1 + (context.element.width());
      		barVerticalCenter = context.y1 - (context.element.height());
      		value = context.element.attr('ct:value');
      		var width = document.getElementById('chart').offsetWidth;
      		if (value !== '0') {
        		label = new Chartist.Svg('text');
        		label.text(value);
        		label.addClass('ct-barlabel');
        		if(Number(value)<0) {
          			barHorizontalCenter = context.x2;
          			barVerticalCenter = context.y1+(context.element.height())+15;	
        		}
        		else {
          			barHorizontalCenter = barHorizontalCenter;
          			barVerticalCenter = barVerticalCenter-5;
        		}
        		label.attr({
          			x: barHorizontalCenter,
          			y: barVerticalCenter,
          			'text-anchor': 'middle'
        		});
        		colorCount++;  
        		context.group.append(label);
      		}
          	if(properties._enableChartAnimation) {
      			context.element.attr({
        			style: 'stroke-width: 0px;'
      			});
      			var strokeWidth = 12;
      			context.element.animate({
        			y2: {
          				begin: duration + (seq*duration)/3,
          				dur: duration,
          				from: context.y1,
          				to: context.y2,
          				easing: Chartist.Svg.Easing.easeOutSine
        			},
        			'stroke-width': {
          				begin:  duration + (seq*duration)/3,
          				dur: 1,
          				from: 0,
          				to: strokeWidth,
          				fill: 'freeze'
        			}
      			}, false);	
            }
    	}
    	if(properties._enableGrid===true && properties._enableGridAnimation === true && context.type === 'grid') {
      		var pos1Animation = {
        		begin: seq * delay,
        		dur: duration,
        		from: context[context.axis.units.pos + '1'] - 30,
        		to: context[context.axis.units.pos + '1'],
        		easing: 'easeOutQuart'
      		};
      		var pos2Animation = {
        		begin: seq * delay,
        		dur: duration,
        		from: context[context.axis.units.pos + '2'] - 100,
        		to: context[context.axis.units.pos + '2'],
        		easing: 'easeOutQuart'
      		};
      		var animations = {};
      		animations[context.axis.units.pos + '1'] = pos1Animation;
      		animations[context.axis.units.pos + '2'] = pos2Animation;
      		animations['opacity'] = {
        		begin: seq * delay,
        		dur: duration,
        		from: 0,
        		to: 1,
        		easing: 'easeOutQuart'
      		};
      		context.element.animate(animations);
   	}
  	});
  	
  	chart.on('created', function() {
    	if(window.__exampleAnimateTimeout) {
      		clearTimeout(window.__exampleAnimateTimeout);
      		window.__exampleAnimateTimeout = null;
    	} 	
  	});
};

voltmxmp.charts.msVbar.prototype.Updatecss = function(colors, prop) {
  	var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
  	try {
    	this.createClass('.ct-barlabel',"fill: "+prop._indicatorFontColor+"; font-size: "+(parseInt(prop._indicatorFontSize)*10)+"% ;");
    	for(var i in colors) {
      		if(colors[i] !== "" && regColorcode.test(colors[i])) {
              	this.createClass('.ct-legend .ct-series-'+i,'font-family:Arial, Helvetica, sans-serif; color:'+ prop._legendFontColor+'; font-size:'+ prop._legendFontSize + ';');
              	this.createClass('.ct-legend .ct-series-'+i+':before',"  background-color:"+colors[i]+"; border-color:"+colors[i]+";");
        		var _char = String.fromCharCode(parseInt(97 + Number(i)));
        		this.createClass('.ct-series-' + _char + ' .ct-bar', " stroke: " + colors[i]+";");
        		this.createClass('.ct-series-' + _char + '.ct-indicator-horizontal',"fill: "+colors[i]+";");
      		}
      		else {
        		throw {"Error": "InvalidColorCode", "message": "Color code for bars should be in hex format. Eg.:#000000"};
      		}
    	}
  	}
  	catch(exception) {
    	if(exception.Error === "InvalidColorCode") {
      		throw(exception);
    	}
  	}
};

voltmxmp.charts.msVbar.prototype.Generate_multiseriesVbarChart = function(title, labels, data, colors, properties) {
  	if(document.readyState === "complete") {
    	document.ontouchmove = function(e) {
      		e.preventDefault();
    	};
    	document.getElementById('lblTitle').style.color = properties._titleFontColor || '#000000';
    	document.getElementById('lblTitle').style.fontSize = properties._titleFontSize !== undefined ? parseInt(properties._titleFontSize)*10+'%' : '120%';
    	document.getElementById('lblTitle').style.fontFamily = 'Arial, Helvetica, sans-serif';
    	document.getElementById('lblTitle').innerHTML = title;
    	document.body.style.backgroundColor = properties._bgColor || '#FFFFFF'; 
    	this.Updatecss(colors, properties);
    	this.createMultiseriesVbarChart_UI(labels, data, colors, properties);
    	return true;
  	}
  	else {
    	return false;
  	}
};

var drawCanvasChart = function() {
  	console.log(navigator.userAgent);
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	return true;
    }
  	var data = [
    	{"label": "d1", "value1": "25", "value2": "12", "value3": "8", "value4": "32", "value5": "5"},
    	{"label": "d2", "value1": "12", "value2": "32", "value3": "36", "value4": "10", "value5": "22"},
    	{"label": "d3", "value1": "22", "value2": "3", "value3": "15", "value4": "8", "value5": "24"}
  	];
  	var  colors = [
    	{"color": "#1B9ED9", "legendName": "color1"},
    	{"color": "#76C044", "legendName": "color2"},
    	{"color": "#E8672B", "legendName": "color3"},
    	{"color": "#464648", "legendName": "color4"},
    	{"color": "#FFC522", "legendName": "color5"}
  	];
  	var Data = [];
  	for(var i=1;i<=5;i++) {
    	var temp = data.map(function(i,obj) {
      		return obj['value'+i]||0;
   		}.bind(this,i));
    	Data[i-1] ={data:temp,name:colors[i-1].legendName};
  	}
    var labels = data.map(function(obj) {
      return obj.label;
    });
    colors = colors.map(function(obj) {
      return obj.color;
    });
  	var properties = {
    	_titleFontSize: 15,
    	_titleFontColor: "#000000",
    	_bgColor: "#fff",
    	_lowValue: 0,
    	_highValue: 40,
    	_xAxisTitle: 'data',
    	_yAxisTitle: 'value',
    	_enableGrid: true,
    	_enableChartAnimation: true,
    	_indicatorFontSize: 8,
    	_indicatorFontColor: "#000000",
      	_enableLegends: true,
      	_legendFontColor: "#000000",
      	_legendFontSize: "95%",
      	_enableStaticPreview: true
  	};
  	var x = new voltmxmp.charts.msVbar();
  	x.Generate_multiseriesVbarChart("Vertical Bar", labels, Data, colors, properties);
};

window.addEventListener("DOMContentLoaded", function() {
  setTimeout(onbodyload, 0);
}.bind(this), false);


onbodyload = function(){
   if(typeof voltmx=='object' && voltmx!==null) {
    var href =window.location.href.substring(0,4);
    if(href === 'file'){
        var state = [];
        state.push('ready');
        voltmx.evaluateJavaScriptInNativeContext("chart_barMS_defined_global",JSON.stringify(state));
    }else{
        voltmx.evaluateJavaScriptInNativeContext("chart_barMS_defined_global('ready')");
    }
  }  
  else{
    drawCanvasChart();
  }
}.bind(this);
