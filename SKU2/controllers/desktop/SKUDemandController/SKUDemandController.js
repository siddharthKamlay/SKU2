define({ 

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
