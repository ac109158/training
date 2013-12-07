'use strict';

/* Directives */


angular.module('myApp.directives', []).
	directive('secHeader', function() {
		return {
			restrict: "E",
			template: '<div style="width:360px;"><span style=" width:33%;margin-left:30%;">{{template.name}}</span></div>'
		};
	});
