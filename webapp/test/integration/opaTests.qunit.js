/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"training/SAP-UI5-Training/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});