const axios = require('axios').default;
const { request } = require('urllib');

test('[GET] [Auth] Hidden Basic Auth', async () => {
    const res = await axios
        .get("http://localhost:3000/auth/hiddenbasicAuth/1/1", {
            auth: {
                username: 1,
                password: 1
            }
        })
    expect(res.data).toMatch(/Hidden Info, Auth Success/)
})


test('[GET] [Uauthorized] Hidden Basic Auth', async () => {
    const res = await axios
        .get("http://localhost:3000/auth/hiddenbasicAuth/1/1")
        .catch((error) => {
            expect(error.response.data).toMatch(/Lorem Ipsum/)
        })
})


test('[GET] [Auth] Basic Auth', async () => {
    const res = await axios
        .get("http://localhost:3000/auth/basicAuth/1/1", {
            auth: {
                username: 1,
                password: 1
            }
        })
    const statusCode = res.status
    expect(statusCode).toEqual(200)
})

test('[GET] [Uauthorized] Basic Auth', async () => {
    const res = await axios
        .get("http://localhost:3000/auth/basicAuth/1/1", {
            auth: {
                username: 2,
                password: 1
            }
        }).catch((error) => {
            expect(error.response.status).toEqual(401)
        });

})

test('[GET] [Auth] Digest Auth', async () => {

    const url = 'http://localhost:3000/auth/digestAuth/1/1';
    const options = {
        digestAuth: "1:1",
    };

    const { _, res } = await request(url, options)
    expect(res.status).toEqual(200)

})

test('[GET] [Uauthorized] Digest Auth', async () => {

    const url = 'http://localhost:3000/auth/digestAuth/1/1';
    const options = {
        digestAuth: "1:12",
    };

    const { _, res } = await request(url, options)
    expect(res.status).toEqual(401)

})