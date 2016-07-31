import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';

angular.module('app', [
  uirouter,
  home
]).config(config);
