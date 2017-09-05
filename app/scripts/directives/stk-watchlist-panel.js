'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  // [1] Register directive and inject dependencies #注入指令与依赖
  .directive('stkWatchlistPanel', function ($location, $modal, WatchlistService) {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function ($scope) {
        // [2] Initialize variables #初始化变量
        $scope.watchlist = {};
        var addListModal = $modal({
          scope: $scope,
          template: 'views/templates/addlist-modal.html',
          show: false
        });
        // [3] Bind model from service to this scope #将服务中的模型绑定到该作用域
        $scope.watchlists = WatchlistService.query();
        // [4] Display addlist modal #显示 addlist modal
        $scope.showModal = function () {
          addListModal.$promise.then(addListModal.show);
        };
        // [5] Create a new list from fields in modal #根据模态框中的字段创建一个新的列表
        $scope.createList = function () {
          WatchlistService.save($scope.watchlist);
          addListModal.hide();
          $scope.watchlist = {};
        };
        // [6] Delete desired list and redirect to home #删除目标列表并重定向到主页
        $scope.deleteList = function (list) {
          WatchlistService.remove(list);
          $location.path('/');
        };
      }
    };
  });