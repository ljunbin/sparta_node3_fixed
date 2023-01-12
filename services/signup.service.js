const SignupRepository = require("../repositories/signup.repository");
const { isRegexValidation } = require("../helper/regex.helper");
const { ValidationError } = require('../helper/index.exception');
// const Joi = require('../helper/joiSchema');

class SignupService {
  signupRepository = new SignupRepository();

  validateUser = async (nickname, password, confirm) => {

    if (password !== confirm){
        throw new ValidationError('패스워드가 일치하지 않습니다');
    } 

    const findId = await this.signupRepository.findOneId(nickname);
    
    if (findId) throw new Error("이미 사용중인 아이디입니다")

    
    if (isRegexValidation(password, nickname)){
        throw new ValidationError('패스워드에 닉네임이 포함되어있습니다');
    }

    await this.signupRepository.createUser(nickname, password);
    return{status:200, message: "회원가입에 성공했습니다"}
  };
};

module.exports = SignupService;