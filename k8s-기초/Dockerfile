FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8082

RUN yarn build
CMD ["yarn", "start"]