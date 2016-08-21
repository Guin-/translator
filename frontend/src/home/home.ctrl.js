export default class HomeController {
  constructor(TranslationsService) {
    this.name = 'Translator';
    this.inputText = '';
    this.errorMessage ='';

    this.submit = function() {
      TranslationsService.postData(this.inputText)
       .then((response) => {
         this.inputText= '';
       },
       (error) => {
         console.dir(error);
         this.inputText = '';
         this.errorMessage = error.data.detail;
       })
    };
  }

}

HomeController.$inject = ['TranslationsService'];
