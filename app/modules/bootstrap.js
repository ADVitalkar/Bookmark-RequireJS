/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'angular-route',
    'app.module',
    'login/loginController'
], function (require , angular, route, bookmark) {
    
    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
        //ng.bootstrap(document, ['app']);

    bookmark.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/',
                {
                    controller: 'LoginController',
                    templateUrl: '/Bookmark/app/modules/login/login.html'
                })
            .when('/register',
                {
                    //controller: 'CustomerOrdersController',
                    templateUrl: '/Bookmark/app/modules/registeration/register.html'
                })
            .otherwise({ redirectTo: '/Bookmark/app/modules/login/login.html' });
        }
    ]);

    angular.bootstrap(document, ['bookmark']);

});


/*require(['angular','angular-route'],function(angular){
    bookmark.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/',
                {
                    controller: 'LoginController',
                    templateUrl: '/Bookmark/app/modules/login/login.html'
                })
            .when('/register',
                {
                    //controller: 'CustomerOrdersController',
                    templateUrl: '/Bookmark/app/modules/registeration/register.html'
                })
            .otherwise({ redirectTo: '/Bookmark/app/modules/login/login.html' });
        }
    ]);
});*/