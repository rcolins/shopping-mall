import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component'

var app = angular.module('app', [uiRouter]);

app.config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');
  });

app.component('app', AppComponent);