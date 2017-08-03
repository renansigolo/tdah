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
                    valor: resultado.scores.anger,
                    sugestao: 'Para diminuir sua raiva tente as seguintes sugestões',
                    sugestao1: 'Respire fundo durante 30 segundos',
                    sugestao2: 'Vá dar uma volta',
                    sugestao3: 'Tome um copa de água',
            },
                {
                    sentimento: 'com desprezo',
                    valor: resultado.scores.contempt,
                    sugestao: 'Para diminuir o desprezo sentido tente as seguintes sugestões',
                    sugestao1: 'Pense em coisas positivas',
                    sugestao2: 'Tente usar empatia',
                    sugestao3: 'Pense que a situação do outro lado possa ser mais complicada do que você imagina',
            },
                {
                    sentimento: 'com nojo',
                    valor: resultado.scores.disgust,
                    sugestao: 'NOJO',
                    sugestao1: 'P1seguintes sugestões:',
                    sugestao2: 'P2tente as seguintes sugestões:',
                    sugestao3: 'Pa3te as seguintes sugestões:',
            },
                {
                    sentimento: 'com medo',
                    valor: resultado.scores.fear,
                    sugestao: 'Para diminuir seu medo tente as seguintes sugestões',
                    sugestao1: 'Pense positivamente',
                    sugestao2: 'Tente formular soluções em um cenário positivo',
                    sugestao3: 'Fique calmo que tudo vai dar certo se você desejar e se empenhar para isso',
            },
                {
                    sentimento: 'feliz',
                    valor: resultado.scores.happiness,
                    sugestao: 'Aproveite esse momento de felicidade para',
                    sugestao1: 'Se comunicar com as pessoas',
                    sugestao2: 'Formular ideias para eventos futuros',
                    sugestao3: 'Curta esse momento',
            },
                {
                    sentimento: 'neutro(a)',
                    valor: resultado.scores.neutral,
                    sugestao: 'NEUTRO',
                    sugestao1: 'P1seguintes sugestões:',
                    sugestao2: 'P2tente as seguintes sugestões:',
                    sugestao3: 'Pa3te as seguintes sugestões:',
            },
                {
                    sentimento: 'triste',
                    valor: resultado.scores.sadness,
                    sugestao: 'Para diminuir sua tristeza tente as seguintes sugestões:',
                    sugestao1: 'P1seguintes sugestões:',
                    sugestao2: 'P2tente as seguintes sugestões:',
                    sugestao3: 'Pa3te as seguintes sugestões:',
            },
                {
                    sentimento: 'surpreso(a)',
                    valor: resultado.scores.surprise,
                    sugestao: 'Para minimizar o estado de surpresa tente o seguinte',
                    sugestao1: 'SURPRESA',
                    sugestao2: 'SURPRESA',
                    sugestao3: 'SURPRESA',
            }
        ];

            for (var i = 0; i < 8; i++) {
                if ($scope.maiorEmocao <= $scope.sentimentos[i].valor) {
                    $scope.maiorEmocao = $scope.sentimentos[i].valor;
                    $scope.sentimento = $scope.sentimentos[i].sentimento;
                    $scope.sugestao = $scope.sentimentos[i].sugestao;
                    $scope.sugestao1 = $scope.sentimentos[i].sugestao1;
                    $scope.sugestao2 = $scope.sentimentos[i].sugestao2;
                    $scope.sugestao3 = $scope.sentimentos[i].sugestao3;
                }
                $scope.emocao = true;
            }
            $scope.emocao = true;
        }

    });
