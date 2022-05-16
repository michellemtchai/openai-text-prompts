# README

## Requirements

-   [Docker](https://docs.docker.com/get-docker/)

## Setup

To setup the environmental variables, run the following command in your terminal:

```
# Linux & Mac
cp ./docker/dev.env .env

# Windows
copy .\docker\dev.env .env
```

Then, open up the newly created file `.env`. Replace the value for `OPENAI_SECRET` with your own OpenAI secret API key.

You can also modify the `FRONTEND_PORT` in `.env` if the port is not available.

To start the app, run the following:

```
docker-compose up
```

You should be able to view the app in your browser of choice at:

```
http://localhost:3000
```
