// @ts-check
const { test, expect } = require('@playwright/test');
const PwHelpers = require('./pw-helpers');

test('retrieve state residents', async ({ request }) => {
  const createResidentBody = await PwHelpers.createDefaultResident(request);

  await PwHelpers.createDefaultResidentWithStateId(request, createResidentBody.stateId);

  await PwHelpers.createDefaultResident(request);

  const response = await request.get(`/api/states/${createResidentBody.stateId}/residents`);

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.length).toBe(2);

  const allResidentsResponse = await request.get('/api/residents');
  const allResidentsBody = await allResidentsResponse.json();

  expect(allResidentsBody.length).toBeGreaterThan(2);
});

test('create state resident', async ({ request }) => {
  const createStateBody = await PwHelpers.createDefaultState(request);

  const inputData = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    age: 35,
    weight: 185.3,
    income: 50000.0,
    stateId: createStateBody.id,
  };

  const response = await request.post(
    `/api/states/${createStateBody.id}/residents`,
    { data: inputData }
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(Number.isInteger(body.id)).toBeTruthy();
  expect(body.id).toBeGreaterThan(0);
  expect(body.firstName).toBe(inputData.firstName);
  expect(body.lastName).toBe(inputData.lastName);
  expect(body.gender).toBe(inputData.gender);
  expect(body.age).toBe(inputData.age);
  expect(body.weight).toBe(inputData.weight);
  expect(body.income).toBe(inputData.income);
  expect(body.stateId).toBe(createStateBody.id);
});

test('retrieve state resident', async ({ request }) => {
  const createResidentBody = await PwHelpers.createDefaultResident(request);
  const newResidentId = createResidentBody.id;

  const response = await request.get(
    `/api/states/${createResidentBody.stateId}/residents/${createResidentBody.id}`
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(Number.isInteger(body.id)).toBeTruthy();

  expect(body.id).toBe(newResidentId);
});

test('update state resident', async ({ request }) => {
  const createResidentBody = await PwHelpers.createDefaultResident(request);

  const inputData = {
    id: createResidentBody.id,
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'F',
    age: 33,
    weight: 155.1,
    income: 40000.0,
    stateId: createResidentBody.id,
  };

  const response = await request.put(
    `/api/states/${createResidentBody.stateIid}/residents/${createResidentBody.stateIid}`,
    { data: inputData }
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(parseInt(body.id)).toBe(inputData.id);
  expect(body.firstName).toBe(inputData.firstName);
  expect(body.lastName).toBe(inputData.lastName);
  expect(body.gender).toBe(inputData.gender);
  expect(body.age).toBe(inputData.age);
  expect(body.weight).toBe(inputData.weight);
  expect(body.income).toBe(inputData.income);
  expect(body.stateId).toBe(createResidentBody.id);
});

test('destroy state resident', async ({ request }) => {
  const createResidentBody = await PwHelpers.createDefaultResident(request);
  const newResidentId = createResidentBody.id;

  const response = await request.delete(
    `/api/states/${createResidentBody.id}/residents/${newResidentId}`
  );

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.msg).toBe('Deleted successfully');
});
