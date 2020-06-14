import Projects from '../models/Projects';
import ProjectDates from '../models/ProjectDates';

class ProjectsController {
  async index(req, res) {
    const { type } = req.params;
    const projects_ = new Projects();

    const where = req.isAdmin ? {} : { is_active: true, is_approved: true };

    let join = (database, tableName) =>
      database
        .select([
          'Projects.*',
          'Users.name as owner_name',
          'ProjectDates.start',
          'ProjectDates.end',
          'ProjectMembers.id as patrick',
        ])
        .from(tableName)
        .where(where)
        .leftJoin('Users', 'Users.id', 'Projects.user_id')
        .leftJoin('ProjectDates', 'ProjectDates.project_id', 'Projects.id')
        .innerJoin('ProjectMembers', function () {
          this.on('ProjectMembers.project_id', '=', 'Projects.id').andOn(
            'ProjectMembers.user_id',
            '=',
            req.userId
          );
        })
        .orderBy('ProjectDates.end', 'asc');

    if (type === 'all') {
      join = (database, tableName) =>
        database
          .select([
            'Projects.*',
            'Users.name as owner_name',
            'ProjectDates.start',
            'ProjectDates.end',
          ])
          .from(tableName)
          .where(where)
          .leftJoin('Users', 'Users.id', 'Projects.user_id')
          .leftJoin('ProjectDates', 'ProjectDates.project_id', 'Projects.id')
          .orderBy('ProjectDates.end', 'asc');
    } else if (type === 'open') {
      join = (database, tableName) =>
        database
          .select([
            'Projects.*',
            'Users.name as owner_name',
            'ProjectDates.start',
            'ProjectDates.end',
          ])
          .whereNull('ProjectMembers.id')
          .where(where)
          .from(tableName)
          .leftJoin('Users', 'Users.id', 'Projects.user_id')
          .leftJoin('ProjectDates', 'ProjectDates.project_id', 'Projects.id')
          .leftJoin('ProjectMembers', function () {
            this.on('ProjectMembers.project_id', '=', 'Projects.id').andOn(
              'ProjectMembers.user_id',
              '=',
              req.userId
            );
          })
          .orderBy('ProjectDates.end', 'asc');
    }

    const projects = await projects_.findAll(join);
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
        { ...req.body, updated_at: new Date() }
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
