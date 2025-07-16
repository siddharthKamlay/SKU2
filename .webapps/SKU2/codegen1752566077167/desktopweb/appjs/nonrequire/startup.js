voltmx.appinit.setApplicationMetaConfiguration("appid", "SKUProject");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "SKUProject",
    appName: "SKUProject",
    appVersion: "1.0.0",
    isturlbase: "https://m100004609002.demo-hclvoltmx.net/services",
    isDebug: true,
    hotReloadURL: "ws://172.26.176.1:9099",
    isMFApp: true,
    appKey: "341c66538550d0efe25b7aedeb781c6a",
    appSecret: "d17a8e5ba7334c8f3a94e81e23fedafb",
    serviceUrl: "https://100004609.auth.demo-hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100004609.auth.demo-hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://m100004609002.demo-hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000019807CC3828",
        "appId": "f6d7779f-9f00-4e51-9a53-83684bb70e20",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "SKU Demand",
        "reportingsvc": {
            "session": "https://m100004609002.demo-hclvoltmx.net/services/IST",
            "custom": "https://m100004609002.demo-hclvoltmx.net/services/CMS"
        },
        "baseId": "3d1d04d1-bce0-4ca2-9d1e-5a00c49658af",
        "app_default_version": "1.0",
        "services_meta": {
            "SKUDemandRequestsSid": {
                "offline": false,
                "metadata_url": "https://m100004609002.demo-hclvoltmx.net/services/metadata/v1/SKUDemandRequestsSid",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://m100004609002.demo-hclvoltmx.net/services/data/v1/SKUDemandRequestsSid"
            },
            "SKUDemandRequests": {
                "offline": false,
                "metadata_url": "https://m100004609002.demo-hclvoltmx.net/services/metadata/v1/SKUDemandRequests",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://m100004609002.demo-hclvoltmx.net/services/data/v1/SKUDemandRequests"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: [],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 9500,
        FormControllerSyncLoad: false,
        strictMode: false,
        isCompositeApp: false,
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: voltmx.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        require(['applicationController'], function(appController) {
            applicationController = appController;
            voltmx.application.setApplicationInitializationEvents({
                init: applicationController.appInit,
                postappinit: applicationController.postAppInitCallBack,
                showstartupform: function() {
                    new voltmx.mvc.Navigation("DemandRequestFrm").navigate();
                }
            });
        });
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    voltmx.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl,
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
debugger;