import angular from 'angular';

import 'angular-material';
import 'angular-messages';

import 'angular-material/angular-material.css';

import './app.css';

import dataservice from './services/dataservice';
import overviewComponent from './components/overview/overview.component';
import detailComponent from './components/details/details.component';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngMaterial', 'ngMessages'])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .service('dataservice', dataservice);

angular.module(MODULE_NAME)
    .directive('overview', overviewComponent)
    .directive('emailDetails', detailComponent);

export default MODULE_NAME;