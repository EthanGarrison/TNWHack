(function(requirejs) {
'use strict';

requirejs.config({
	"baseUrl"	: "lib",
	"paths"		: {
		"app"			: "..",
		"controllers"	: "../scripts/controllers",
		"services"		: "../scripts/services",
		"angular"		: "angular/angular.min",
		"uiRouter"		: "angular-ui-router/release/angular-ui-router.min"
	},
	"shim"		: {
		"angular"	: {
			"exports"	: "angular"
		},
		"uiRouter" : ["angular"]
	},
	"priority"	: [
		"angular"
	]
});

require([
	'angular',
	'app/init'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);

})(requirejs);