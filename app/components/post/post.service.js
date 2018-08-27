(function(){
  angular
    .module('yerpApp')
    .factory('postService', postService)

    function postService(){

      var service = {
        test: test
      }

      return service;

      function test(){
        return 'hello world'
      }

    }
})();