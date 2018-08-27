describe('postComponent', function(){
  var postService;

  beforeEach(angular.mock.module('yerpApp'));

  beforeEach(inject(function(_postService_){
    postService = _postService_;
  }));

  it('should exit', function(){
    expect(postService).toBeDefined();
  })

  it('should return hello', function(){
    expect(postService.test()).toEqual('hello world')
  })
})