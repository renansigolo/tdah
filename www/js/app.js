// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

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

    //Routes Configuration

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

            // Tab Ajuda
            .state('tab.help', {
                url: '/help',
                views: {
                    'tab-help': {
                        templateUrl: 'templates/tab-help.html',
                        controller: 'HelpCtrl'
                    }
                }
            })

            // Tab Guia
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })

            //Child Tabs from Guia 
            .state('tab.diagnostics', {
                url: '/chats/diagnostics',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostics.html',
                        controller: 'DiagnosticsCtrl'
                    }
                }
            })
            .state('tab.diagnostics-children', {
                url: '/chats/diagnostics-children',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostics-children.html',
                        controller: 'DiagnosticsChildrenCtrl'
                    }
                }
            })
            .state('tab.diagnostics-adulto', {
                url: '/chats/diagnostics-adulto',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostics-adults.html',
                        controller: 'DiagnosticsAdultsCtrl'
                    }
                }
            })
            .state('tab.diagnostics-characteristics', {
                url: '/chats/diagnostics-characteristics',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/diagnostics-characteristics.html',
                        controller: 'DiagnosticsCharacteristicsCtrl'
                    }
                }
            })
            .state('tab.informations', {
                url: '/chats/informations',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/informations.html',
                        controller: 'InformationsCtrl'
                    }
                }
            })
            .state('tab.materials', {
                url: '/chats/materials',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/materials.html',
                        controller: 'MaterialsCtrl'
                    }
                }
            })
            .state('tab.organization', {
                url: '/chats/organization',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/organization.html',
                        controller: 'OrganizationCtrl'
                    }
                }
            })
            .state('tab.studies', {
                url: '/chats/studies',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/studies.html',
                        controller: 'StudiesCtrl'
                    }
                }
            })
            .state('tab.health', {
                url: '/chats/health',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/health.html',
                        controller: 'HealthCtrl'
                    }
                }
            })
            .state('tab.medications', {
                url: '/chats/medications',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/medications.html',
                        controller: 'MedicationsCtrl'
                    }
                }
            })
            .state('tab.celebrities', {
                url: '/chats/celebrities',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/celebrities.html',
                        controller: 'CelebritiesCtrl'
                    }
                }
            })

            // Tab Emoção
            .state('tab.emotions', {
                url: '/emotions',
                views: {
                    'tab-emotions': {
                        templateUrl: 'templates/tab-emotions.html',
                        controller: 'EmotionsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/help');

    });
