angular.module('boilerApp',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "../templates/home-tmpl.html",
            controller: "mainController"
        })
        


        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/');
    });
