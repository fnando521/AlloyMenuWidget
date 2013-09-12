function Controller() {
    function loadMenu() {
        var menuData = [ {
            id: "1",
            title: "Home",
            image: "/images/help.png",
            clickEvent: _.bind(loadLinkItem, {
                ctrlName: "home",
                openInNavGroup: "home"
            })
        }, {
            id: "2",
            title: "Modal Example",
            image: "/images/help.png",
            clickEvent: _.bind(loadLinkItem, {
                ctrlName: "link1",
                openInNavGroup: false
            })
        }, {
            id: "3",
            title: "Slide Left",
            image: "/images/help.png",
            clickEvent: _.bind(loadLinkItem, {
                ctrlName: "link2",
                openInNavGroup: true
            })
        }, {
            id: "4",
            title: "Open TableView",
            image: "/images/help.png",
            clickEvent: _.bind(loadLinkItem, {
                ctrlName: "link3",
                openInNavGroup: "other"
            })
        } ];
        $.menuWidget.init({
            MenuLinks: menuData,
            buttonId: $.btnAndroidMenu
        });
    }
    function loadLinkItem() {
        var ctrlWindow;
        if ("home" == this.openInNavGroup) {
            $.genericContainer.setVisible(false);
            $.windowContainer.setVisible(true);
        } else if ("other" == this.openInNavGroup) {
            ctrlWindow = Alloy.createController(this.ctrlName).getView();
            $.windowContainer.setVisible(false);
            $.genericContainer.add(ctrlWindow);
            $.genericContainer.setVisible(true);
        } else {
            ctrlWindow = Alloy.createController(this.ctrlName).getView();
            this.openInNavGroup && false ? Alloy.Globals.navGroup.open(ctrlWindow, {
                animated: true
            }) : ctrlWindow.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.masterWindow = Ti.UI.createWindow({
        backgroundImage: "/images/main-bg.gif",
        backgroundRepeat: "true",
        titleImage: "",
        barColor: "white",
        modal: false,
        exitOnClose: true,
        navBarHidden: true,
        id: "masterWindow"
    });
    $.__views.masterWindow && $.addTopLevelView($.__views.masterWindow);
    $.__views.btnMenu = Ti.UI.createButton({
        width: 25,
        height: 25,
        backgroundImage: "/images/menu.png",
        backgroundSelectedImage: "/images/menuSelected.png",
        id: "btnMenu"
    });
    $.__views.masterWindow.rightNavButton = $.__views.btnMenu;
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: 60,
        backgroundColor: "white",
        zIndex: 2e3,
        id: "header"
    });
    $.__views.masterWindow.add($.__views.header);
    $.__views.imgPlaceHolder = Ti.UI.createImageView({
        image: "",
        id: "imgPlaceHolder"
    });
    $.__views.header.add($.__views.imgPlaceHolder);
    $.__views.btnAndroidMenu = Ti.UI.createButton({
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        backgroundImage: "/images/menu.png",
        backgroundSelectedImage: "/images/menuSelected.png",
        id: "btnAndroidMenu"
    });
    $.__views.header.add($.__views.btnAndroidMenu);
    $.__views.headerBottomBorder = Ti.UI.createView({
        top: 61,
        borderColor: "red",
        borderWidth: 1,
        height: 2,
        zIndex: 2e3,
        id: "headerBottomBorder"
    });
    $.__views.masterWindow.add($.__views.headerBottomBorder);
    $.__views.menuWidget = Alloy.createWidget("menu", "widget", {
        id: "menuWidget",
        __parentSymbol: $.__views.masterWindow
    });
    $.__views.menuWidget.setParent($.__views.masterWindow);
    $.__views.windowContainer = Ti.UI.createView({
        top: 63,
        id: "windowContainer",
        backgroundColor: "orange"
    });
    $.__views.masterWindow.add($.__views.windowContainer);
    $.__views.__alloyId3 = Ti.UI.createView({
        id: "__alloyId3"
    });
    $.__views.windowContainer.add($.__views.__alloyId3);
    $.__views.lblDefault = Ti.UI.createLabel({
        id: "lblDefault",
        text: "Default Landing View"
    });
    $.__views.__alloyId3.add($.__views.lblDefault);
    $.__views.genericContainer = Ti.UI.createView({
        visible: false,
        id: "genericContainer"
    });
    $.__views.masterWindow.add($.__views.genericContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.masterWindow.addEventListener("open", function() {
        loadMenu();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;