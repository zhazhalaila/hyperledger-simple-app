
'use strict';

var app = angular.module('application', []);

// Angular Controller
app.controller('appController', function($scope, appFactory){

	$("#success_holder").hide();
	$("#success_create").hide();
	$("#error_holder").hide();
	$("#error_query").hide();
	$scope.querySource = function(){
		var id = $scope.query_id;
		appFactory.querySource(id, function(data){
			$scope.query_source = data;
			if ($scope.query_tuna == "Could not locate tuna"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}
	$scope.queryPart = function(){
		var id = $scope.query_id;
		appFactory.queryPart(id, function(data){
			$scope.part_source = data;
			if ($scope.query_tuna == "Could not locate tuna"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}
	$scope.queryTransit = function(){
		var id = $scope.query_id;
		appFactory.queryTransit(id, function(data){
			$scope.transit_source = data;
			if ($scope.query_tuna == "Could not locate tuna"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}
});

app.factory('appFactory', function($http){
	var factory = {};
	factory.querySource = function(id, callback){
    	$http.get('/source/'+id).success(function(output){
			callback(output)
		});
	}
	factory.queryPart = function(id, callback){
    	$http.get('/part/'+id).success(function(output){
			callback(output)
		});
	}
	factory.queryTransit = function(id, callback){
    	$http.get('/transit/'+id).success(function(output){
			callback(output)
		});
	}
	return factory;
});
