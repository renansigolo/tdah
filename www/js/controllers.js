angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http) {

    $scope.urlEntrada = "pq";

    console.log($scope.urlEntrada);

    $scope.carregarFoto = carregarFoto;

    function carregarFoto(){

        console.log($scope.urlEntrada);
        // if($scope.url == "")
        // {
        //     alert("Por favor preencha o campo de link da imagem");
        //     console.log($scope.url);
        //     return;
        // }
        //
        // else
        // {
        //     $http({
        //         method: 'POST',
        //         url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Ocp-Apim-Subscription-Key': '275d8596280a42b09a03251b73396358'
        //         },
        //         data: "{ url: '" + $scope.url + "' }"
        //     }).then(function(respostaSucesso){
        //         emotionApiService.SetResultadoApi(respostaSucesso.data[0]);
        //         $scope.enviado = true;
        //     }, function(respostaErro){
        //         alert("Houve um erro na leitura de sua foto, por favor tente novamente ou envie outra foto.");
        //     });
        // }
    };

    $scope.enviado = false;

});
