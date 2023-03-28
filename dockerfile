FROM node:18-alpine3.16

USER node

WORKDIR /home/node/app

EXPOSE ${APP_PORT}

CMD ["npm", "run", "start"]