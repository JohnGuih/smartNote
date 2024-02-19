FROM node:20

WORKDIR /backend

RUN npm update

COPY package*.json ./

RUN npm install

COPY . .