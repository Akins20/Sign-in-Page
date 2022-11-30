app.controller("myCntrl", function ($scope) {
    $scope.name = "Akins";
    $scope.surname = "Ogunbiyi";
    $scope.category = ["Link1", "Link2", "link3", "Link4"];
});
apps.controller("myControl", function ($scope) {
    $scope.name = "akins";
});
TDapp.controller("TDctrl", function ($scope) {
    $scope.list = ["Check out MTS315", "Revise Angular .js all over again", "Do the Laundry"];
});
TdMod.controller("To-doCtrl", function ($scope) {
    $scope.todoList = [{ todoText: 'Practice Javascript', done: true }];

    $scope.todoAdd = function () {
        $scope.todoList.push({ todoText: $scope.todoInput, done: false });
        $scope.todoInput = "";
    }
    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});