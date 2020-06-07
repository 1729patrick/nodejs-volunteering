import Model from '../../libraries/Model';

class Images extends Model {
  constructor(images = {}) {
    super('Images', images);

    this.id = images.id;
		this.name = images.name;
		this.path = images.path;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'name', type: 'string' },
			{ field: 'path', type: 'string' },
    ];
  }
}

export default Images;