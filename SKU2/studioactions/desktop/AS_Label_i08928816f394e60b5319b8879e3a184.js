function AS_Label_i08928816f394e60b5319b8879e3a184(eventobject, x, y) {
    var self = this;

    function _ide_onTouchEnd_g9e96f5dd50f43bca4e9815454b73f54_Callback() {}
    self.view.FlexContainerSideMenu.animate(
    voltmx.ui.createAnimation({
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
        "duration": 0.25
    }, {
        "animationEnd": _ide_onTouchEnd_g9e96f5dd50f43bca4e9815454b73f54_Callback
    });
}