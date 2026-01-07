FROM oven/bun:canary-alpine

RUN mkdir -p /home/bun/fastify-api && chown -R bun:bun /home/bun/fastify-api
WORKDIR /home/bun/fastify-api

COPY package*.json ./
COPY bun.lock ./
RUN bun install

COPY --chown=bun:bun . .

EXPOSE 3000

CMD ["bun",  "run", "dev"]

