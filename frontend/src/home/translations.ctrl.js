export default class TranslationsController {
  constructor($scope, TranslationsService) {
    this.name = 'Translations List';
    this.translationsData = [];

    TranslationsService.getData().then( result => this.translationsData = result);
  }
}

TranslationsController.$inject = ['$scope', 'TranslationsService'];
