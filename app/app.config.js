(function(){
  angular
    .module('yerpApp')
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    })
})();