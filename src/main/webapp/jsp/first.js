var app = angular.module('myApp',['mgcrea.ngStrap']);
app.service('myService',function () {
    this.showLog = function (str ) {
        console.log("keason log, info:"+str);
    }
});
app.controller('myCtl', function ($scope,myService) {
      $scope.myText = '';
      $scope.myFFun = function () {
          myService.showLog($scope.myText);
      }

      $scope.ListStudent =[
          {id:10001,name:"name1001",sex:"M",age:"23"},
          {id:10002,name:"name1002",sex:"W",age:"23"},
          {id:10003,name:"name1003",sex:"W",age:"45"},
          {id:10004,name:"name1004",sex:"W",age:"15"},
          {id:10005,name:"name1005",sex:"W",age:"42"},
          {id:10006,name:"name1006",sex:"M",age:"26"}
      ]
    }
);
