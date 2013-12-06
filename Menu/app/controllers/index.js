
if(OS_ANDROID) {
	$.master.getView().open();
}
else if(OS_IOS) {
	Ti.API.info('Running');
	Alloy.Globals.navGroup = $.navGroup;
	//$.index.open();
	$.navGroup.open();
}
else {
	// MobileWeb not supported
}