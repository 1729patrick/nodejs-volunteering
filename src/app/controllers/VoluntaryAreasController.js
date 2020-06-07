import VoluntaryAreas from '../models/VoluntaryAreas';

class VoluntaryAreasController {
  async index(_, res) {
    const voluntaryAreas_ = new VoluntaryAreas();

    const voluntaryAreas = await voluntaryAreas_.findAll();
    const columns = voluntaryAreas_.columns;

    return res.json({ columns, voluntaryAreas });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const voluntaryareas = await new VoluntaryAreas(req.body).insert();

      return res.json(voluntaryareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { voluntaryareasId } = req.params;

      const voluntaryareas = await new VoluntaryAreas().update(
        { id: voluntaryareasId },
        req.body
      );

      return res.json(voluntaryareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { voluntaryareasId } = req.params;

      await new VoluntaryAreas().delete({ id: voluntaryareasId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { voluntaryareasId } = req.params;
    const voluntaryareas = (
      await new VoluntaryAreas().findBy({ id: voluntaryareasId })
    )[0];

    return res.json(voluntaryareas);
  }
}

export default new VoluntaryAreasController();
