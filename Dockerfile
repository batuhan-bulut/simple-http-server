FROM node:18.16.1-alpine
RUN apk --no-cache add git
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
#
RUN git clone https://github.com/batuhan-bulut/simple-http-server.git /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
EXPOSE 3000
CMD [ "node", "index.js" ]