import Images from '../models/Images';

class ImagesController {
  async index(_, res) {
    const images_ = new Images();

    const images = await images_.findAll();
    const columns = images_.columns;

    return res.json({ columns, images });
  }

  async store(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const images = await new Images(req.body).insert();

      return res.json(images);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async update(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ error: 'Invalid parameters' });
      }

      const { imagesId } = req.params;

      const images = await new Images().update({ id: imagesId }, req.body);

      return res.json(images);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    try {
      const { imagesId } = req.params;

      await new Images().delete({ id: imagesId });

      return res.send();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async findOne(req, res) {
    const { imagesId } = req.params;
    const images = (await new Images().findBy({ id: imagesId }))[0];

    return res.json(images);
  }
}

export default new ImagesController();
