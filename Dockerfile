FROM node:22-slim

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# Build the frontend in client folder
WORKDIR /app/client
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Return to main app directory
WORKDIR /app

EXPOSE 3000

CMD ["pnpm", "start"]