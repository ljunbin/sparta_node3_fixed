// controllers/posts.controller.js
const PostService = require('../services/posts.service');

class PostsController {
  postService = new PostService(); 

  //게시물 전체 조회
  getPosts = async (req, res, next) => {
    try{
    const posts = await this.postService.findAllPost();
  
    res.status(200).json({ data: posts })
    } catch{}
  }

  //게시물 상세 조회
  getPostById = async(req,res,next)=> {
    const { postId } = req.params;
    const posts = await this.postService.findOnePost(postId);
    if(!posts) {
      
      return res.status(401).json({"message":"존재하지 않는 게시글 입니다."});
    }

    res.status(200).json({ data: posts })
  }

//게시물 생성
  createPost = async (req, res, next) => {
    const { userId, nickname } = res.locals.user;
    // res.loccals.user가 undefined일때
    console.log(userId, nickname)
    const { title, content } = req.body;
    
    const createPostData = await this.postService.createPost({title, content, userId, nickname});

    res.status(201).json({ data: createPostData });
  }

//게시물 수정
  updatePost = async (req,res, next) => {
    const { userId } = res.locals;
    const { postId } = req.params;
    const { title, content } = req.body;
    await this.postService.updatePost({postId, title, content, userId});

    res.status(201).json({ "message":"게시글을 수정하였습니다." })
  }

//게시물 삭제
  deletePost = async (req,res,next) => {
    const { userId } = res.locals;
    const { postId } = req.params;
    await this.postService.deletePost({postId,userId});

    res.status(201).json({"message":"게시글을 삭제하였습니다."})
  }
}
module.exports = PostsController;