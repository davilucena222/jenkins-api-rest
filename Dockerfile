# Estágio 1
FROM node:16-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm test

# Estágio 2
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["npm", "start"]

