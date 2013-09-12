
if(OS_ANDROID) {
	$.master.getView().open();
}
else if(OS_IOS) {
	Alloy.Globals.navGroup = $.navGroup;
	$.index.open();
}
else {
	// MobileWeb not supported
}