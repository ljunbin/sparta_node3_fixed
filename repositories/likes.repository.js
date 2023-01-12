const { Like, Post } = require("../models");

class LikesRepository {
  findOneLike = async ({ userId, postId }) => {
    console.log("3");
    const findOneLike = await Like.findOne({ where: { userId, postId } });
    console.log("4");
    return findOneLike;
  };
  upLikePost = async ({ postId }) => {
    const updateLikePost = await Post.update(
      { likes: 1 },
      { where: { postId } }
    );
    return updateLikePost;
  };
  downLikePost = async ({ postId }) => {
    const updateLikePost = await Post.update(
      { likes: -1 },
      { where: { postId } }
    );
    return updateLikePost;
  };
  createLike = async ({ userId, postId }) => {
    const createLike = await Like.create({ userId, postId });

    return createLike;
  };
  destroyLike = async ({ userId, postId }) => {
    const destroyLike = await Like.destroy({ where: { userId, postId } });
    return destroyLike;
  };
  findAllLike = async ({ userId }) => {
    const findAllLike = await Like.findAll({ where: { userId } });
    return findAllLike;
  };
  findOnePost = async ({ postId }) => {
    const findOnePost = await Post.findOne({ where: postId });
    return findOnePost;
  };
}

module.exports = LikesRepository;