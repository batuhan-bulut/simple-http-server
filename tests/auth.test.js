const axios = require('axios').default;

test('[GET] [Auth] Simple Auth', async () => {
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

test('[GET] [Unauth] Simple Auth', async () => {
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