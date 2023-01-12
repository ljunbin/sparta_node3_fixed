const { Users } = require("../models");

class LoginRepository {

  findOneId = async (nickname) => {
    const findOneId = await Users.findOne({ where: { nickname } });

    return findOneId;
  };

  findOneUser = async (userId) => {
    const findOneUser = await Users.findOne({ where: { userId } });

    return findOneUser;
  };

  updateRefresh = async (refreshToken, user) => {
    await Users.update({ refreshToken }, { where: { userId: user.userId } });
  };
}

module.exports = LoginRepository;
