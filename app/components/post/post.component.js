(function(){
  var config = {
    templateUrl: '/app/components/post/post.component.html',
    controller: postCtrl
  }

  postCtrl.$inject = ['httpService'];

  function postCtrl(httpService){
    var ctrl = this;

    ctrl.getPosts = httpService.getPosts

    ctrl.postPost = httpService.postPost

    ctrl.putPost = httpService.putPost

    ctrl.deletePost = httpService.deletePost
  }

  angular
    .module('yerpApp')
    .component('post', config)
})();