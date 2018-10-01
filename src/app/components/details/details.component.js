import template from './details.template.html';
import controller from './details.controller';

import './details.styles.css';

const DetailsComponent = () => {
    return {
        template: template,
        scope: {
            emailId: '<'
        },
        controller: controller,
        controllerAs: 'ctrl'
    };
};

export default DetailsComponent;