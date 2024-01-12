# environment virtual menggunakan nodejs
# agar perintah nodejs sudah tersedia didalam env 
FROM node:18.14.2-alpine3.17

WORKDIR /todo-api-example/src/app

COPY package*.json ./

RUN npm isntall

COPY . .

EXPOSE 8080

CMD [ "node","app.js" ]
