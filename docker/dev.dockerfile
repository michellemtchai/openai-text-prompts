FROM node:16-alpine

RUN yarn global add \
        react-scripts@3.4.3 \
        netlify-cli

WORKDIR /app
