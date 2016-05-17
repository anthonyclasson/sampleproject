(function () {
  "use strict";
  angular
    .module("SampleProject")
    .controller("HomeController", HomeController);

  function HomeController($scope, HomeService, $location, $routeParams) {
        
        $scope.GetValue = GetValue;
        $scope.selected = false;
        $scope.search = {};
        
        $scope.pageSizeOptions = [{label:'10', value: 10}, {label: '25', value: 25}, {label: '50', value: 50}, {label:'100',value:100}, {label: 'All', value: $scope.slen}];
	    $scope.pageSize = $scope.pageSizeOptions[0].value;
	    $scope.page = 1;

        
        HomeService.findAllColumns()
          .then(function(response){
              $scope.columns = response;
              $scope.keys = Object.keys($scope.columns);
              //shift off mongo id property
              $scope.keys.shift();
              console.log($scope.keys);
          });

        function GetValue(cat){
            var category = $scope.category;
            console.log(category);
            $scope.selected = true;
        }
        
  }
})();