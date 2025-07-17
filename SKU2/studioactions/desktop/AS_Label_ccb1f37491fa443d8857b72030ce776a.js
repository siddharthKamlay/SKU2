function AS_Label_ccb1f37491fa443d8857b72030ce776a(eventobject, x, y) {
    var self = this;

    function _ide_onTouchEnd_ia54d0f426044f22bd718b9f49eaa193_Callback() {}
    self.view.FlexContaineroverview.animate(
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
        "duration": 1
    }, {
        "animationEnd": _ide_onTouchEnd_ia54d0f426044f22bd718b9f49eaa193_Callback
    });
}