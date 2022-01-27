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
});
