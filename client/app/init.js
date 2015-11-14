"use strict";

define([
	"angular",
	"uiRouter",
	"services/httpService",
	"controllers/main"
], function(angular, uiRouter) {
	return angular.module("myApp",[
		"ui.router",
		"myApp.main",
		"alveoHttp"
	]).
	config(["$stateProvider", function($stateProvider) {

	}]);
});
