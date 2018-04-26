angular.module('starter.controllers', [])

  .controller('HomeCtrl', function($scope) {})
  .controller('HelpCtrl', function($scope) {})
  .controller('GuideCtrl', function($scope) {})
  .controller('DiagnosticsCtrl', function($scope) {})
  .controller('DiagnosticsChildrenCtrl', function($scope, $stateParams) {
    //        $scope.validacao = validacao;
    //        $scope.dados = {};
    //        var resultado = 0;
    //        $scope.resultado = resultado;
    //
    //        function validacao() {
    //            console.log($scope.dados.choice1);
    //            console.log($scope.dados.choice2);
    //            console.log(resultado);
    //            console.log($scope.resultado);
    //
    //            $scope.resultado.sum = dados.choice1 + dados.choice2;
    //
    //        };
  })
  .controller('DiagnosticsAdultsCtrl', function($scope) {})
  .controller('DiagnosticsCharacteristicsCtrl', function($scope) {})
  .controller('InformationsCtrl', function($scope) {})
  .controller('MaterialsCtrl', function($scope) {})
  .controller('OrganizationCtrl', function($scope) {})
  .controller('StudiesCtrl', function($scope) {})
  .controller('HealthCtrl', function($scope) {})
  .controller('MedicationsCtrl', function($scope) {})
  // .controller('UploadCtrl', function($scope) {
  //   function UploadCtrl($firebaseStorage) {
  //     var ctrl = this;
  //     var storageRef = firebase.storage().ref("userProfiles/physicsmarie");
  //     var storage = $firebaseStorage(storageRef);
  //     ctrl.fileToUpload = null;
  //     ctrl.onChange = function onChange(fileList) {
  //       ctrl.fileToUpload = fileList[0];
  //     };
  //   }
  // })

//   .directive("fileUpload", function FileUploadDirective() {
//   return {
//     restrict: "E",
//     transclude: true,
//     scope: {
//       onChange: "="
//     },
//     template: '<input type="file" name="file" /><label><ng-transclude></ng-transclude></label>',
//     link: function (scope, element, attrs) {
//       element.bind("change", function () {
//         scope.onChange(element.children()[0].files);
//       });
//     }
//   }
// })

  // .controller('CelebritiesCtrl', function($scope) {})
  .controller('EmotionsCtrl', function($scope, $http, emotionApiService, $firebaseArray, $firebaseStorage, $cordovaCamera) {
// FIREBASE Storage - Image Upload
 // $scope.uploadImage = function uploadImage() {
 //      // create a Storage reference for the $firebaseStorage binding
 //      var storageRef = firebase.storage().ref('faces/physicsmarie');
 //      var storage = $firebaseStorage(storageRef);
 //      // var file = FileUploadDirective()// get a file from the template (see Retrieving files from template section below)
 //      var uploadTask = storage.$put(file);
 //      // of upload via a RAW, base64, or base64url string
 //      var stringUploadTask = storage.$putString('5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB', 'base64');
 //
 //    EmotionsCtrl.$inject = ["$firebaseStorage"];
 //  }

// FACE API
    $scope.dados = {};
    $scope.enviado = false;
    $scope.emocao = false;
    $scope.maiorEmocao = 0;

    $scope.carregarFoto = function() {
      console.log($scope.dados.url);
      if ($scope.dados.url == "") {
        alert("Por favor preencha o campo de link da imagem");
        return;
      } else {
        $http({
          method: 'POST',
          url: 'https://brazilsouth.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion',
          headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '18ea132440b04df183d5cb92326104d6'
          },
          data: "{ url: '" + $scope.dados.url + "' }"
        }).then(function(respostaSucesso) {
          emotionApiService.SetResultadoApi(respostaSucesso.data[0]);
          $scope.enviado = true;
          console.log(emotionApiService.GetResultadoApi());
        }, function(respostaErro) {
          alert("Houve um erro na leitura de sua foto, por favor tente novamente ou envie outra foto.");
        });
      }
    };

    $scope.enviarNovaFoto = function() {
      $scope.dados.url = "";
      $scope.enviado = false;
    }

    $scope.enviarNovaEmocao = function() {
      $scope.enviado = false;
      $scope.emocao = false;
      $scope.maiorEmocao = 0;
      $scope.dados.url = "";
    }

    $scope.encontrarSentimento = function() {
      var resultado = emotionApiService.GetResultadoApi();
      console.log('RESULTADO', resultado)
      $scope.sentimentos = [{
          sentimento: 'com raiva',
          valor: resultado.faceAttributes.emotion.anger,
          sugestao: 'Para diminuir sua raiva tente as seguintes sugestões',
          sugestao1: 'Respire fundo durante 30 segundos',
          sugestao2: 'Vá dar uma volta',
          sugestao3: 'Tome um copa de água',
        },
        {
          sentimento: 'com desprezo',
          valor: resultado.faceAttributes.emotion.contempt,
          sugestao: 'Para diminuir o desprezo sentido tente as seguintes sugestões',
          sugestao1: 'Pense em coisas positivas',
          sugestao2: 'Tente usar empatia',
          sugestao3: 'Pense que a situação do outro lado possa ser mais complicada do que você imagina',
        },
        {
          sentimento: 'com nojo',
          valor: resultado.faceAttributes.emotion.disgust,
          sugestao: 'Para miminizar o sentimento de nojo tente as seguintes sugetões',
          sugestao1: 'Tente entender o lado alheio',
          sugestao2: 'Saiba que nem todos funcionam da mesma forma',
          sugestao3: 'Pense que ações diferentes geram atitudes diferentes',
        },
        {
          sentimento: 'com medo',
          valor: resultado.faceAttributes.emotion.fear,
          sugestao: 'Para diminuir seu medo tente as seguintes sugestões',
          sugestao1: 'Pense positivamente',
          sugestao2: 'Tente formular soluções em um cenário positivo',
          sugestao3: 'Fique calmo que tudo vai dar certo se você desejar e se empenhar para isso',
        },
        {
          sentimento: 'feliz',
          valor: resultado.faceAttributes.emotion.happiness,
          sugestao: 'Aproveite esse momento de felicidade para',
          sugestao1: 'Se comunicar com as pessoas',
          sugestao2: 'Formular ideias para eventos futuros',
          sugestao3: 'Curta esse momento',
        },
        {
          sentimento: 'neutro(a)',
          valor: resultado.faceAttributes.emotion.neutral,
          sugestao: 'Aproveite o estado neutro para',
          sugestao1: 'Criar novas ideias',
          sugestao2: 'Planejar futuras ações',
          sugestao3: 'Organizar suas coisas',
        },
        {
          sentimento: 'triste',
          valor: resultado.faceAttributes.emotion.sadness,
          sugestao: 'Para diminuir sua tristeza tente as seguintes sugestões:',
          sugestao1: 'Lembre-se da sua âncora',
          sugestao2: 'Pense em pessoas que te deixem feliz',
          sugestao3: 'Lembre de momentos felizes',
        },
        {
          sentimento: 'surpreso(a)',
          valor: resultado.faceAttributes.emotion.surprise,
          sugestao: 'Para minimizar o estado de surpresa tente o seguinte',
          sugestao1: 'Tente se lembrar de situações semelhantes a essa',
          sugestao2: 'Busque situações similares',
          sugestao3: 'Tente reagir de uma forma neutra frente a esta situação',
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

    $scope.tirarFoto = function() {

      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG
      };

      $cordovaCamera.getPicture(options)
        .then(function(data) {
          $scope.dados.urlfoto = "data:image/jpeg;base64," + data;
        }, function(erro) {
          console.log("Erro ao tirar foto: " + erro);
        });

    }

    $scope.uploadFoto = function() {

    }

  });
