define({
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
        voltmx.mvc.registry.add("DemandRequestFrm", {
            "viewName": "DemandRequestFrm",
            "controllerName": "DemandRequestFrmController"
        });
        voltmx.mvc.registry.add("LoginFrm", {
            "viewName": "LoginFrm",
            "controllerName": "LoginFrmController"
        });
        voltmx.mvc.registry.add("ProductLinefrm", {
            "viewName": "ProductLinefrm",
            "controllerName": "ProductLinefrmController"
        });
        voltmx.mvc.registry.add("SKUDemand", {
            "viewName": "SKUDemand",
            "controllerName": "SKUDemandController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("DemandRequestFrm").navigate();
    }
});