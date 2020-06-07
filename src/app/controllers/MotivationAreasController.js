import MotivationAreas from '../models/MotivationAreas';

class MotivationAreasController {
  async index(_, res) {
    const motivationAreas_ = new MotivationAreas();

    const motivationAreas = await motivationAreas_.findAll();
    const columns = motivationAreas_.columns;

    return res.json({ columns, motivationAreas });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const motivationareas = await new MotivationAreas(req.body).insert();

      return res.json(motivationareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { motivationareasId } = req.params;

      const motivationareas = await new MotivationAreas().update(
        { id: motivationareasId },
        req.body
      );

      return res.json(motivationareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { motivationareasId } = req.params;

      await new MotivationAreas().delete({ id: motivationareasId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { motivationareasId } = req.params;
    const motivationareas = (
      await new MotivationAreas().findBy({ id: motivationareasId })
    )[0];

    return res.json(motivationareas);
  }
}

export default new MotivationAreasController();
