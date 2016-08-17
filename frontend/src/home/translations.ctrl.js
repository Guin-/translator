export default class TranslationsController {
  constructor(TranslationsService) {
    this.translationsData = [];

    TranslationsService.getData()
      .then((response) => {
        this.translationsData = response.data;
        console.log(this.translationsData);
      });

  }
}

TranslationsController.$inject = ['TranslationsService'];
