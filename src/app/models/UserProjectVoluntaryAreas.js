import Model from '../../libraries/Model';

class UserProjectVoluntaryAreas extends Model {
  constructor(userprojectvoluntaryareas = {}) {
    super('UserProjectVoluntaryAreas', userprojectvoluntaryareas);

    this.id = userprojectvoluntaryareas.id;
		this.voluntaryarea_id = userprojectvoluntaryareas.voluntaryarea_id;
		this.project_id = userprojectvoluntaryareas.project_id;
		this.user_id = userprojectvoluntaryareas.user_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'voluntaryarea_id', type: 'numeric' },
			{ field: 'project_id', type: 'numeric' },
			{ field: 'user_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['UserProjectVoluntaryAreas.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default UserProjectVoluntaryAreas;