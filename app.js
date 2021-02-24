var app = angular.module('login_register_app',[]);
app.controller('login_register_controller', function($scope, $http){
    
    //for hiden my alert
    $scope.closeMsg = function(){
        $scope.alertMsg = false;
    };

    $scope.login_form = true;

    //for hiden my login_form
    $scope.showRegister = function(){
        $scope.login_form = false;
        $scope.register_form = true;
        $scope.alertMsg = false;
    };

    //for hiden my register_form
    $scope.showLogin = function(){
        $scope.register_form = false;
        $scope.login_form = true;
        $scope.alertMsg = false;
    }

    //for register now user
    $scope.submitRegister = function(){
        $http({
            method:"POST",
            url:"register.php",
            data:$scope.registerData
        }).success(function(data){
            $scope.alertMsg = true;
            if(data.error != ''){
                $scope.alertClass = 'alert-danger';
                $scope.alertMessage = data.error;
            }else{
                $scope.alertClass = 'alert-success';
                $scope.alertMessage = data.message;
                $scope.registerData = {};
            }
        });
    };

    //for login user 
    $scope.submitLogin = function(){
        $http({
            method:"POST",
            url:"login.php",
            data:$scope.loginData
        }).success(function(data){
            $scope.alertMsg = true;
            if(data.error != ''){
                $scope.alertMsg = true;
                $scope.alertClass = 'alert-danger';
                $scope.alertMessage = data.error;
            }else{
                location.reload();
            }
        });
    };

})