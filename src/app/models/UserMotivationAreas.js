import Model from '../../libraries/Model';

class UserMotivationAreas extends Model {
  constructor(usermotivationareas = {}) {
    super('UserMotivationAreas', usermotivationareas);

    this.id = usermotivationareas.id;
		this.user_id = usermotivationareas.user_id;
		this.motivationarea_id = usermotivationareas.motivationarea_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'user_id', type: 'numeric' },
			{ field: 'motivationarea_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['UserMotivationAreas.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default UserMotivationAreas;