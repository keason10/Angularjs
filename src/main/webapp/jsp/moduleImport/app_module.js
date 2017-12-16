var myAppModuleTemp = angular.module('myAppModuleName',['mgcrea.ngStrap']);
myAppModuleTemp.service('myAppModuleService',function () {
    this.show12_16Log= function () {
        console.error("keason show12_16Log");
    }
})

