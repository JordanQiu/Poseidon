'use strict';

/**
 * @ngdoc overview
 * @name asgardApp
 * @description
 * # asgardApp
 *
 * Main module of the application.
 */
var asgard =
   angular.module('asgard', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'infinite-scroll'
  ])
asgard.config(function($stateProvider, $urlRouterProvider,$resourceProvider){
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home")

    $stateProvider
        //home state and home page
        .state('home', {
            url: "/home",
            templateUrl: "views/layout/cover.html",
            controller:"LayoutController"
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller:"AboutController"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html",
            controller:"ContactController"
        })
        .state('asgard', {
            url: "/asgard",
            templateUrl: "views/asgard.html",
            controller:"AsgardController"
        })
        .state('asgard.magazine', {
            url: "/magazine",
            templateUrl: "../views/asgard/magazine.html",
            controller:"MagazineController"
        })
        .state('asgard.artwork', {
            url: "/artwork",
            templateUrl: "../views/asgard/artwork.html",
            controller:"ArtworkController"
        })

});