describe('postComponent', function(){
  var $controller;
  var $componentController;
  var $httpBackend;
  var returnData;

  beforeEach(angular.mock.module('yerpApp'));

  beforeEach(inject(function(_$componentController_, _$httpBackend_){
    $componentController = _$componentController_;
    $httpBackend = _$httpBackend_;
    returnData = {}
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('.getPost()', function(){
    it('return get posts', function(){
      $httpBackend.expectGET('http://localhost:3000/tweets.json').respond(returnData);
      var result;
      var ctrl = $componentController('post').getPosts();
      ctrl.then(function successful(response){
        result = response;
      });
      $httpBackend.flush();
      expect(result.status).toEqual(200);
    });
  });

  describe('.postPost()', function(){
    it('return get posts', function(){
      $httpBackend.expectPOST('http://localhost:3000/tweets').respond(returnData);
      var result;
      var newPost = 'hey guys'
      var ctrl = $componentController('post').postPost(newPost);
      ctrl.then(function successful(response){
        result = response;
      });
      $httpBackend.flush();
      expect(result.status).toEqual(200);
    });
  });

  describe('.putPost', function(){
    it('return updated post', function(){
      var postID = 1;
      $httpBackend.expectPUT('http://localhost:3000/tweets/' + postID).respond(returnData);
      var editEntry = "new world"
      var result;
      var ctrl = $componentController('post').putPost(postID, editEntry);
      ctrl.then(function successful(response){
        result = response;
      });
      $httpBackend.flush();
      expect(result.status).toEqual(200);
    })
  })

  describe('.deletePost', function(){
    it('return updated delete', function(){
      var postID = 1;
      $httpBackend.expectDELETE('http://localhost:3000/tweets/' + postID).respond(returnData);
      var result;
      var ctrl = $componentController('post').deletePost(postID);
      ctrl.then(function successful(response){
        result = response;
      });
      $httpBackend.flush();
      expect(result.status).toEqual(200);
    })
  })

})