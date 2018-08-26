(function(){
  angular
    .module('yerpApp')
    .factory('httpService', httpService)

    httpService.$inject = ['$http']

    function httpService($http) {
      
      function getPost(){
        return ($http({method: 'GET', url: 'http://localhost:3000/tweets'})
          .then(function(response){
            return response;
          }), function(response) {
            return response
          }
        );
      }

      var service = {
        getPost: getPost
      };

      return service ; 

    }
})();