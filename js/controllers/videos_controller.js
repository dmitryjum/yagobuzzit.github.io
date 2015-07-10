angular.module('YagoApp').controller('VideoController', ['$scope', '$http', '$css', 'Video', function($scope, $http, $css, Video) {
  // the following http request will slow down scope.videos loading,
  // but scope.$watch inside of masonry directive will handle it
  Video.query(function(data) {
    $scope.videos = data;
  });
  $scope.name = "Yago";
  $scope.address = "Some Place, 666, Minsk, Belarus"
  $scope.email = "email@email.com";
}]);