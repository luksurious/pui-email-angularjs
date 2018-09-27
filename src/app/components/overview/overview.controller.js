import addComponent from '../add/add.component';

const ORDER_BY_OPTIONS = {
    dateAsc: {
        id: 'dateAsc', title: 'Date asc.', comparison: '+date'
    },
    dateDesc: {
        id: 'dateDesc', title: 'Date desc.', comparison: '-date'
    },
    subjectAsc: {
        id: 'subjectAsc', title: 'Subject asc.', comparison: '+subject'
    },
    subjectDesc: {
        id: 'subjectDesc', title: 'Subject desc.', comparison: '-subject'
    },
    fromAsc: {
        id: 'fromAsc', title: 'From asc.', comparison: '+from'
    },
    fromDesc: {
        id: 'fromDesc', title: 'From desc.', comparison: '-from'
    },
};

const overviewController = ['dataservice', '$mdDialog', function (dataservice, $mdDialog) {
    let ctrl = this;

    this.test = 'asd';

    this.emails = [];
    this.filteredEmails = [];
    this.detailEmail = -1;

    this.currentOrderBy = ORDER_BY_OPTIONS.dateDesc;

    this.orderByOptions = ORDER_BY_OPTIONS;

    this.searchText = '';
    this.showAddDialog = false;

    this.deleteEmail = function (emailId) {
        dataservice.deleteEmail(emailId);
        loadEmails();
    };

    this.viewEmail = function (emailId) {
        if (ctrl.detailEmail == emailId) {
            ctrl.detailEmail = -1;
        } else {
            ctrl.detailEmail = emailId;
        }
    };

    this.openAddDialog = function () {
        $mdDialog.show(addComponent)
            .then(() => loadEmails());
    };

    function loadEmails() {
        ctrl.emails = Object.values(dataservice.getAllEmails());
    }

    loadEmails();
}];

export default overviewController;