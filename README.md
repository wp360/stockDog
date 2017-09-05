## 环境安装
`npm install –g grunt-cli`

`npm install –g bower`

`npm install –g generator-angular@0.9.8`

`npm install -g generator-karma`

## 新建项目
`yo angular StockDog`
## 运行项目
`grunt serve`
## 安装模块依赖
`bower install angular-strap#v2.1.0 –save`
## Watchlist服务 （The Watchlist Service）
`yo angular:service Watchlist-Service`
`bower install lodash --save  //这是一个为js提供了函数式编程帮助的工具库`
## 监视列表面板指令
`yo angular:directive stk-Watchlist-Panel`
```javascript
生成 app/scripts/directives/stk‐watchlist‐panel.js
初始代码：
'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stkWatchlistPanel directive');
      }
    };
  });
```
## Gruntfile.js改动
```javascript    
files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
修改：
'<%= yeoman.app %>/**/*.html',
```