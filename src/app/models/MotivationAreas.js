import Model from '../../libraries/Model';

class MotivationAreas extends Model {
  constructor(motivationareas = {}) {
    super('MotivationAreas', motivationareas);

    this.id = motivationareas.id;
		this.description = motivationareas.description;
		this.is_active = motivationareas.is_active;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'description', type: 'string' },
			{ field: 'is_active', type: 'undefined' },
    ];
  }
}

export default MotivationAreas;