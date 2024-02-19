FROM node:20

WORKDIR /frontend

RUN npm update

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000