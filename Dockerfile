FROM node:18-alpine as build
LABEL authors="Jakub Jankowski"

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app
RUN apk add --no-cache curl
COPY --from=build /app /app

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s \
    CMD curl -f http://localhost:3000 || exit 1

ENTRYPOINT ["node", "server.js"]
