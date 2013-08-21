'use strict';

/* App Module */

angular.module('ld-activity', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/activity', {templateUrl: 'partials/activity-view.html',   controller: ActivityViewCtrl}).
      when('/activity/:id', {templateUrl: 'partials/activity-edit.html', controller: ActivityEditCtrl}).
      otherwise({redirectTo: '/activity'});
}]);
