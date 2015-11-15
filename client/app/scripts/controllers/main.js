"use strict";

define([
	"angular",
	"uiRouter",
	"services/httpService",
	"services/todoistService"
], function(angular, uiRouter) {
	var ctrlDependencies = [
		"$scope",
		"$state",
		"alveoHttpService",
		"todoistService",
		ctrl
	];
	function ctrl(scope, $state, http) {
		scope.data = "Hello";

		http.get("/api/todoist/getItems").then(function(response) {
			console.log(response);
		}, function(error) {
			console.err(error);
		});
	}

	return angular.module("myApp.main",[
		"ui.router",
		"alveoHttp"
	]).
	config(["$stateProvider", function($stateProvider) {
		$stateProvider.
		state("main", {
			"url"	: "/main",
			"views"	: {
				"main"	: {
					"templateUrl"	: "views/main.html",
					"controller"	: "MainCtlr"
				}
			}
		});
	}]).
	controller("MainCtlr", ctrlDependencies);
});
