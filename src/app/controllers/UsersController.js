import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import Users from '../models/Users';

class UsersController {
  async index(req, res) {
    const users_ = new Users();

    const users = await users_.findAll();
    const columns = users_.columns;

    return res.json({
      columns,
      users: users
        .filter(({ id }) => id !== req.userId)
        .map(({ password, ...user }) => user),
    });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const [id] = await new Users({
        ...req.body,
        is_admin: req.userId && req.body.is_admin,
      }).insert();

      const [user] = await new Users().findBy({ id });

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
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const users = await new Users().update(
        { id: req.params.userId || req.userId },
        req.body
      );

      return res.json(users);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req.params;

      await new Users().delete({ id: userId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { usersId } = req.params;
    const users = (await new Users().findBy({ id: usersId }))[0];

    return res.json(users);
  }
}

export default new UsersController();
