(function(){
  'use strict';

  angular.module('myApp',[])

  .controller('UController', UController);

  function UController($scope,$filter){
    $scope.name = "";
    $scope.counter = 0;

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.displayNumeric = function(){
      var inputCount = calculateString($scope.name) ;
      $scope.counter = inputCount;
    };

    function calculateString(string){
      var stringValue = 0;
      for(var i = 0; i<string.length;i++){
        stringValue += string.charCodeAt(i);
      }
      return stringValue;
    };
  };
})();
