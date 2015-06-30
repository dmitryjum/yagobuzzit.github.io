var myApp = angular.module('myApp', [
  'ui.router',
  'yagoPageControllers',
  'yagoDirectives',
  'ui.bootstrap',
  'door3.css'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.
  state('root', {
    url: "/",
    templateUrl: 'partials/video.html',
    controller: 'VideoController',
    css: 'css/video.css'
  }).
  state('admin', {
    url: "/admin",
    templateUrl: 'partials/admin.html',
    css: 'css/admin.css'
  }).
  state('admin.personal', {
    url: "/admin/personal",
    controller: 'AdminPersonalController',
    templateUrl: 'partials/admin_personal.html',
    css: 'css/admin.css'
  }).
  state('admin.content', {
    url: "/admin/content",
    controller: 'AdminContentController',
    templateUrl: 'partials/admin_content.html',
    css: 'css/admin.css'
  })
}]);