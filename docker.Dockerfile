FROM mcr.microsoft.com/playwright:bionic
USER root
WORKDIR /automation
COPY package.json ./
RUN npm install

COPY . ./
RUN npm start
RUN npm run e2e

