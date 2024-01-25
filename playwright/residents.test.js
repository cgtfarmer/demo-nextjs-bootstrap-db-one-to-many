// @ts-check
const { test, expect } = require('@playwright/test');
const PwHelpers = require('./pw-helpers');

test('retrieve residents', async ({ request }) => {
  await PwHelpers.createDefaultResident();

  const response = await request.get('/api/residents');

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.length).toBeGreaterThanOrEqual(1);
});
