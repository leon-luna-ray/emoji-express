FROM node:22-slim

# Enable corepack and install pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]