import ProjectActivities from '../models/ProjectActivities';

class ProjectActivitiesController {
  async index(_, res) {
    const projectActivities_ = new ProjectActivities();

    const projectActivities = await projectActivities_.findAll();
    const columns = projectActivities_.columns;

    return res.json({ columns, projectActivities });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const projectactivities = await new ProjectActivities(req.body).insert();

      return res.json(projectactivities);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { projectactivitiesId } = req.params;

      const projectactivities = await new ProjectActivities().update(
        { id: projectactivitiesId },
        req.body
      );

      return res.json(projectactivities);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { projectactivitiesId } = req.params;

      await new ProjectActivities().delete({ id: projectactivitiesId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { projectactivitiesId } = req.params;
    const projectactivities = (
      await new ProjectActivities().findBy({ id: projectactivitiesId })
    )[0];

    return res.json(projectactivities);
  }
}

export default new ProjectActivitiesController();
