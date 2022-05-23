FROM node:18-alpine
WORKDIR /bakeka
COPY . .
RUN yarn install --frozen-lockfile --no-cache --production
ENTRYPOINT [ "node", "build/app.js", "bakeka.config.json" ]
