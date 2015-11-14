/***************************************************************************
 * Alveo Http Service
 *
 * Seperated from the other services simply because it is, in a sense, the
 * parent to the other services.  Also allowed me to guarantee that setting
 * the default headers will not screw anything up.
 ***************************************************************************/
define([
	"angular",
	"uiRouter",
],function(angular) {
	return angular.module("alveoHttp",['ui.router'])
	.run(['$http', '$window', function($http, $window) {
		// function getToken() {
		// 	return $window.localStorage.tokenKey || "";
		// }
		function addCommonHeader(header, value) {
			$http.defaults.headers.common[header] = value;
		}
		// addCommonHeader("Content-Type", "application/json");
	}])
	.service('alveoHttpService', ['$http', '$q', '$state', function($http, $q, $state) {

		var server = "https://todoist.com/API/v6/sync";

		function send(url, method, params) {
			var deferred = $q.defer();
			$http({
				url: url,
				method: method,
				params: (method === "GET" || method === "DELETE") ? params : undefined,
				data: method !== "GET" ? JSON.stringify(params) : undefined
			}).then(function(response) {
	            deferred.resolve(response.data);
			}, function(error) {
				console.log(error);
			});

			return deferred.promise;
		}

		// GET Request Method
		this.get = function(url, params) {
			return send(url, "GET", params);
		};

		// POST Request Method
		this.post = function(url, json) {
			return send(server+url, "POST", json);
		};

		// PUT Request Method
		this.put = function(url, json) {
			return send(server+url, "PUT", json);
		};

		// DELETE Request Method
		this['delete'] = function(url, json) {
			return send(server+url, "DELETE", json);
		};
	}]);
});