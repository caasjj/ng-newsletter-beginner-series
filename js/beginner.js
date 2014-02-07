var app = angular.module('myApp', []),
apiKey = 'MDExODQ2OTg4MDEzNzQ5OTM4Nzg5MzFiZA001',
nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', ['$scope', '$http', function($scope, $http) {
  var audio = document.createElement('audio');
  $scope.audio = audio;
  $scope.playing = false;
  $scope.play = function(program) {
    $scope.audio.pause();
    if (program) {
      $scope.audio.src = program.audio[0].format.mp4.$text;
    }
    $scope.audio.play();
    $scope.playing = true;
  };

  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };

  audio.src = 'http://pd.npr.org/npr-mp4/npr/sf/2013/07/20130726_sf_05.mp4?orgId=1&topicId=1032&ft=3&f=61';

  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
    $scope.programs = data.list.story;
  }).error(function(data, status) {
  });

}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);

// Parent scope
app.controller('FrameController', ['$scope', function($scope) {

}]);