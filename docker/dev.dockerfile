FROM node:16-alpine

RUN yarn global add \
        react-scripts@5.0.1 \
        netlify-cli@9.16.7 \
        netlify-lambda

WORKDIR /app
