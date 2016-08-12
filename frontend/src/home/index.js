import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.ctrl';
import TranslationsService from './translationsService';
import TranslationsController from './translations.ctrl';
import './home.css'

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .service('TranslationsService', TranslationsService)
  .controller('TranslationsController', TranslationsController)
  .name;
