myApp.controller("dashboardController", function($scope, questionFactory){

  // getting all questions for dashboard page
  questionFactory.getQuestions(function(data){
    $scope.all_questions = data;
  })

  $scope.logout = function() {
    userFactory.logout()
  }



})