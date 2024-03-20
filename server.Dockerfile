FROM node:18-alpine AS server-dependencies

WORKDIR /app

RUN apk -U upgrade \
  && apk add bash \
  --no-cache

COPY server/package.json .

RUN npm install

USER node

COPY --chown=node:node /server .

EXPOSE 1337

CMD npm start
