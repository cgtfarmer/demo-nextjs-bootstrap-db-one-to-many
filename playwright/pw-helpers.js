class PwHelpers {

  static async createDefaultState(request) {
    const response = await request.post('/api/states', {
      data: {
        name: 'Nebraska',
        symbol: 'NE',
      }
    });

    return await response.json();
  }

  static async createDefaultResident(request) {
    const createStateBody = await this.createDefaultState(request);

    const createResidentResponse = await request.post(
      `/api/states/${createStateBody.id}/residents`,
      {
        data: {
          firstName: 'John',
          lastName: 'Doe',
          gender: 'M',
          age: 40,
          weight: 200,
          income: 50000.0
        }
      }
    );

    const data = await createResidentResponse.json();

    data.stateId = createStateBody.id;
    return data;
  };

  static async createDefaultResidentWithStateId(request, stateId) {
    const createResidentResponse = await request.post(`/api/states/${stateId}/residents`, {
      data: {
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'F',
        age: 30,
        weight: 100,
        income: 40000.0
      }
    });

    return await createResidentResponse.json();
  };
}

module.exports = PwHelpers;
