(function(){
    angular
        .module("SampleProject")
        .factory("HomeService", HomeService);
        
    function HomeService($http, $q){
        var service = {
            findAllColumns: findAllColumns,
            // findCertifierById: findCertifierById,
            // removeCertifierById: removeCertifierById,
            // createCertifier: createCertifier,
            // updateCertifierById: updateCertifierById,
            // findCertifierByEmailAndPassword: findCertifierByEmailAndPassword,
            // loginUser: loginUser,
            // logoutUser: logoutUser,
            // upload: upload
        };
        
        return service;
        
        function findAllColumns(){
            var deferred = $q.defer();
            $http.get("/rest/data")
            .success(function(response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        
        // function findCertifierById(id){
        //     var deferred = $q.defer();
        //     $http.get("/rest/users/"+id)
        //     .success(function(response) {
        //             deferred.resolve(response);
        //         });
        //     return deferred.promise;
        // }
        
        // function removeCertifierById(id){
        //     var deferred = $q.defer();
        //     $http.delete("/rest/users/"+id)
        //     .success(function(response) {
        //             deferred.resolve(response);
        //         });
        //     return deferred.promise;
        // }
        
        // function createCertifier(certifier){
        //     var deferred = $q.defer();
        //     $http.post("/rest/users", certifier)
        //     .success(function(response) {
        //             deferred.resolve(response);
        //         });
        //     return deferred.promise;
        // }
        
        // function updateCertifierById(id, certifier){
        //     var deferred = $q.defer();
        //     $http.put("/rest/users/"+id, certifier)
        //     .success(function(response) {
        //             deferred.resolve(response);
        //         });
        //     return deferred.promise;
        // }
        // function findCertifierByEmailAndPassword(email, password){
        //     var deferred = $q.defer();
        //     $http.get("/rest/users?email=" + email + "&password=" + password)
        //     .success(function(response) {
        //             deferred.resolve(response);
        //         });
        //     return deferred.promise;
        // }
    }
})();