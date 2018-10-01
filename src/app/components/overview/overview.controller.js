import AddComponent from '../add/add.component';
import ORDER_BY_OPTIONS from './orderByOptions';

class OverviewController {
    constructor(dataservice, $mdDialog) {
        this.dataservice = dataservice;
        this.$mdDialog = $mdDialog;
    }

    $onInit() {
        this.emails = [];
        this.filteredEmails = [];
        this.detailEmail = -1;
    
        this.currentOrderBy = ORDER_BY_OPTIONS.dateDesc;
        this.orderByOptions = ORDER_BY_OPTIONS;
    
        this.searchText = '';
        this.showAddDialog = false;
        
        this.loadEmails();
    }

    deleteEmail(emailId) {
        this.dataservice.deleteEmail(emailId);
        this.loadEmails();
    }

    viewEmail(emailId) {
        if (this.detailEmail == emailId) {
            this.detailEmail = -1;
        } else {
            this.detailEmail = emailId;
        }
    }

    openAddDialog() {
        this.$mdDialog.show(AddComponent)
            .then(() => this.loadEmails())
            // ignore errors (dialog closed without submitting)
            .catch(e => {});
    }

    loadEmails() {
        this.emails = Object.values(this.dataservice.getAllEmails());
    }
}
OverviewController.$inject = ['dataservice', '$mdDialog'];

export default OverviewController;