function AS_Label_adef7f078c76408e9c72b4a1031d80a1(eventobject, x, y) {
    var self = this;

    function _ide_onTouchEnd_i29e669cb9c742e0aa48e0fa084cc5b5_Callback() {}
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
        "animationEnd": _ide_onTouchEnd_i29e669cb9c742e0aa48e0fa084cc5b5_Callback
    });
}