angular.module('boilerApp').controller('mainController', function( $scope, mainService){


$scope.getAlumni = function(){
   $scope.allAlumni = mainService.getAlumni();
}

$scope.allProjects = function(){
  var allProjects = projectsService.getProjects();
  $scope.cssMain = allProjects[0];
  console.log($scope.cssMain)
  console.log(allProjects)
}




})
