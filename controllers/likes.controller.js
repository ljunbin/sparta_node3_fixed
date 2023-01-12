const LikesService = require("../services/likes.service");
const { InvalidParamsError } = require("../helper/index.exception");

class LikesController {
  constructor() {
    this.likesService = new LikesService();
  }
  putLike = async (req, res, next) => {
    try {
      const { userId } = res.locals.userId;
      const { postId } = req.params;
      console.log("1", postId);
      if (!userId || !postId) {
        throw new InvalidParamsError();
      }

      const findOneLike = await this.likesService.findOneLike({
        userId,
        postId,
      });
      if (!findOneLike) {
        const createLike = await this.likesService.createLike({
          userId,
          postId,
        });
        res.status(201).send({
          msg: "게시글의 좋아요를 등록하였습니다.",
        });
      } else if (findOneLike) {
        const destroyLike = await this.likesService.destroyLike({
          userId,
          postId,
        });

        res.status(200).send({
          msg: "게시글의 좋아요를 취소하였습니다.",
        });
      }
    } catch (error) {
      next(error);
    }
  };
  getLike = async (req, res, next) => {
    try {
      const { userId } = res.locals.userId;
      if (!userId) {
        throw new InvalidParamsError();
      }
      const getLike = await this.likesService.findAllLike({ userId });
      res.status(200).send({ getLike });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = LikesController;