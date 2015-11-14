"use strict";

define([
	"angular",
	"uiRouter",
	"services/httpService"
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
					"templateUrl"	: "views/main.html",
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

		var token = "e3ce717c188dec1e93be254aac9709859438a609";

		http.post("", {
			"token": token,
			"seq_no": 0,
			"resource_types": '["all"]'
		}).then(function(response) {
			console.log(response);
		}, function(error) {
			console.log(response);
		})
	}]);
});
