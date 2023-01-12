const { User } = require("../models");

class SignupRepository {

  findOneId = async (nickname) => {
    const findOneId = await User.findOne({where:{nickname}})

    return findOneId
  }

  createUser = async (nickname, password) => {
    console.log(nickname, password);
    const createUser = await User.create({ nickname, password });

    return createUser;
  };
}

module.exports = SignupRepository;
