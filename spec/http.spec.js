describe('httpService', function(){
  var httpService;
  var httpBackend;
  var returnData;

  beforeEach(angular.mock.module('yerpApp'));

  beforeEach(inject(function($httpBackend, _httpService_){
    httpService = _httpService_;
    httpBackend = $httpBackend;
  }));

  beforeEach(function(){
    returnData = [{}]
  });

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('exist', function(){
    expect(httpService).toBeDefined();
  });

  describe('.getPost()', function(){
    it('return 200 status', function(){
      httpBackend.expectGET("http://localhost:3000/tweets.json").respond(returnData);
      var returnedGetPosts = httpService.getPosts();
      var result;
      returnedGetPosts.then(function successful(response){
        result = response;
      });
      httpBackend.flush();
      expect(result.status).toEqual(200);
    });
  });

  describe('.postPost(entry)', function(){
    it('returns hello word from new post', function(){
      httpBackend.expectPOST('http://localhost:3000/tweets').respond(returnData)
      var postText = 'hello world';
      var returnedPost = httpService.postPost(postText);
      var result;
      returnedPost.then(function successful(response){
        result = response;
      });
      httpBackend.flush();
      expect(result.config.data).toEqual(postText);
    });
  });

  describe('.putPost(entryID, updatedPostData)', function(){
    it('return updated post', function(){
      var postID = 1;
      var newPostText = 'new hello world';
      httpBackend.expectPUT('http://localhost:3000/tweets/' + postID, newPostText).respond(returnData);
      var returnedPost = httpService.putPost(postID, newPostText);
      var result;
      returnedPost.then(function successful(response){
        result = response;
      });

      httpBackend.flush();
      expect(result.config.data).toEqual(newPostText);
    });
  });

  describe('.deletePost(entryID)', function(){
    it('return a status 200', function(){
      var postID = 1;
      httpBackend.expectDELETE('http://localhost:3000/tweets/' + postID).respond(returnData);
      var returnedPost = httpService.deletePost(postID);
      var result;
      returnedPost.then(function successful(response){
        result = response;
      });
      httpBackend.flush();
      expect(result.status).toEqual(200);
    })
  })
})