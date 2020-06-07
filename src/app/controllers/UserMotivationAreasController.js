import UserMotivationAreas from '../models/UserMotivationAreas';

class UserMotivationAreasController {
  async index(_, res) {
    const userMotivationAreas_ = new UserMotivationAreas();

    const userMotivationAreas = await userMotivationAreas_.findAll();
    const columns = userMotivationAreas_.columns;

    return res.json({ columns, userMotivationAreas });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const usermotivationareas = await new UserMotivationAreas(
        req.body
      ).insert();

      return res.json(usermotivationareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { usermotivationareasId } = req.params;

      const usermotivationareas = await new UserMotivationAreas().update(
        { id: usermotivationareasId },
        req.body
      );

      return res.json(usermotivationareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { usermotivationareasId } = req.params;

      await new UserMotivationAreas().delete({ id: usermotivationareasId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { usermotivationareasId } = req.params;
    const usermotivationareas = (
      await new UserMotivationAreas().findBy({ id: usermotivationareasId })
    )[0];

    return res.json(usermotivationareas);
  }
}

export default new UserMotivationAreasController();
