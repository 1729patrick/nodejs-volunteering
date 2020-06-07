import Model from '../../libraries/Model';

class ProjectActivities extends Model {
  constructor(projectactivities = {}) {
    super('ProjectActivities', projectactivities);

    this.id = projectactivities.id;
		this.name = projectactivities.name;
		this.description = projectactivities.description;
		this.project_id = projectactivities.project_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'name', type: 'string' },
			{ field: 'description', type: 'string' },
			{ field: 'project_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['ProjectActivities.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default ProjectActivities;