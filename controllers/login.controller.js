const LoginService = require("../services/login.service.js");

class LoginController {
  loginService = new LoginService();

  userLogin = async (req, res, next) => {
    try {
      const { nickname, password } = req.body;

      const user = await this.loginService.loginuser(nickname, password);

      res.cookie("accessToken", user[1]); 
      res.cookie("refreshToken", user[2]);
      res.status(200).json({
        nickname: user[0].nickname,
        userId: user[0].userId,
        accessToken: user[1],
        refreshToken: user[0].refreshToken,
        msg: "로그인에 성공하였습니다.",
      });
    } catch (error) {
      next(error);
    }
  };

  confirmUser = async (req, res, next) => {
    try {
      const { userId, nickname } = res.locals.userId;
      const { accessToken  } = res.locals;

      const existUser = await this.loginService.checkUser(userId);
        
      if (existUser.refreshToken === refreshToken){
        res.status(200).json({
            ok: true,
            msg: '로그인 유저 정보 확인',
            accessToken,
            refreshToken: existUser.refreshToken,
      });
      }
      
    } catch (error) {
      next(error);
    }
  };
}

module.exports = LoginController;
