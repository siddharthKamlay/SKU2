define("com/hclsoftwareu/hamburgermenu/userhamburgermenuController", function() {
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
