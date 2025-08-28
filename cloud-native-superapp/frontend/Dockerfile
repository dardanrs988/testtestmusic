# 1. Builder Stage
# This stage installs dependencies and builds the Next.js application.
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Copy the root package.json and lockfile
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
# The output will be in the .next directory
RUN npm run build

# 2. Production Stage
# This stage creates the final, lightweight image for production.
FROM node:20-slim AS production

# Set the working directory
WORKDIR /app

# Copy the standalone output from the builder stage.
# This includes the Next.js server and dependencies.
COPY --from=builder /app/.next/standalone ./

# Copy the public assets (images, fonts, etc.)
# The correct path from the source is cloud-native-superapp/frontend/public
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# Copy the static build assets (CSS, JS chunks)
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app will run on
EXPOSE 9002

# The command to start the Next.js server
# Use the custom server entry point from the standalone output
CMD ["node", "server.js"]
