
# 1. Base Image for Installing Dependencies
FROM node:20-slim AS deps

# Use /app as the working directory.
WORKDIR /app

# Copy dependency definition files.
COPY package.json package-lock.json* ./

# Install production dependencies.
RUN npm install --omit=dev


# 2. Builder Stage
FROM node:20-slim AS builder
WORKDIR /app

# Copy dependencies from the 'deps' stage.
COPY --from=deps /app/node_modules ./node_modules
COPY package.json .

# Copy the rest of the application source code.
COPY . .

# Build the Next.js application.
RUN npm run build


# 3. Runner Stage
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy the standalone Next.js server output.
COPY --from=builder /app/.next/standalone ./
# Copy the static assets from the build.
COPY --from=builder /app/.next/static ./.next/static
# Copy the public assets.
COPY --from=builder /app/src/public ./src/public

# Expose the port the app runs on.
EXPOSE 9002

# The command to start the app.
CMD ["node", "server.js"]
