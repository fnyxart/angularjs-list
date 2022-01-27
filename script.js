angular.module("listApp", [])
  .controller("GuestListController", function($scope)  {
    $scope.items = ["Super Guest", "Questionable Guest", "Adventurous Guest"];
    $scope.newItem = "";
    $scope.pushItem = function () {
      if ($scope.newItem != "") {
        $scope.items.push($scope.newItem);
        $scope.newItem = "";
      }
    }
    $scope.deleteItem = function(index) {
      $scope.items.splice(index, 1);
    }
});
