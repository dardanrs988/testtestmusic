# Dockerfile for the Next.js frontend

# 1. Builder Stage: Install dependencies and build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
# This leverages Docker layer caching
COPY package.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js application
# The output will be in cloud-native-superapp/frontend/.next
RUN npm run build

# 2. Runner Stage: Create the final, lean production image
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Next.js recommends creating a "nextjs" user for security.
# However, to avoid permission issues with copying files, we will run as root first
# and then switch to the nextjs user later if needed. For now, we'll simplify.

# Copy the standalone Next.js server output
COPY --from=builder /app/.next/standalone ./

# Copy the public assets
COPY --from=builder /app/public ./public

# Copy the static assets
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app will run on
EXPOSE 9002

# Set the port environment variable
ENV PORT 9002

# Start the Node.js server
CMD ["node", "server.js"]
