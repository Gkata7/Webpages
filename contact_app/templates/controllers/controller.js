var myApp = angular.module('myApp', []);
myApp.controller('contactApp', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function(){
    $http.get('/contacts').then(function(response){
      $scope.contacts = response.data;
    });
  };

  refresh();

    $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contacts', $scope.contact).then(function(response){
        $scope.contact = "";
        console.log(response.data);
        refresh();
      });
    };

    $scope.remove = function(id){
      console.log(id);
      $http.delete('/contacts/' + id).then(function(response){
        refresh();
      });
    };

    $scope.edit = function(id){
      console.log(id);
      $http.get('/contacts/' + id).then(function(response){
        $scope.contact = response.data;
      })
    };
    $scope.update = function(){
      console.log($scope.contact._id);
      $http.put('/contacts/' + $scope.contact._id, $scope.contact).then(function(response){
        refresh();
      })
    };

    $scope.deselect = function(){
      $scope.contact = "";
    };
    
}]);
