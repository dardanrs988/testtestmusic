# 1. Builder Stage
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Copy root package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js application from the root
RUN npm run build

# 2. Runner Stage
FROM node:20-slim AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy the standalone output
COPY --from=builder /app/.next/standalone ./

# Copy the public and static assets from their correct locations
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 9002

# Start the application using the standalone server.js
CMD ["node", "server.js"]
