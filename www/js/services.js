angular.module('starter').service('emotionApiService', function () {
    var resultadoApi = {};

    var getResultadoApi = function () {
        return resultadoApi;
    };

    var setResultadoApi = function (value) {
        resultadoApi = value;
    };

    return {
        GetResultadoApi: getResultadoApi,
        SetResultadoApi: setResultadoApi
    };
});
