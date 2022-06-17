# Dockerfile for React client

# Build react client
FROM node:14-slim

# Working directory be app
WORKDIR /usr/src/app

COPY ./package.json ./

###  Installing dependencies

RUN yarn install 

# copy local files to app folder
COPY . .

EXPOSE 8080

CMD ["node","app.js"]