class DetailsController {
    constructor(dataservice, $scope) {
        this.dataservice = dataservice;
        this.emailId = $scope.emailId;
    }

    $onInit() {
        this.email = this.dataservice.getEmailById(this.emailId);
    }
}
DetailsController.$inject = ['dataservice', '$scope'];

export default DetailsController;