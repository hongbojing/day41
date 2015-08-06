angular.module('myApp',[])
.controller('CalendarController',function($scope){
  $scope.tab=1;
  $scope.setTab=function(param){
    $scope.tab=param;
  };
  $scope.isSet=function(param){
    return $scope.tab===param;
  };
})
;
