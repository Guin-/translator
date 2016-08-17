export default class TranslationsService {
  constructor($http) {
    this.$http = $http;
    this.apiUrl = 'http://localhost:8000/api/v1/translation/';
  }

  getData () {
    return this.$http.get(this.apiUrl);
  }
/*
  postData () {
    return this.$http.post(this.apiUrl, { input_text: 'input_text'})
      .then((response) => {
        console.log(response);
      });
  }
*/
}
