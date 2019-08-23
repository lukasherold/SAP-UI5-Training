/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"training/SAP-UI5-Training/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});