/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define(['angular','angular-route'], function (angular) {
    'use strict';
    var bookmark = angular.module('bookmark', ['ngRoute']);
    return bookmark;
});