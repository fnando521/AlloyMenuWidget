


$.masterWindow.addEventListener('open', function() {
	loadMenu();
});


function loadMenu() {
	var menuData = [{ id: "1", title: "Home", image: "/images/help.png", clickEvent: _.bind(loadLinkItem, { ctrlName: "home", openInNavGroup: 'home' }) },
					{ id: "2", title: "Modal Example", image: "/images/help.png", clickEvent: _.bind(loadLinkItem, { ctrlName: "link1", openInNavGroup: false }) },
					{ id: "3", title: "Slide Left", image: "/images/help.png", clickEvent: _.bind(loadLinkItem, { ctrlName: "link2", openInNavGroup: true  }) },
					{ id: "4", title: "Open TableView", image: "/images/help.png", clickEvent: _.bind(loadLinkItem, { ctrlName: "link3", openInNavGroup: 'other'  }) }
	];

	$.menuWidget.init({
		MenuLinks: menuData,
		buttonId: ((OS_IOS) ? $.btnMenu : $.btnAndroidMenu)
	});
}

function loadLinkItem(returnVal) {
	var ctrlWindow;
	
	if(this.openInNavGroup == 'home') {
		$.genericContainer.setVisible(false);
		$.windowContainer.setVisible(true);
	}
	else if(this.openInNavGroup == 'other')
	{	
		ctrlWindow = Alloy.createController(this.ctrlName).getView();
		$.windowContainer.setVisible(false);
		$.genericContainer.add(ctrlWindow);
		$.genericContainer.setVisible(true);
	}
	else {
		ctrlWindow = Alloy.createController(this.ctrlName).getView();
		
		if(this.openInNavGroup && OS_IOS) {
			Alloy.Globals.navGroup.open(ctrlWindow, { animated: true });
		}
		else {
			ctrlWindow.open();
		}
	}
}

