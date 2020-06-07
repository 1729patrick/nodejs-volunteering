import ProjectDates from '../models/ProjectDates';

class ProjectDatesController {
  async index(_, res) {
    const projectDates_ = new ProjectDates();

    const projectDates = await projectDates_.findAll();
    const columns = projectDates_.columns;

    return res.json({ columns, projectDates });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const projectdates = await new ProjectDates(req.body).insert();

      return res.json(projectdates);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { projectdatesId } = req.params;

      const projectdates = await new ProjectDates().update(
        { id: projectdatesId },
        req.body
      );

      return res.json(projectdates);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { projectdatesId } = req.params;

      await new ProjectDates().delete({ id: projectdatesId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { projectdatesId } = req.params;
    const projectdates = (
      await new ProjectDates().findBy({ id: projectdatesId })
    )[0];

    return res.json(projectdates);
  }
}

export default new ProjectDatesController();
