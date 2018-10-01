import controller from './add.controller';
import template from './add.template.html';

// this is actually an $mdDialog "component" / configuration
const AddComponent = {
    controller: controller,
    controllerAs: 'ctrl',
    template: template,
    parent: angular.element(document.body),
    clickOutsideToClose: true
};

export default AddComponent;