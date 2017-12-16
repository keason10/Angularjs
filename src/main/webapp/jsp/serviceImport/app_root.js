/*引入myAppModule模块 中的myAppModuleService
    m:      module     module中可以引用module
    v:      html        引用 controller
    c:      controller  引用 service，factory
 */
app.controller('rootCtrl',function ($rootScope,myService,myAppModuleService) {
    $rootScope.getList = myService.commonSetData;
    myAppModuleService.show12_16Log();
});
