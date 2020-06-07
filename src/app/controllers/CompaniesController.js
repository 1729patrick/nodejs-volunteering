import Companies from '../models/Companies';

class CompaniesController {
  async index(_, res) {
    const companies_ = new Companies();

    const companies = await companies_.findAll();
    const columns = companies_.columns;

    return res.json({ columns, companies });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const companies = await new Companies(req.body).insert();

      return res.json(companies);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { companiesId } = req.params;

      const companies = await new Companies().update(
        { id: companiesId },
        req.body
      );

      return res.json(companies);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { companiesId } = req.params;

      await new Companies().delete({ id: companiesId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { companiesId } = req.params;
    const companies = (await new Companies().findBy({ id: companiesId }))[0];

    return res.json(companies);
  }
}

export default new CompaniesController();
