'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl',['$scope','$route', function($scope, $route) {

	angular.isUndefinedOrNull = function(val){ return angular.isUndefined(val) || val === null}
	$scope.agent = {
		name: 'Andy Cook',
		position: 'PlusOne Agent',
		pc: "Agent PC",
		mc: "Agent MC"
	};

	$scope.templates = [{
		name: 'Activity Feed',
			url: "partials/all.html"}, // 0
			{
				name: 'Calls Reports',
			url: 'partials/calls.html'}, //1
			{
				name: 'Training Sheets',
			url: 'partials/training.html'}, //2
			{
				name: 'Time Clock',
			url: 'partials/timeclock.html'},//3
			{
				name: 'Other Items',
			url: 'partials/other.html'}, //4
			{
				name: 'Calendar',
			url: 'partials/calendar.html'}, //5
			{
				name: 'Design',
			url: 'partials/design.html'}]; //6

			if (angular.isUndefinedOrNull($scope.template))
			{
				console.log("template was not set");
				$scope.template = $scope.templates[0];
			}


			$scope.updateTmp = function(tmp)
			{
				$scope.template = $scope.templates[tmp];
				return false;
			}

			$scope.oneAtATime = true;

			$scope.groups = [
			{
				title: "Dynamic Group Header - 1",
				content: "Dynamic Group Body - 1",
				isopen: false
			},
			{
				title: "Dynamic Group Header - 2",
				content: "Dynamic Group Body - 2",
				isopen: false
			}
			];

			$scope.items = ['Item 1', 'Item 2', 'Item 3'];

			$scope.addItem = function()
			{
				var newItemNo = $scope.items.length + 1;
				$scope.items.push('Item ' + newItemNo);
			};
		}]);
