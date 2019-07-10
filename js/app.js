var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope){
console.log("In myController");

$scope.newUser={};
$scope.clickedUser={};
$scope.message="";
$scope.users=[
   { userName: "zubair",fullName:"Md.Zubair Alam",email:"zubairalam0252gmail.com"},
   { userName: "Imane",fullName:"Emmy Amouna",email:"emmy@gmail.com"}

];
$scope.saveUser=function()
{
    $scope.users.push($scope.newUser);
    $scope.newUser={};
    $scope.message="New User Added Successfully"
};
$scope.selectUser=function(user)
{
console.log(user);
$scope.clickedUser=user;
};
$scope.updateUser=function(){
$scope.message="Successfully Updated";

};

$scope.clearMessage=function(){
$scope.message="";

};


   $scope.deleteUser = function(user) { 
    var index = $scope.users.indexOf(user);
    $scope.users.splice(index, 1);
    $scope.message="Successfully Deleted"; 
    
    
  };


});