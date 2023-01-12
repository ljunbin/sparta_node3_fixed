const { Post } = require("../models");
const { Like } = require("../models");
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");

const LikesController = require("../controllers/likes.controller");

const likesController = new LikesController();

router.put("/:postId/like", authMiddleware, likesController.putLike);
router.get("/like", authMiddleware, likesController.getLike);

module.exports = router;
