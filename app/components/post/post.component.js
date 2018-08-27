(function(){
  var config = {
    templateUrl: '/app/components/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl($http){
    var ctrl = this;

    ctrl.test = function(){
      $http.get('http://localhost:3000/tweets.json').then(function(response){
        return response.data;
      })
    }

    ctrl.test2 = "Hello World"
  }

  angular
    .module('yerpApp')
    .component('post', config)
})();