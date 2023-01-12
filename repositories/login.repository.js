const { User } = require("../models");

class LoginRepository {

  findOneId = async (nickname) => {
    const findOneId = await User.findOne({ where: { nickname } });

    return findOneId;
  };

  findOneUser = async (userId) => {
    const findOneUser = await User.findOne({ where: { userId } });

    return findOneUser;
  };

  updateRefresh = async (refreshToken, user) => {
    await User.update({ refreshToken }, { where: { userId: user.userId } });
  };
}

module.exports = LoginRepository;
