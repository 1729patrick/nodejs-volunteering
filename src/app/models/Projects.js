import Model from '../../libraries/Model';
import Users from './Users';

class Projects extends Model {
  constructor(projects = {}) {
    super('Projects', projects);

    this.id = projects.id;
    this.name = projects.name;
    this.summary = projects.summary;
    this.intervation_area = projects.intervation_area;
    this.target_audience = projects.target_audience;
    this.goals = projects.goals;
    this.required_course = projects.required_course;
    this.entities = projects.entities;
    this.observations = projects.observations;
    this.is_active = projects.is_active;
    this.is_approved = projects.is_approved;
    this.image_id = projects.image_id;
  }

  get columns() {
    return [
      { field: 'id', type: 'numeric' },
      { field: 'name', type: 'string' },
      { field: 'summary', type: 'string' },
      { field: 'intervation_area', type: 'string' },
      { field: 'target_audience', type: 'string' },
      { field: 'goals', type: 'string' },
      { field: 'required_course', type: 'string' },
      { field: 'entities', type: 'string' },
      { field: 'observations', type: 'string' },
      { field: 'is_active', type: 'undefined' },
      { field: 'is_approved', type: 'undefined' },
      { field: 'image_id', type: 'numeric' },
    ];
  }

  findAll(join) {
    return super.findAll(join);
  }
}

export default Projects;
