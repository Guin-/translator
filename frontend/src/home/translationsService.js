export default class TranslationsService {
  constructor($http) {
    this.$http = $http;
    this.apiUrl = 'http://localhost:8000/api/v1/translation/?format=json';
  }
  getData () {
    return this.$http.get(this.apiUrl)
      .then((result) => {
        console.log(result);
      });
  }
}
