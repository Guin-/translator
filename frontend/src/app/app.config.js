export default function config($httpProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

  $urlRouterProvider.when('/', $state => {
    $state.go('input');
  });
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$httpProvider', '$urlRouterProvider', '$locationProvider'];
