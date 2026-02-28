FROM node:18-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve
CMD serve -s build -l $PORT
```

4. **Variables** → Raw Editor → colle :
```
REACT_APP_BACKEND_URL=https://glistening-perception-production-d741.up.railway.app
