(function(){
  angular
    .module('yerpApp')
    .factory('httpService', httpService)

    httpService.$inject = ['$http']

    function httpService($http) {
      
      var service = {
        getPosts: getPosts,
        postPost: postPost,
        putPost: putPost,
        deletePost: deletePost
      };

      return service ; 

      /////

      function getPosts(){
        return (
          $http
            .get('http://localhost:3000/tweets.json')
        );
      }

      function postPost(entry){
        return (
          $http
            .post('http://localhost:3000/tweets', entry)
        );
      }

      function putPost(entryID, updatedPostData){
        return(
          $http
            .put('http://localhost:3000/tweets/' + entryID, updatedPostData)
        );
      }

      function deletePost(entryID){
        return(
          $http
            .delete('http://localhost:3000/tweets/' + entryID)
        );
      };
    }
})();