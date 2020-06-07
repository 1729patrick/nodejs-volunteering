import Model from '../../libraries/Model';

class Users extends Model {
  constructor(users = {}) {
    super('Users', users);

    this.id = users.id;
		this.name = users.name;
		this.email = users.email;
		this.password = users.password;
		this.phone = users.phone;
		this.city = users.city;
		this.date_of_birth = users.date_of_birth;
		this.status = users.status;
		this.school = users.school;
		this.course = users.course;
		this.observations = users.observations;
		this.is_admin = users.is_admin;
		this.privacity = users.privacity;
		this.company_id = users.company_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
			{ field: 'name', type: 'string' },
			{ field: 'email', type: 'string' },
			{ field: 'password', type: 'string' },
			{ field: 'phone', type: 'string' },
			{ field: 'city', type: 'string' },
			{ field: 'date_of_birth', type: 'string' },
			{ field: 'status', type: 'string' },
			{ field: 'school', type: 'string' },
			{ field: 'course', type: 'string' },
			{ field: 'observations', type: 'string' },
			{ field: 'is_admin', type: 'undefined' },
			{ field: 'privacity', type: 'string' },
			{ field: 'company_id', type: 'numeric' },
    ];
  }

  findAll() {
    let join = (database, tableName) =>
      database
        .select(['Users.*'])
        .from(tableName);

    return super.findAll(join);
  }
}

export default Users;