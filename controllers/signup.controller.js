const SignupService = require("../services/signup.service");
const joi = require("../helper/joiSchema");

class SignupController {
  signupService = new SignupService();

  userSignup = async (req, res) => {
    const result = joi.userSchema.validate(req.body);
    if (result.status) {
      return res.status(result.status).json(result.message);
    }
    const { nickname, password, confirm } = await result.value;
    const createUser = await this.signupService.validateUser(
      nickname,
      password,
      confirm
    );
    return res.status(createUser.status).json(createUser.message);
  };
}
module.exports = SignupController;
