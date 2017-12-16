app.service('myService',function () {
    this.showLog = function (str ) {
        console.log("keason log, info:"+str);
    }
    this.commonSetData= function (obj) {
        var m = angular.bind(obj,function (id) {
            var list =new Array();
            list.push(id);
            obj.idlist = list;
        },obj.id);
        m(obj);
        console.info(obj);
    }
});