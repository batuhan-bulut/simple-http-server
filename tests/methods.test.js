const axios = require('axios').default;
const { request } = require('urllib');


test('GET Method', async () => {

    const url = 'http://localhost:3000/methods/get';
    const { _, res } = await request(url)
    expect(res.status).toEqual(200)

})

test('POST Method', async () => {

    const url = 'http://localhost:3000/methods/post';
    options = {method : "POST"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('DELETE Method', async () => {

    const url = 'http://localhost:3000/methods/delete';
    options = {method : "DELETE"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('HEAD Method', async () => {

    const url = 'http://localhost:3000/methods/head';
    options = {method : "HEAD"}
    const { _, res } = await request(url,options)
    expect(res.status).toEqual(200)

})

test('OPTIONS Method', async () => {

    const url = 'http://localhost:3000/methods/options';
    options = {method : "OPTIONS"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('PATCH Method', async () => {

    const url = 'http://localhost:3000/methods/patch';
    options = {method : "PATCH"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('PUT Method', async () => {

    const url = 'http://localhost:3000/methods/put';
    options = {method : "PUT"}
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})