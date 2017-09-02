var myApp = angular.module('myApp', []);
myApp.controller('contactApp', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function(){
    $http.get('/contacts').then(function(response){
      console.log("Data works?");
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
      $http.delete('/contacts/'+ id).then(function(response){
        refresh();
      });
    };

}]);
