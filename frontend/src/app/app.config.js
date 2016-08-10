export default function config($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.when('/', $state => {
    $state.go('input');
  });
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$urlRouterProvider', '$locationProvider'];
