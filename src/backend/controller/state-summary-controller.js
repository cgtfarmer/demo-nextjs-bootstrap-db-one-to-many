import StateSummaryRepository from '@/backend/repository/state-summary-repository';

export default class StateSummaryController {

  static async index(req, res) {
    console.log('[StateSummaryController#index]');

    const response = await StateSummaryRepository.findAll();

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const stateId = req.query.stateId;
    console.log(`[StateSummaryController#show] ${stateId}`);

    const response = await StateSummaryRepository.findById(stateId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
