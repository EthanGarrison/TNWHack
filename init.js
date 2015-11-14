"use strict";

define([
	"angular",
	"uiRouter",
	"app/services/httpService",
	"app/main/main"
], function(angular, uiRouter) {
	return angular.module("myApp",[
		"ui.router",
		"myApp.main",
		"alveoHttp"
	]).
	config(["$stateProvider", function($stateProvider) {

	}]);
});
