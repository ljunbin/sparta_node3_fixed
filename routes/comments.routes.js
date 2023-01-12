const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post("/:postId",authMiddleware,commentsController.createComments);      //댓글생성 
router.get("/:postId",commentsController.getComments);                         //댓글조회 
router.put("/:commentId",authMiddleware,commentsController.updateComments);    //댓글수정 
router.delete("/:commentId",authMiddleware,commentsController.deleteComments); //댓글삭제.

module.exports = router;