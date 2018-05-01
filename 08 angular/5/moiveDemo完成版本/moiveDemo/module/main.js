/**
 * Created by j on 2017/6/13.
 */
//主模块

//用来管理不同的子模块
(function (angular) {
    var app=angular.module('movieApp',
        [
            'ngRoute',
            'movieApp.route',
            'movieApp.controller',
            'movieApp.service'
        ]);
})(angular);