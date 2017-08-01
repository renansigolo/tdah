angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {})

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('CriancaCtrl', function ($scope, $stateParams) {
        $scope.validacao = validacao;
        $scope.dados = {};
        var resultado = 0;
        $scope.resultado = resultado;

        function validacao() {
            console.log($scope.dados.choice1);
            console.log($scope.dados.choice2);
            console.log(resultado);
            console.log($scope.resultado);

            $scope.resultado.sum = dados.choice1 + dados.choice2;

        };
    })

    .controller('AccountCtrl', function ($scope, $http, emotionApiService, $firebaseArray, $firebaseStorage) {

        $scope.dados = {};
        $scope.enviado = false;
        $scope.emocao = false;
        $scope.maiorEmocao = 0;

        $scope.carregarFoto = function () {
            console.log($scope.dados.url);
            if ($scope.dados.url == "") {
                alert("Por favor preencha o campo de link da imagem");
                return;
            } else {
                $http({
                    method: 'POST',
                    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
                    headers: {
                        'Content-Type': 'application/json',
                        'Ocp-Apim-Subscription-Key': '275d8596280a42b09a03251b73396358'
                    },
                    data: "{ url: '" + $scope.dados.url + "' }"
                }).then(function (respostaSucesso) {
                    emotionApiService.SetResultadoApi(respostaSucesso.data[0]);
                    $scope.enviado = true;
                    console.log(emotionApiService.GetResultadoApi());
                }, function (respostaErro) {
                    alert("Houve um erro na leitura de sua foto, por favor tente novamente ou envie outra foto.");
                });
            }
        };

        $scope.encontrarSentimento = function () {
            var resultado = emotionApiService.GetResultadoApi();
            $scope.sentimentos = [
                {
                    sentimento: 'com raiva',
                    valor: resultado.scores.anger
            },
                {
                    sentimento: 'com desprezo',
                    valor: resultado.scores.contempt
            },
                {
                    sentimento: 'com nojo',
                    valor: resultado.scores.disgust
            },
                {
                    sentimento: 'com medo',
                    valor: resultado.scores.fear
            },
                {
                    sentimento: 'feliz',
                    valor: resultado.scores.happiness
            },
                {
                    sentimento: 'neutro(a)',
                    valor: resultado.scores.neutral
            },
                {
                    sentimento: 'triste',
                    valor: resultado.scores.sadness
            },
                {
                    sentimento: 'surpreso(a)',
                    valor: resultado.scores.surprise
            }
        ];

            for (var i = 0; i < 8; i++) {
                if ($scope.maiorEmocao <= $scope.sentimentos[i].valor) {
                    $scope.maiorEmocao = $scope.sentimentos[i].valor;
                    $scope.sentimento = $scope.sentimentos[i].sentimento;
                }
                $scope.emocao = true;
            }
            $scope.emocao = true;
        }

    });
