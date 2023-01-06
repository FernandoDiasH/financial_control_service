FROM node:19-alpine3.16

WORKDIR /var/www

COPY ./src/package*.json ./

RUN npm i

COPY ./prisma ./prisma

COPY ./src ./src

EXPOSE ${APP_PORT}

CMD ["npm", "run", "start"]