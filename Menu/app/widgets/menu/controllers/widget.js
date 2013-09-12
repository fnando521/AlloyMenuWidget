
/*
 *  The Menu Widget provides a sliding View attached to a RightNavButton in the Navigation Bar.
 *  This control closely resembles the menu in the app 'Running with Friends' for iOS.
 *  
 *  This widget works on iOS and has not yet been designed/implemented to work with Android.
 *  Comments/Updates are much appreciated.
 * 
 *  Version: 1.0
 *  GitHub: https://github.com/fnando521/AlloyMenuWidget
 *  License: Free
 *  Author: Ferdinando Cammarota
 *  Supported Platforms: iOS, Android
 * 
 * # Add the menu to your Alloy project
 * 
 * In your applications config.json include the following line in your dependencies:
 *  
 * "dependencies": {
        "menu": "1.0"
    }
 * 
 * 
 * # Initialize the button in the controller
 * 
 * <Widget id="menuWidget" src="menu" />
 * 
 *  Example index.xml for your View may look like this:
 * 	   <Alloy>
 *		<Window id="defaultWindow">
 *			<RightNavButton>
 *				<Button id="btnMenu"></Button>
 *			</RightNavButton>
 *			<Widget id="menuWidget" src="menu" />
 *		</Window>
 *	</Alloy>
 * 
 *  # When your window opens you can instantiate the menu as below:
 *
 *  $.menuWidget.init({
		MenuLinks: menuData,
		buttonId: ((OS_IOS) ? $.btnMenu : $.btnAndroidMenu)
	});
 * 
 *  Where menuData = [{id: "id", title: "myButton1", image: "/images/myImage.png", clickEvent: function(e) { alert("one"); }}
 * 
 * 
 * # Binding: use the underscore.js library to bind your callbacks to the clickEvent
 * 
 * $.menuWidget.init({
 * 		MenuLinks: [{id: 'one', title: 'link1', image: '/images/image.png', clickEvent: _bind(function clickMe(e) { alert(this.one), this) }},
 * 		buttonId: $.btnMenu
 * 	});
 * 
 * # Styles
 * Menu/TableView colors and styles is not currently supported but these can be modified in the actual widget .tss file
 * 
 */


// Instantiate needed variables
var menuOpen = false;
var buttonId = '';
var totalItems = 0;

var openAnimation = Ti.UI.createAnimation({
	top: ((OS_IOS) ? 0: 63),
	duration: 200,
});

var closeAnimation = Ti.UI.createAnimation({
	top: ((OS_IOS) ? -240: -219),
	duration: 200
});

$.init = function(args) {
	// Data format: args = [{id: id, title: text, image: imageUrl, clickEvent: function(e) { alert("one"); }}
	
	// setup the proper height for the table View
	var menuData = args.MenuLinks;
	totalItems = menuData.length;
	buttonId = args.buttonId;

    buttonId.addEventListener('click', function() {
		
		if(menuOpen)
		{
			$.closeMenu(); 
		}
		else
		{
			
		 	$.openMenu();
		}
	});
	
	var menuTableData = [];
	_.each(menuData, function(item) {
	  	var menuItem = {
			id: item.id,
        	title: item.title,
        	image: item.image,
        	clickEvent: item.clickEvent
      	};
	  	var rowCtrl = Widget.createController('menuItemRow', menuItem).getView();
	  	menuTableData.push(rowCtrl);
	});
	$.tblMenu.setData(menuTableData);
	
	$.tblMenu.addEventListener('click', function(e) {
		
		// Invoke the row click fn
		e.row.clickEvent(); 

		// Close the menu
		$.closeMenu(); 
	});
};

exports.openMenu = function() {
	
	var rowHeight = ((OS_IOS) ? $.tblMenu.getMinRowHeight() : 52);
	$.menuView.height = rowHeight*totalItems;
	$.menuView.setZIndex = 2001;
	$.menuView.animate(openAnimation);
	
	menuOpen = true;
};

exports.closeMenu = function() {

	var rowHeight = ((OS_IOS) ? $.tblMenu.getMinRowHeight() : 52);
	$.menuView.height = rowHeight*totalItems;
	$.menuView.setZIndex = 2001;
	$.menuView.animate(closeAnimation);
	
	
	menuOpen = false;
};
