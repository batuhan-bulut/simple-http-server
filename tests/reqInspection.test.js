const { request } = require('urllib');


test('GET Method', async () => {
    const url = 'http://localhost:3000/req/ip';
    const { _, res } = await request(url)
    
    expect(res.status).toEqual(200)

})