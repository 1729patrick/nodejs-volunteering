import Model from '../../libraries/Model';

class Companies extends Model {
  constructor(companies = {}) {
    super('Companies', companies);

    this.id = companies.id;
		this.name = companies.name;
		this.image_id = companies.image_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'name', type: 'string' },
			{ field: 'image_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['Companies.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default Companies;