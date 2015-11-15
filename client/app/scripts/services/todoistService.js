"use strict";

define([
	"angular"
], function(angular) {
	return angular.module("alveoHttp")
	.service("todoistService", ["alveoHttpService",
	function(http) {
		var server = "https://todoist.com/API/v6/sync";

		var clientId = "fabf7266f1474e6ba4362dc7d072f4f0";
		var secret = "superSpoooooooky";
		var scope = "data:read_write";

		var token = "e3ce717c188dec1e93be254aac9709859438a609";

		this.getItems = function() {
			return http.get(server, {
				"token": token,
				"seq_no": 0,
				"resource_types": '["all"]'
			});
		};
	}]);
});