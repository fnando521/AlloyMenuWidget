function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "menu/" + s : s.substring(0, index) + "/menu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("menu");
    this.__widgetId = "menu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuItemRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.imgImage = Ti.UI.createImageView({
        width: 30,
        left: 10,
        id: "imgImage"
    });
    $.__views.__alloyId0.add($.__views.imgImage);
    $.__views.lblTitle = Ti.UI.createLabel({
        color: "white",
        left: 50,
        id: "lblTitle"
    });
    $.__views.__alloyId0.add($.__views.lblTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblTitle.text = args.title || "";
    $.imgImage.image = args.image;
    $.row.clickEvent = args.clickEvent;
    $.row.dataId = args.id;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;