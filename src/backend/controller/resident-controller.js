import ResidentRepository from '@/backend/repository/resident-repository';

export default class ResidentController {

  static async index(req, res) {
    const stateId = req.query.stateId;
    console.log(`[ResidentController#index] stateId=${stateId}`);

    const response = await ResidentRepository.findAll(stateId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const stateId = req.query.stateId;
    const residentId = req.query.residentId;
    console.log(`[ResidentController#show] ${stateId}, ${residentId}`);

    const response = await ResidentRepository.findById(residentId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const stateId = req.query.stateId;
    const data = req.body;
    console.log(`[ResidentController#create] ${stateId}, ${JSON.stringify(data)}`);

    data.stateId = stateId;
    const response = await ResidentRepository.create(data);

    response.stateId = undefined;
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async update(req, res) {
    const stateId = req.query.stateId;
    // const residentId = req.query.stateId;
    const data = req.body;
    console.log(`[ResidentController#update] ${stateId}, ${JSON.stringify(data)}`);

    data.stateId = stateId;
    const response = await ResidentRepository.update(data);

    response.stateId = undefined;
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const residentId = req.query.residentId;
    console.log(`[ResidentController#destroy] ${residentId}`);

    await ResidentRepository.destroy(residentId);

    const response = { msg: 'Deleted successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
