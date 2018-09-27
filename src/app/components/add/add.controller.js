
function DialogController($scope, $mdDialog, dataservice) {
    $scope.close = function () {
        $mdDialog.hide();
    };

    $scope.email = {};

    $scope.addMail = function () {
        if ($scope.addMailForm.$invalid) {
            return;
        }

        dataservice.addEmail($scope.email.to, $scope.email.from, $scope.email.subject, $scope.email.date, $scope.email.body);

        $scope.email = {};
        $scope.addMailForm.$setPristine();
        $scope.addMailForm.$setUntouched();

        $scope.close();
    };
}

export default DialogController;