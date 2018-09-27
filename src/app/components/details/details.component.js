import template from './details.template.html';
import controller from './details.controller';

import './details.styles.css';

const detailsComponent = () => {
    return {
        template: template,
        scope: {
            emailid: '='
        },
        controller: controller,
        controllerAs: 'ctrl'
    }
};

export default detailsComponent;