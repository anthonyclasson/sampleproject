(function() {
  "use strict";
  angular
    .module("SampleProject")
    .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "client/pages/home/home.view.html",
                    controller: "HomeController as controller"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
       
        
})();