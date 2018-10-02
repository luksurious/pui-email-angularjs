import angular from 'angular';

import 'angular-material';
import 'angular-messages';

import './app.css';

import Dataservice from './services/dataservice';
import OverviewComponent from './components/overview/overview.component';
import DetailsComponent from './components/details/details.component';
import AddComponent from './components/add/add.component';

const App = () => {
    return {
        template: require('./app.html')
    };
};

angular.module('app', ['ngMaterial', 'ngMessages'])
    .directive('app', App)
    .service('dataservice', Dataservice);

angular.module('app')
    // registered as a constant since it is just a configuration for the dialog service
    .constant('addModal', AddComponent)
    .directive('overview', OverviewComponent)
    .directive('emailDetails', DetailsComponent);

export default 'app';