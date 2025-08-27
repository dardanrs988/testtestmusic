# 1. Base Image
FROM node:20-alpine AS base

# 2. Builder Image
FROM base AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# 3. Runner Image
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 9002

CMD ["npm", "start"]
