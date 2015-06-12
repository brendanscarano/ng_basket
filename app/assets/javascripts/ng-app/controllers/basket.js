angular.module('BasketCtrl', [
  'getBaskets', 
  'newBasketButtonDirective'
])

.controller('BasketCtrl', ['$scope', '$http', 'getUsersBaskets', function(
  $scope,
  $http,
  getUsersBaskets
) {

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });

  // move this logic to the basket-button-directive
  $scope.createBasket = function() {

    var promise = $http({
      url: 'http://localhost:3000/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: $scope.newBasketName
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $scope.baskets.push(response);
      
      $scope.showForm = false;
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()

}])