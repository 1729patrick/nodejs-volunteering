import Projects from '../models/Projects';
import ProjectDates from '../models/ProjectDates';

class ProjectsController {
  async index(_, res) {
    const projects_ = new Projects();

    const projects = await projects_.findAll();
    const columns = projects_.columns;

    return res.json({ columns, projects });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { start, end, ...project } = req.body;
      const [project_id] = await new Projects({
        ...project,
        user_id: req.userId,
      }).insert();

      await new ProjectDates({ type: 'A', start, end, project_id }).insert();

      return res.json(project_id);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { projectsId } = req.params;

      const projects = await new Projects().update(
        { id: projectsId },
        req.body
      );

      return res.json(projects);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { projectsId } = req.params;

      await new Projects().delete({ id: projectsId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { projectsId } = req.params;
    const projects = (await new Projects().findBy({ id: projectsId }))[0];

    return res.json(projects);
  }
}

export default new ProjectsController();
