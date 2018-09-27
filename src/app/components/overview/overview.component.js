import template from './overview.template.html';
import controller from './overview.controller';
import './overview.styles.css';

const overviewComponent = () => {
    return {
        template: template,
        bindings: {
            featuresStatus: '<'
        },
        controller: controller,
        controllerAs: 'ctrl'
    }
};

export default overviewComponent;