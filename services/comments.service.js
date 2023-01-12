const CommentRepository = require('../repositories/comments.repository');

class CommentService {
    commentRepository = new CommentRepository();

    createComments = async({comment,postId,userId, nickname}) => {
        console.log(comment, postId, userId, nickname)
        await this.commentRepository.createComment({comment,postId,userId, nickname});

    }
    getComments = async (postId) =>{
        const comments = await this.commentRepository.findComments(postId);


        comments.sort((a, b) => {
            return b.createdAt - a.createdAt;
          })

        return comments.map(comment => {
            return {
              commentId: comment.commentId,
              userId: comment.userId,
              nickname: comment.nickname,
              comment: comment.content,
              createdAt: comment.createdAt,
              updatedAt: comment.updatedAt,
            }
          });
    }

    updateComments = async({commentId,comment,user}) => {
      const findComment = await this.commentRepository.findOneComment(commentId)
      
      if(findComment.userId == user.userId){
        await this.commentRepository.updateComment({commentId,comment})
      }
    }

    deleteComments = async({commentId, user}) => {
      const findComment = await this.commentRepository.findOneComment(commentId)

      if(findComment.userId == user.userId){
        await this.commentRepository.deleteComment(commentId)
      }
    }

}
module.exports = CommentService;