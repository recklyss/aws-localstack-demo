FROM node:12.16-alpine

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY src ./src
COPY tsconfig.json .

RUN yarn install
RUN yarn compile
