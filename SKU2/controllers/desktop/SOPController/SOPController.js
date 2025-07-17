define({
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

    var barDetails = [
      {
        legendName: "Forecasted",
        color: "#7b61ff"
      },
      {
        legendName: "Actual",
        color: "#ff4dc4"
      }
    ];

    // Set chart properties
    this.view.barchart.chartTitle = "Product Line Performance";
    this.view.barchart.xAxisTitle = "Product Line";
    this.view.barchart.yAxisTitle = "Revenue";

    // Set the chartData and barDetails
    this.view.barchart.chartData = { data: chartData };
    this.view.barchart.barDetails = { data: barDetails };

    // Draw the chart using the createChart() function
    this.view.barchart.createChart(chartData, barDetails);
  }
});