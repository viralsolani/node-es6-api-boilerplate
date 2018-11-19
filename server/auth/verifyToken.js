import jwt from 'jsonwebtoken';
import config from '../config/env';

const VerifyToken = (req, res, next) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  console.log({ token });
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, config.secret, (err, decodedUser) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    req.userId = decodedUser.id;

    next();
  });
};

export default VerifyToken;
