function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "menu/" + s : s.substring(0, index) + "/menu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    var Widget = new (require("alloy/widget"))("menu");
    this.__widgetId = "menu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuView = Ti.UI.createView({
        height: 0,
        zIndex: 2001,
        top: 0,
        id: "menuView"
    });
    $.__views.menuView && $.addTopLevelView($.__views.menuView);
    $.__views.tblMenu = Ti.UI.createTableView({
        minRowHeight: 52,
        backgroundColor: "gray",
        separatorColor: "#4f4f4f",
        right: 5,
        width: 220,
        zIndex: 2001,
        id: "tblMenu"
    });
    $.__views.menuView.add($.__views.tblMenu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuOpen = false;
    var buttonId = "";
    var totalItems = 0;
    var openAnimation = Ti.UI.createAnimation({
        top: 0,
        duration: 200
    });
    var closeAnimation = Ti.UI.createAnimation({
        top: -240,
        duration: 200
    });
    $.init = function(args) {
        var menuData = args.MenuLinks;
        totalItems = menuData.length;
        buttonId = args.buttonId;
        buttonId.addEventListener("click", function() {
            menuOpen ? $.closeMenu() : $.openMenu();
        });
        var menuTableData = [];
        _.each(menuData, function(item) {
            var menuItem = {
                id: item.id,
                title: item.title,
                image: item.image,
                clickEvent: item.clickEvent
            };
            var rowCtrl = Widget.createController("menuItemRow", menuItem).getView();
            menuTableData.push(rowCtrl);
        });
        $.tblMenu.setData(menuTableData);
        $.tblMenu.addEventListener("click", function(e) {
            e.row.clickEvent();
            $.closeMenu();
        });
    };
    exports.openMenu = function() {
        var rowHeight = $.tblMenu.getMinRowHeight();
        $.menuView.height = rowHeight * totalItems;
        $.menuView.setZIndex = 2001;
        $.menuView.animate(openAnimation);
        menuOpen = true;
    };
    exports.closeMenu = function() {
        var rowHeight = $.tblMenu.getMinRowHeight();
        $.menuView.height = rowHeight * totalItems;
        $.menuView.setZIndex = 2001;
        $.menuView.animate(closeAnimation);
        menuOpen = false;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;