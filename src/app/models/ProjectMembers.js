import Model from '../../libraries/Model';

class ProjectMembers extends Model {
  constructor(projectmembers = {}) {
    super('ProjectMembers', projectmembers);

    this.id = projectmembers.id;
    this.privacy = projectmembers.privacy;
    this.is_owner = projectmembers.is_owner;
    this.user_id = projectmembers.user_id;
    this.project_id = projectmembers.project_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
      { field: 'privacy', type: 'string' },
      { field: 'is_owner', type: 'undefined' },
      { field: 'user_id', type: 'numeric' },
      { field: 'project_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database.select(['ProjectMembers.*']).from(tableName);

    return super.findAll(join);
  }
}

export default ProjectMembers;
