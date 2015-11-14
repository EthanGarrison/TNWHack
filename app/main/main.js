"use strict";

define([
	"angular",
	"uiRouter",
	"app/services/httpService"
], function(angular, uiRouter) {
	return angular.module("myApp.main",[
		"ui.router",
		"alveoHttp"
	]).
	config(["$stateProvider", function($stateProvider) {
		$stateProvider.
		state("main", {
			"url"	: "",
			"views"	: {
				"main"	: {
					"template"		: "<h1>{{data}}</h1>",
					"controller"	: "MainCtlr"
				}
			}
		});
	}]).
	controller("MainCtlr", ["$scope", "$state", "alveoHttpService",
	function(scope, $state, http) {
		scope.data = "Hello";

		var clientId = "fabf7266f1474e6ba4362dc7d072f4f0";
		var secret = "superSpoooooooky";
		var scope = "data:read_write";

		var token = "abfa1ecd1bc109f0a965cc577550ef909e03fd60";

		http.post("", {
			"token": token,
			"commands": '[{"type": "item_add","args": {"content": "TestTask"}'
		}).then(function(response) {
			console.log(response);
		}).then(function(error) {
			console.log(response);
		})
	}]);
});
