import Model from '../../libraries/Model';

class VoluntaryAreas extends Model {
  constructor(voluntaryareas = {}) {
    super('VoluntaryAreas', voluntaryareas);

    this.id = voluntaryareas.id;
		this.description = voluntaryareas.description;
		this.is_active = voluntaryareas.is_active;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'description', type: 'string' },
			{ field: 'is_active', type: 'undefined' },
    ];
  }
}

export default VoluntaryAreas;