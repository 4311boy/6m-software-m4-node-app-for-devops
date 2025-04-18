FROM node:16-alpine

WORKDIR /app

ENV PORT=3000

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]