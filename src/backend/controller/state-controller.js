import StateRepository from '@/backend/repository/state-repository';

export default class StateController {

  static async index(req, res) {
    console.log('[StateController#index]');

    const response = await StateRepository.findAll();

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const stateId = req.query.stateId;
    console.log(`[StateController#show] ${stateId}`);

    const response = await StateRepository.findById(stateId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const data = req.body;
    console.log(`[StateController#create] ${JSON.stringify(data)}`);

    const response = await StateRepository.create(data);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async update(req, res) {
    const stateId = req.query.stateId;
    const data = req.body;
    console.log(`[StateController#update] ${stateId}, ${JSON.stringify(data)}`);

    data.id = stateId;
    const response = await StateRepository.update(data);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const stateId = req.query.stateId;
    console.log(`[StateController#destroy] ${stateId}`);

    await StateRepository.destroy(stateId);

    const response = { msg: 'Deleted successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
