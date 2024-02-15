FROM node:20

WORKDIR /app

RUN npm update

COPY package*.json ./

RUN npm install

COPY . .