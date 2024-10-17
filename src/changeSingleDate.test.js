// server.test.js

const request = require('supertest');
const app = require('./index');
const http = require('http');
const moment = require('moment');

let server;
let spy;

let originalDateNow;

jest.setTimeout(1000 * 60 * 30); // 30 minutes

describe('Testing endpoints with mocked dates', () => {
  const originalDate = Date;

  beforeAll(() => {
    originalDateNow = Date.now;
    const mockDate = new Date('2024-10-16');
    global.Date = jest.fn(() => mockDate);
    global.Date.now = jest.fn(() => new Date("2024-10-16").getTime());
    global.Date.UTC = jest.fn(() => new Date("2024-10-16").getTime());

    spy = jest.spyOn(moment.prototype, 'diff').mockImplementation(() => {
      // Return a custom value for the diff
      return 90;
    });
    server = http.createServer(app);
  });

  afterAll(() => {
    global.Date = originalDate; // Restore original Date object
    global.Date.now = originalDateNow;

    server.close(() => {
    	console.log('Test server stopped');
    	done();
  	});
  });

  it('should return data based on the mocked date', async () => {

    const response = await request(server).get('/next-journey');

    expect(response.status).toBe(200);

    //console.log("PGB");
    //console.log("PGB Journey-list: " + JSON.stringify(response.body));
    //expect(response.body.today).toBe('2025-01-05');
    //await request(app).get('/shutdown');
    
  });
});

