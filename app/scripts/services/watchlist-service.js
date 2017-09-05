'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('WatchlistService', function WatchlistService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // [1] Helper【辅助方法】: Load watchlists from localStorage #从localStorage中加载监视列表
    var loadModel = function () {
      var model = {
        watchlists: localStorage['StockDog.watchlists'] ?
          JSON.parse(localStorage['StockDog.watchlists']) : [],
        nextId: localStorage['StockDog.nextId'] ?
          parseInt(localStorage['StockDog.nextId']) : 0
      };
      return model;
    };
    // [2] Helper: Save watchlists to localStorage #将监视列表保存到localStorage中
    var saveModel = function () {
      localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
      localStorage['StockDog.nextId'] = Model.nextId;
    };
    // [3] Helper: Use lodash to find a watchlist with given ID #使用loadash找到指定ID的监视列表
    var findById = function (listId) {
      return _.find(Model.watchlists, function (watchlist) {
        return watchlist.id === parseInt(listId);
      });
    };
    // [4] Return all watchlists or find by given ID #返回所有监视列表或者指定的ID进行查找
    this.query = function (listId) {
      if (listId) {
        return findById(listId);
      } else {
        return Model.watchlists;
      }
    };
    // [5] Save a new watchlist to watchlists model #在监视列表模型中保存一个新的监视列表
    this.save = function (watchlist) {
      watchlist.id = Model.nextId++;
      Model.watchlists.push(watchlist);
      saveModel();
    };
    // [6] Remove given watchlist from watchlists model #从监视列表模型中移除指定的监视列表
    this.remove = function (watchlist) {
      _.remove(Model.watchlists, function (list) {
        return list.id === watchlist.id;
      });
      saveModel();
    };
    // [7] Initialize Model for this singleton service #为这个单例服务初始化模型
    var Model = loadModel();
  });
