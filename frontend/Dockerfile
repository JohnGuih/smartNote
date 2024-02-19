FROM node:20

WORKDIR /frontend

RUN npm update

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000