import ProjectMembers from '../models/ProjectMembers';

class ProjectMembersController {
  async index(_, res) {
    const projectMembers_ = new ProjectMembers();

    const projectMembers = await projectMembers_.findAll();
    const columns = projectMembers_.columns;

    return res.json({ columns, projectMembers });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const projectmembers = await new ProjectMembers({
        ...req.body,
        user_id: req.userId,
        is_owner: false,
      }).insert();

      return res.json(projectmembers);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { projectmembersId } = req.params;

      const projectmembers = await new ProjectMembers().update(
        { id: projectmembersId },
        req.body
      );

      return res.json(projectmembers);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { project_id } = req.params;

      await new ProjectMembers().delete({ user_id: req.userId, project_id });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { projectmembersId } = req.params;
    const projectmembers = (
      await new ProjectMembers().findBy({ id: projectmembersId })
    )[0];

    return res.json(projectmembers);
  }
}

export default new ProjectMembersController();
