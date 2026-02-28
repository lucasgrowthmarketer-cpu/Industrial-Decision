FROM node:20-slim

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN yarn build

RUN yarn global add serve
CMD serve -s build -l $PORT
