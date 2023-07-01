FROM node:18.16.1-alpine
RUN apk --no-cache add git

WORKDIR /usr/src/app
RUN git clone https://github.com/batuhan-bulut/simple-http-server.git /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]