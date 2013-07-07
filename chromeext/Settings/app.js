var dsApp=angular.module('settingsApp', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:ViewCtrl, templateUrl:'tpl/view.html'}).       
            when('/choosenew', {controller:ChoosePvdTypeCtrl, templateUrl:'tpl/choosePvdType.html'}).            
            when('/edit/:id', {controller:EditPvdCtrl, templateUrl:'tpl/editPvd.html'}).
            when('/choosetemplate', {controller:ChooseTemplateCtrl, templateUrl:'tpl/choosetmpl.html'}).
            otherwise({redirectTo:'/'});
    });

dsApp.directive('myHtml', function () {
    return function (scope, element, attrs) {
        element.html(attrs.myHtml);
        scope.$watch(attrs.myHtml, function (value) {
           element.html(attrs.myHtml);
        });
    }
});





