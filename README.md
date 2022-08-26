# @heusalagroup/whois.hg.fi

This backend provides whois REST API as a microservice.

## Using with docker-compose

### Build the service

```shell
docker-compose build
```

### Start the service

```shell
docker-compose up
```

## Local development

*Note!* This is so small service that local development can be done using Docker
much easier. It's also much more secure option.

### Start the server in development mode

FIXME: This isn't working right now. Use production mode.

```
npm start
```

### Build the server

```
npm run build
```

### Start the server in production mode

```
npm run start-prod
```

...and open http://0.0.0.0:3000
