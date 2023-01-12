const  {Users}  = require("../models");

class SignupRepository {

  findOneId = async (nickname) => {
    console.log(nickname)
    const findOneId = await Users.findOne({where:{nickname}})
    

    return findOneId
  }

  createUser = async (nickname, password) => {
    console.log(nickname, password);
    const createUser = await Users.create({ nickname, password });

    return createUser;
  };
}

module.exports = SignupRepository;
