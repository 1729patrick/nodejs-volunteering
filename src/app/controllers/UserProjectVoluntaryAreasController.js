import UserProjectVoluntaryAreas from '../models/UserProjectVoluntaryAreas';

class UserProjectVoluntaryAreasController {
  async index(_, res) {
    const userProjectVoluntaryAreas_ = new UserProjectVoluntaryAreas();

    const userProjectVoluntaryAreas = await userProjectVoluntaryAreas_.findAll();
    const columns = userProjectVoluntaryAreas_.columns;

    return res.json({ columns, userProjectVoluntaryAreas });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const userprojectvoluntaryareas = await new UserProjectVoluntaryAreas(
        req.body
      ).insert();

      return res.json(userprojectvoluntaryareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { userprojectvoluntaryareasId } = req.params;

      const userprojectvoluntaryareas = await new UserProjectVoluntaryAreas().update(
        { id: userprojectvoluntaryareasId },
        req.body
      );

      return res.json(userprojectvoluntaryareas);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { userprojectvoluntaryareasId } = req.params;

      await new UserProjectVoluntaryAreas().delete({
        id: userprojectvoluntaryareasId,
      });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { userprojectvoluntaryareasId } = req.params;
    const userprojectvoluntaryareas = (
      await new UserProjectVoluntaryAreas().findBy({
        id: userprojectvoluntaryareasId,
      })
    )[0];

    return res.json(userprojectvoluntaryareas);
  }
}

export default new UserProjectVoluntaryAreasController();
