import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import home from '../home';

angular.module('app', [
  uirouter,
  home
]).config(config);
