(function(){
  var config = {
    templateUrl: '/app/components/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl($http){
    var ctrl = this;

    ctrl.test = $http.get('http://localhost:3000/tweets.json').then(function(response){
      console.log(response)
    })

  }

  angular
    .module('yerpApp')
    .component('post', config)
})();