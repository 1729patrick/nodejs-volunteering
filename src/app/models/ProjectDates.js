import Model from '../../libraries/Model';

class ProjectDates extends Model {
  constructor(projectdates = {}) {
    super('ProjectDates', projectdates);

    this.id = projectdates.id;
		this.start = projectdates.start;
		this.end = projectdates.end;
		this.type = projectdates.type;
		this.project_id = projectdates.project_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'start', type: 'date' },
			{ field: 'end', type: 'date' },
			{ field: 'type', type: 'string' },
			{ field: 'project_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['ProjectDates.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default ProjectDates;