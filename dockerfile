FROM node:19-alpine3.16

WORKDIR /var/www

COPY ./src/package*.json ./

RUN npm i

COPY ./src .

EXPOSE ${APP_PORT} ${DB_PORT}

CMD ["npm", "run", "start"]