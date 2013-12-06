function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "link1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.link1Win = Ti.UI.createWindow({
        id: "link1Win",
        modal: "true",
        backgroundColor: "blue"
    });
    $.__views.link1Win && $.addTopLevelView($.__views.link1Win);
    $.__views.btnClose = Ti.UI.createButton({
        id: "btnClose",
        title: "Done"
    });
    $.__views.link1Win.rightNavButton = $.__views.btnClose;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btnClose.addEventListener("click", function() {
        $.link1Win.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;