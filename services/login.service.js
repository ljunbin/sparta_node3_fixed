require("dotenv").config();
const LoginRepository = require("../repositories/login.repository");
const { ValidationError } = require("../helper/index.exception");
const jwt = require("jsonwebtoken");

class LoginService {
  loginRepository = new LoginRepository();

  loginuser = async (nickname, password) => {
    const user = await this.loginRepository.findOneId(nickname);

    if (!user) {
      throw new ValidationError("아이디 또는 패스워드가 잘못되었습니다.");
    }

    const accessToken = jwt.sign(
      { userId: user.userId },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign(
      { userId: user.userId },
      process.env.SECRET_KEY,
      { expiresIn: "21d" }
    );
    console.log(accessToken, "access토큰 확인");
    console.log(refreshToken, "refresh토큰 확인");

    await this.loginRepository.updateRefresh(refreshToken, user);

    return [user, accessToken, refreshToken];
  };

  checkUser = async (userId) => {
    const existUser = await this.loginRepository.findOneUser(userId);

    return existUser;
  };
}

module.exports = LoginService;

