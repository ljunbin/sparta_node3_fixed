const CommentService = require('../services/comments.service');
const PostService = require('../services/posts.service');


class CommentsController {

  commentService = new CommentService(); 
  postService = new PostService();

  //댓글 생성
  createComments = async (req, res, next) => {
    
    const {comment} = req.body;
    const { postId } = req.params;
    const { userId, nickname } = res.locals.user

    if(!comment){
        return res.status(401).json({"message":"댓글 내용을 입력해 주세요."});
    };

    await this.commentService.createComments({comment,postId,userId, nickname});
    
    res.status(200).json({"message":"댓글을 작성하였습니다."})
  }

  //댓글 조회
  getComments = async (req, res, next) => {
    const { postId } = req.params;
    
    const posts = await this.postService.findOnePost(postId);
    if(posts){
      const comment = await this.commentService.getComments(postId);
      res.status(200).json({data: comment})
    } else {res.status(401).json({"message":"존재하지 않는 게시글 입니다."})};


  }

  //댓글 수정
  updateComments = async (req, res, next) => {
    const { commentId } = req.params;
    const { comment } = req.body;
    const { userId } = res.locals;

    await this.commentService.updateComments({commentId,comment,userId});

    res.status(201).json({ "message":"댓글을 수정하였습니다." })
  }

  //댓글 삭제
  deleteComments = async (req, res, next) => {
    const { commentId } = req.params;
    const { userId } = res.locals;

    await this.commentService.deleteComments({commentId, userId});

    res.status(201).json({ "message":"댓글을 삭제하였습니다." })
  }

}
module.exports = CommentsController;