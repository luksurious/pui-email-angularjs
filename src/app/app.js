import angular from 'angular';

import 'angular-material';
import 'angular-messages';

import 'angular-material/angular-material.css';

import './app.css';

import Dataservice from './services/dataservice';
import OverviewComponent from './components/overview/overview.component';
import DetailsComponent from './components/details/details.component';

const App = () => {
    return {
        template: require('./app.html')
    };
};

angular.module('app', ['ngMaterial', 'ngMessages'])
    .directive('app', App)
    .service('dataservice', Dataservice);

angular.module('app')
    .directive('overview', OverviewComponent)
    .directive('emailDetails', DetailsComponent);

export default 'app';