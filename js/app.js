var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope){
console.log("In myController");

$scope.newUser={};
$scope.clickedUser={};
$scope.users=[
   { userName: "zubair",fullName:"Md.Zubair Alam",email:"zubairalam0252gmail.com"},
   { userName: "Imane",fullName:"Emmy Amouna",email:"emmy@gmail.com"}

];
$scope.saveUser=function()
{
    $scope.users.push($scope.newUser);
    $scope.newUser={};
};
$scope.selectUser=function(user)
{
console.log(user);
$scope.clickedUser=user;
};
$scope.updateUser=function(){


};

});