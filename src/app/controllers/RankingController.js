import Projects from '../models/Projects';
import ProjectMembers from '../models/ProjectMembers';

class Ranking {
  async index(req, res) {
    let join = (database, tableName) =>
      database
        .select(['Users.*'])
        .count('user_id')
        .from(tableName)
        .groupBy(['user_id', 'Users.id'])
        .leftJoin('Users', 'Users.id', 'ProjectMembers.user_id')
        .orderByRaw('count(user_id) desc');

    const projects_ = new ProjectMembers();
    const projects = await projects_.findAll(join);

    return res.json({ projects });
  }
}

export default new Ranking();
