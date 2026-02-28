FROM node:18-slim

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve
CMD serve -s build -l $PORT
