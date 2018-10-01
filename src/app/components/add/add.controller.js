
class DialogController {
    constructor($mdDialog, dataservice) {
        this.$mdDialog = $mdDialog;
        this.dataservice = dataservice;
    }

    $onInit() {
        this.email = {};
    }

    close() {
        this.$mdDialog.hide();
    }

    addMail() {
        if (this.addMailForm.$invalid) {
            return;
        }

        this.dataservice.addEmail(this.email.to, this.email.from, this.email.subject, this.email.date, this.email.body);

        this.email = {};
        this.addMailForm.$setPristine();
        this.addMailForm.$setUntouched();

        this.close();
    }
}
DialogController.$inject = ['$mdDialog', 'dataservice'];

export default DialogController;