import supertest from 'supertest';
import { app as api } from '../../src/app';

describe('Initial route test', () => {
  it('Default route functionality test', async () => {

    const response = await supertest(api).get('/api/initialRoute');

    expect(response.status).toBe(200);
  })
})