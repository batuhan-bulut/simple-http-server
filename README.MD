
# Simple HTTP / HTTPs Server

Purpose of this project is test the Authentication on the websites or common responses..

## How to Install

You can simply run:
 ```
 npm install
 npm start
 ```

Also I have nodemon in `npm run dev` if you're willing to use with `nodemon`

If you create/add/change the endpoints you can edit swagger definitions as comments and run `npm run swagger-autogen` for create the modified Swagger page.
## Docker Install Steps

You can run theses commands:
```
docker build . -t batuhan-bulut/simple-http-server
docker run -p 3000:3000 batuhan-bulut/simple-http-server
```

## How to Test

I used [jest framework](https://jestjs.io/ "jest framework") to test my code. 

To test it on your local you need to run the server and run the test code.

* Open a terminal and run `npm start` (*This will start the server*)
* Open a second terminal and run `npm test` (*This will start testing*)

Note: I am using [axios](https://axios-http.com/ "axios") for make a requests.

## Details

### Return known status codes (200, 301, 404, 500, etc.)
    200 
    301 
    302
    404
    500
    etc.
### Return crazy status codes (1, 364, 463, etc.)
    1
    356
    234
    753
    etc.
### Support Authentication methods
    Basic
    Digest
    
### Bad Certificates
    Bad Certificates for testing

### API definition
    API definition file for importing
    API test page from browser