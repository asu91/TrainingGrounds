angular.module('mvp.entryCtrl',[])
  .controller('EntryController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.number = {};
    $scope.total = 0;
    $scope.incrementNumber = function(){
      // EntryFactory.create($scope.number);
      console.log(typeof $scope.number.deadlift)
      $scope.total += $scope.number.deadlift
      console.log('triggers')
    }
  });