'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  	controller('AppCtrl',['$scope','$route', function($scope, $route) {
		$scope.agent = {
		  name: 'Andy Cook',
		  position: 'PlusOne Agent',
		  pc: "Agent PC",
		  mc: "Agent MC"
		};

		$scope.templates = [{
			name: 'Activity Feed',
			url: "partials/all.html"},
		{
			name: 'Calls Reports',
			url: 'partials/calls.html'},
		{
			name: 'Training Sheets',
			url: 'partials/training.html'},
		{
			name: 'Time Clock',
			url: 'partials/timeclock.html'},
		{
			name: 'Other Items',
			url: 'partials/other.html'}];

		$scope.template = $scope.templates[0];


		$scope.updateTmp = function(tmp) 
		{
		  $scope.template = $scope.templates[tmp];
		}

		$scope.oneAtATime = true;

		$scope.groups = [
		{
			title: "Dynamic Group Header - 1",
			content: "Dynamic Group Body - 1"
		},
		{
			title: "Dynamic Group Header - 2",
			content: "Dynamic Group Body - 2"
		}
		];

		$scope.items = ['Item 1', 'Item 2', 'Item 3'];

		$scope.addItem = function() 
		{
			var newItemNo = $scope.items.length + 1;
			$scope.items.push('Item ' + newItemNo);
		};
	}]);