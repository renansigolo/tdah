// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','firebase'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.diagnostico', {
                url: '/chats/diagnostico',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostico.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.diagnostico-crianca', {
                url: '/chats/diagnostico-crianca',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostico-crianca.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.diagnostico-adulto', {
                url: '/chats/diagnostico-adulto',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostico-adulto.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.diagnostico-caracteristica', {
                url: '/chats/diagnostico-caracteristica',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostico-caracteristica.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.medicacao', {
                url: '/chats/medicacao',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/medicacao.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.informacoes', {
                url: '/chats/informacoes',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/informacoes.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.materiais', {
                url: '/chats/materiais',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/materiais.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.organizacao', {
                url: '/chats/organizacao',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/organizacao.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.estudando', {
                url: '/chats/estudando',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/estudando.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.celebridades', {
                url: '/chats/celebridades',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/celebridades.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });
