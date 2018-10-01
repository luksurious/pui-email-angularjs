import template from './overview.template.html';
import controller from './overview.controller';
import './overview.styles.css';

const OverviewComponent = () => {
    return {
        template: template,
        controller: controller,
        controllerAs: 'ctrl'
    };
};

export default OverviewComponent;