# ---- Base Image ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
# Copy root package files
COPY package.json package-lock.json* ./
# Copy frontend-specific package file
COPY cloud-native-superapp/frontend/package.json ./cloud-native-superapp/frontend/
# Install dependencies
RUN npm install --omit=dev

# ---- Builder ----
FROM base AS builder
WORKDIR /app
# Copy dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all source code
COPY . .
# Run the build
RUN npm run build --workspace=frontend

# ---- Runner ----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy standalone output
COPY --from=builder /app/cloud-native-superapp/frontend/.next/standalone ./
# Copy static assets
COPY --from=builder /app/cloud-native-superapp/frontend/.next/static ./cloud-native-superapp/frontend/.next/static
# Copy public assets
COPY --from=builder /app/cloud-native-superapp/frontend/public ./cloud-native-superapp/frontend/public

# The standalone output copies the server.js file to the root.
CMD ["node", "cloud-native-superapp/frontend/server.js"]
