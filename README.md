# Bakeka - Backend
This repository contains the code, tooling and deployment files for [Bakeka's](https://github.com/Bakeka) backend service.

### Configuration
> See [`src/config.ts`](src/config.ts) for the code and definition of type `Config`.

Configuration is defined in a JSON file which can be passed to the command line as follows:
```shell
$ node build/app.js bakeka.config.json
```

Values can also be defined/overridden with environment variables with syntax `BKK_SECTION_KEY=value`. For example, setting `BKK_DB_PORT=9090` will yield the object `{ db: { port: 9090 } }` which will then be merged over the parsed/default configuration.

### Development
Install all dependencies:
```shell
$ yarn
```

Run the project in development mode:

| Command          | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| `yarn dev`       | Starts the backend (and only the backend) with hot reload on code change |
| `yarn dev:stack` | Start the backend *and* MongoDB (with Docker) with hot reload as above   |

### Deployment
While local deployment through `yarn build && yarn start` is possible, [Docker Compose](https://github.com/docker/compose) is recommended for optimal management of the required services. 

```shell
$ docker compose up --build
```

### File structure
```shell
📂 src                      # Source code
  📂 api                    # Endpoints and controller(s)
  📂 entities               # Entities and Enum types
  📂 services               # Data retrieval services
⚙️ bakeka.config.json       # Backend service configuration file
📄 Dockerfile               # Docker runtime container for the backend
📄 docker-compose.yml       # Service stack for the backend
📄 package.json             # Dependencies, metadata and scripts
```