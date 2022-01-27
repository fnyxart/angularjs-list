angular.module("listApp", [])
  .controller("GuestListController", function($scope)  {
    $scope.items = ["Super Guest", "Questionable Guest", "Adventurous Guest"];
    $scope.newItem = "";
});
