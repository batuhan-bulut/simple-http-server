const { request } = require('urllib');

test('[GET] [Auth] Hidden Basic Auth', async () => {
    options = { auth: "1:1" }
    const { data, res } = await request("http://localhost:3000/auth/hiddenbasicAuth/1/1", options)
    expect(data.toString()).toMatch(/Hidden Info, Auth Success/)
})


test('[GET] [Uauthorized] Hidden Basic Auth', async () => {
    const { data, _ } = await request("http://localhost:3000/auth/hiddenbasicAuth/1/1")
    expect(data.toString()).toMatch(/Lorem Ipsum/)
})

test('[GET] [Auth] Basic Auth', async () => {
    options = { auth: "1:1" }
    const { _, res } = await request("http://localhost:3000/auth/basicAuth/1/1", options)
    const statusCode = res.status
    expect(statusCode).toEqual(200)

})

test('[GET] [Uauthorized] Basic Auth', async () => {
    options = { auth: "1:2" }
    const { _, res } = await request("http://localhost:3000/auth/basicAuth/1/1", options)
    const statusCode = res.status
    expect(statusCode).toEqual(401)
})

test('[GET] [Auth] Digest Auth', async () => {

    const url = 'http://localhost:3000/auth/digestAuth/1/1';
    const options = { digestAuth: "1:1" };
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('[GET] [Uauthorized] Digest Auth', async () => {

    const url = 'http://localhost:3000/auth/digestAuth/1/1';
    const options = { digestAuth: "1:12" };
    const { _, res } = await request(url, options)
    expect(res.status).toEqual(401)

})