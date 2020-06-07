import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Users from '../models/Users';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const [user] = await new Users().findBy({ email, password });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.is_admin,
      },
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      }
    );

    return res.json({
      user,
      token,
    });
  }
}

export default new SessionController();
