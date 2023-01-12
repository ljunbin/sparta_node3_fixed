const express = require("express");
const router = express.Router();

const commentsRouter = require("./comments.routes");
const likesRouter = require("./likes.routes");
const loginRouter = require("./login.routes");
const postsRouter = require("./posts.routes");
const signupRouter = require("./signup.routes");

router.use("/comments", commentsRouter);
router.use("/likes", likesRouter);
router.use("/posts", postsRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);

module.exports = router;