# --- client_test: compile

FROM node:lts AS client

WORKDIR /app

COPY client_test/package.json .

RUN npm install

COPY client_test .

RUN DISABLE_ESLINT_PLUGIN=true npm run build

CMD [ "rm -rfv", "node_modules" ]
CMD [ "rm -rfv", "src" ]
CMD [ "rm -f", "index.html" ]



# --- server:

FROM node:18-alpine

RUN apk -U upgrade && apk add bash --no-cache

USER node
WORKDIR /app

COPY server/package.json .

RUN npm install

COPY --chown=node:node /server .

COPY --from=client --chown=node:node /app/build public
COPY --from=client --chown=node:node /app/build/index.html views/index.ejs


EXPOSE 1337

CMD npm start
