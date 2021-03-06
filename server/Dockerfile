FROM node:14.16.0-alpine3.11

ARG NODE_ENV="production"

RUN mkdir ./server \
    && mkdir -p /var/www/html/images/


WORKDIR /server

COPY . .

RUN npm install

EXPOSE 3000

RUN npm run build

CMD node ./dist/index.js
