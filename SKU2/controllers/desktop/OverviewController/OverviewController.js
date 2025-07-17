define({
  
  pieChartFromSegment: function () {
    try {
      var rawData = this.view.segDemandRequest.data;
      kony.print("Raw Segment Data: " + JSON.stringify(rawData));

      var categoryTotals = {};
      var totalRequestedQty = 0;

      // Group Requested Qty by Category
      rawData.forEach(function (item) {
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
      this.view.piechart.chartData = { data: chartData };
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
    let asc = this.sortDirectionMap[fieldKey] === undefined
      ? true
      : this.sortDirectionMap[fieldKey];

    data.sort((a, b) => {
      const textA = (a[fieldKey].text || "").toLowerCase();
      const textB = (b[fieldKey].text || "").toLowerCase();
      return asc
        ? textA.localeCompare(textB)
        : textB.localeCompare(textA);
    });
    this.view.segDemandRequest.setData(data);
    this.sortDirectionMap[fieldKey] = !asc;
  },
  
  filterData: function(){
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
          	kony.print("Item what"+JSON.stringify(item.Category));
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