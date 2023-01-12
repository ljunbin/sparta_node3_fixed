const LikesRepository = require("../repositories/likes.repository");

class LikesService {
  constructor() {
    this.likesRepository = new LikesRepository();
  }
  findOneLike = async ({ userId, postId }) => {
    console.log("2", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("3", postId);
    return like;
  };

  createLike = async ({ userId, postId }) => {
    console.log("4", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("5", postId);

    if (!like) {
      await this.likesRepository.createLike({ userId, postId });
      await this.likesRepository.upLikePost({ postId });
    }
    console.log("6", postId);
  };
  destroyLike = async ({ userId, postId }) => {
    console.log("7", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("8", postId);
    if (like) {
      await this.likesRepository.downLikePost({ postId });
      await this.likesRepository.destroyLike({ userId, postId });
    }
    console.log("9", postId);
  };
  findAllLike = async ({ userId }) => {
    const findAllLike = await this.likesRepository.findAllLike({ userId });
    const findPostId = findAllLike.map((row) => row.postId);
    let data = [];
    for (const item of findPostId) {
      const post = await this.likesRepository.findOnePost({ postId: item });
      const result = {
        postId: post.postId,
        userId: post.userId,
        nickname: post.nickname,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        likes: post.likes,
      };
      data.push(result);
    }
    data.sort((a, b) => b.likes - a.likes);
    return data;
  };
}
module.exports = LikesService;