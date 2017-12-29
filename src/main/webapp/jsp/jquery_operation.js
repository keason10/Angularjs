app.controller('jqueryOperationController', function ($scope,$rootScope,$q,$http,promiseService) {
    promiseService.getResult({
        method  :'GET',
        url     :'first2.html',
        data    :null
    }).then(function (data) {
        console.log(data);
    });

});

app.service('promiseService',function ($http,$q) {
    var deferred  = $q.defer();
    var promise  = deferred.promise;

    this.getResult = function (obj) {
        $http(
            obj
        ).then(function (data) {
            console.log(JSON.stringify(data));
            deferred.resolve('success'+data);
        },function (data) {
            deferred.reject('fail'+data);
        });
        return promise;
    }
});