var myApp = angular.module('myApp', []);
myApp.controller('contactApp', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    person1 = {
      name: "Kobe",
      email: "kobe@bryant.com",
      number: "(111)111-1111"
    };
    person2 = {
      name: "Steph",
      email: "steph@curry.com",
      number: "(222)222-2222"
    };
    var contacts = [person1, person2];
    $scope.contacts = contacts;

}]);
