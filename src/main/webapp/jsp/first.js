app.controller('myCtl1', function ($scope,$rootScope) {
    $scope.info ={};

    var items = {id: 1, name: 'id1'};
    var log = [];
    angular.forEach(items, function (value, key, obj) {
        console.log('value:' + value + '      key:' + key + '     obj:' + angular.toJson(obj));
        /**
         * value:1      key:id     obj:{"id":1,"name":"id1"}
         value:id1      key:name     obj:{"id":1,"name":"id1"}
         */
        this.push(key + ':' + value)  //this 代表log

    }, log);
    console.log(log.join(','));


    /*angular 文档上说 注意: angular.extend不支持递归复制。
    但是结果  {"id":1,"name":"id1","sex":"man","obj":{"age":10,"ageTwo":20,"ids":[1,2,3,4]}}表明，支持递归复制*/
    var extendedP = angular.extend({}, items, {sex: "man", obj: {age: 10, ageTwo: 20, ids: [1, 2, 3, 4]}})
    console.log(angular.toJson(extendedP));

    $scope.ageList =angular.fromJson([{id:1,name:'一岁'},{id:2,name:'二岁'},{id:3,name:'三岁'}]);


    // 有默认值之后，初始化
    $scope.name='keason';
    $scope.sex =1+"";
    $scope.computer = true;
    $scope.english = true;
    $scope.age = 2;

    //使用element 相当于 jQuery 中的选择器
    // angular.element('input[type=radio][value=1]').attr('checked',true);


    }
);

app.controller('myCtl2', function ($scope,$rootScope) {

    }
);