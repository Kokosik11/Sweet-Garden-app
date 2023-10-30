FROM node:18-alpine

WORKDIR /sweetgarden_back

COPY package*.json ./
COPY yarn.lock ./

RUN npm install

COPY src ./src
COPY .env ./

CMD npm run dev