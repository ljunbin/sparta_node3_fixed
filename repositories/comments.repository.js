const { Comment } = require('../models');

class CommentRepository {
  //postId기준으로 댓글 가져오기
    findComments = async (postId) => {
      const  comments = await Comment.findAll({where:{postId: postId}})
      return comments;
    }

    //댓글 아이디로 져오기
    findOneComment = async (commentId) => {
      const comments = await Comment.findByPk(commentId)
      return comments;
    }

  //댓글 생성
    createComment = async ({comment,postId,userId, nickname}) => {

      const createCommentData = await Comment.create({
        content: comment,
        postId: postId,
        userId: userId,
        nickname: nickname
    });
      return createCommentData;
    }

  //댓글 수정
    updateComment = async ({comment,commentId}) => {
      console.log(comment,commentId)
      await Comment.update({content: comment}, {where:{commentId:commentId}});
    }

  //댓글 삭제
    deleteComment = async (commentId) => {
      console.log(commentId)
      await Comment.destroy({where:{commentId:commentId}});
    }
  }


  module.exports = CommentRepository;