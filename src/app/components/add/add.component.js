import controller from './add.controller';
import template from './add.template.html';

const addComponent = {
    controller: controller,
    template: template,
    parent: angular.element(document.body),
    clickOutsideToClose: true
};

export default addComponent;