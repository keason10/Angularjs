/*引入myAppModule模块 中的myAppModuleService
    module     module中可以引用module，算是程序中的模块
    m:      绑定的数据对象
    v:      html        引用 controller
    c:      controller  引用 service，factory
 */
app.controller('rootCtrl',function ($rootScope,myService,myAppModuleService) {
    $rootScope.getList = myService.commonSetData;
    myAppModuleService.show12_16Log();
});
