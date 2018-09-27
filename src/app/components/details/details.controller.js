const detailsController = ['dataservice', '$scope', function (dataservice, $scope) {
    this.email = dataservice.getEmailById($scope.emailid);
}];

export default detailsController;