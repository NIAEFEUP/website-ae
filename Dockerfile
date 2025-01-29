ARG AE_VARS_METHOD=dotenv

FROM node:22.12.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Development environment run
FROM base AS dev
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD corepack enable pnpm && pnpm run dev

# Build from .env
FROM base AS prod-build-with-dotenv

ARG AE_DOTENV_FILE=.env
COPY .env .env

# Build using GH secrets (for registry)
FROM base AS prod-build-with-content-vars

ARG AE_DOTENV_CONTENT
RUN echo "${AE_VARS_CONTENT}" | base64 -d > .env

# Build source code for production
FROM prod-build-with-${AE_VARS_METHOD} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

# Production image, copy all the files and run next
FROM base AS prod 
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD HOSTNAME="0.0.0.0" node server.js