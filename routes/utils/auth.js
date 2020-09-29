const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

const db = require('../../db/models');

const { User } = db;

const getUserToken = (user) => {
    //Do not store hashed passwords
    const userDataForToken = {
        id: user.id,
        emailAddress: user.emailAddress,
    };

    // generate token.
    const token = jwt.sign(
        { data: userDataForToken },
        secret,
        { expiresIn: parseInt(expiresIn, 10) }
    );

    return token;
};


const getUserFromToken = async (token) => {
    try {
      const payload = jwt.verify(
        token,
        secret
      );
      return await User.findByPk(payload.data.id);
    } catch(err) {
      return null;
    }
}

const requireUser = (req, res, next) => {
  if (req.user) return next();
  const err = Error("Unauthorized");
  err.status = 401;
  err.title = "Unauthorized";
  next(err);
}

module.exports = { getUserToken, getUserFromToken, requireUser};
