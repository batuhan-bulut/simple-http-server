const axios = require('axios').default;
const { request } = require('urllib');

2
test('GET Method', async () => {

    const url = 'http://localhost:3000/custom/get/267';
    const { _, res } = await request(url)
    expect(res.status).toEqual(267)

})

test('POST Method', async () => {

    const url = 'http://localhost:3000/custom/post/267';
    options = {method : "POST"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(267)

})

test('DELETE Method', async () => {

    const url = 'http://localhost:3000/custom/delete/267';
    options = {method : "DELETE"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(267)

})

test('HEAD Method', async () => {

    const url = 'http://localhost:3000/custom/head/267';
    options = {method : "HEAD"}
    const { _, res } = await request(url,options)
    expect(res.status).toEqual(267)

})

test('OPTIONS Method', async () => {

    const url = 'http://localhost:3000/custom/options/267';
    options = {method : "OPTIONS"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(267)

})

test('PATCH Method', async () => {

    const url = 'http://localhost:3000/custom/patch/267';
    options = {method : "PATCH"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(267)

})

test('PUT Method', async () => {

    const url = 'http://localhost:3000/custom/put/267';
    options = {method : "PUT"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(267)

})