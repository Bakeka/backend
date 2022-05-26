FROM node:18-alpine as builder
WORKDIR /bakeka
COPY . .
RUN yarn && yarn build

FROM node:18-alpine
WORKDIR /bakeka
COPY --from=builder /bakeka/build ./build
COPY . .
RUN yarn install --frozen-lockfile --no-cache --production
EXPOSE 8080
ENTRYPOINT [ "node", "build/app.js", "bakeka.config.json" ]
