export default function routes($stateProvider) {
  $stateProvider
    .state('input', {
      url: '/input',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('translations', {
      url: '/translations',
      template: require('./translations.html'),
      controller: 'TranslationsController',
      controllerAs: 'translations'
    })
}

routes.$inject = ['$stateProvider'];
