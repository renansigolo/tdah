// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular
	.module('starter', ['ionic', 'starter.controllers', 'firebase', 'ngCordova'])

	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (
				window.cordova &&
				window.cordova.plugins &&
				window.cordova.plugins.Keyboard
			) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
				cordova.plugins.Keyboard.disableScroll(true)
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault()
			}
		})
	})

	//Routes Configuration

	.config(function($stateProvider, $urlRouterProvider) {
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
			.state('tab.home', {
				url: '/home',
				views: {
					'tab-home': {
						templateUrl: 'templates/tab-home.html',
						controller: 'HomeCtrl'
					}
				}
			})

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
			.state('tab.guide', {
				url: '/guide',
				views: {
					'tab-guide': {
						templateUrl: 'templates/tab-guide.html',
						controller: 'GuideCtrl'
					}
				}
			})

			//Child Tabs from Guia
			.state('tab.diagnostics', {
				url: '/guide/diagnostics',
				views: {
					'tab-guide': {
						templateUrl: 'templates/diagnostics.html',
						controller: 'DiagnosticsCtrl'
					}
				}
			})
			.state('tab.diagnostics-children', {
				url: '/guide/diagnostics-children',
				views: {
					'tab-guide': {
						templateUrl: 'templates/diagnostics-children.html',
						controller: 'DiagnosticsChildrenCtrl'
					}
				}
			})
			.state('tab.diagnostics-adulto', {
				url: '/guide/diagnostics-adulto',
				views: {
					'tab-guide': {
						templateUrl: 'templates/diagnostics-adults.html',
						controller: 'DiagnosticsAdultsCtrl'
					}
				}
			})
			.state('tab.diagnostics-characteristics', {
				url: '/guide/diagnostics-characteristics',
				views: {
					'tab-guide': {
						templateUrl: 'templates/diagnostics-characteristics.html',
						controller: 'DiagnosticsCharacteristicsCtrl'
					}
				}
			})
			.state('tab.informations', {
				url: '/guide/informations',
				views: {
					'tab-guide': {
						templateUrl: 'templates/informations.html',
						controller: 'InformationsCtrl'
					}
				}
			})
			.state('tab.materials', {
				url: '/guide/materials',
				views: {
					'tab-guide': {
						templateUrl: 'templates/materials.html',
						controller: 'MaterialsCtrl'
					}
				}
			})
			.state('tab.organization', {
				url: '/guide/organization',
				views: {
					'tab-guide': {
						templateUrl: 'templates/organization.html',
						controller: 'OrganizationCtrl'
					}
				}
			})
			.state('tab.studies', {
				url: '/guide/studies',
				views: {
					'tab-guide': {
						templateUrl: 'templates/studies.html',
						controller: 'StudiesCtrl'
					}
				}
			})
			.state('tab.health', {
				url: '/guide/health',
				views: {
					'tab-guide': {
						templateUrl: 'templates/health.html',
						controller: 'HealthCtrl'
					}
				}
			})
			.state('tab.medications', {
				url: '/guide/medications',
				views: {
					'tab-guide': {
						templateUrl: 'templates/medications.html',
						controller: 'MedicationsCtrl'
					}
				}
			})
			// .state('tab.celebrities', {
			//   url: '/guide/celebrities',
			//   views: {
			//     'tab-guide': {
			//       templateUrl: 'templates/celebrities.html',
			//       controller: 'CelebritiesCtrl'
			//     }
			//   }
			// })

			// Tab Emoção
			.state('tab.emotions', {
				url: '/emotions',
				views: {
					'tab-emotions': {
						templateUrl: 'templates/tab-emotions.html',
						controller: 'EmotionsCtrl'
					}
				}
			})

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/home')
	})
