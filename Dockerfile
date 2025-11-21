# Use official Node.js LTS image
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Only copy necessary files for running
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
