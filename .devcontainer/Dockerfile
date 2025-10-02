# See https://containers.dev/ for more information.
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

ARG USERNAME=vscode

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    git \
    python3 \
    python3-pip \
    build-essential \
    curl \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Ensure corepack (yarn/pnpm support) is enabled
RUN corepack enable

# Install common global npm dev tools
RUN npm install -g eslint prettier jest typescript

# Create non-root user (already present in base image) and set permissions
RUN mkdir -p /workspace && chown -R ${USERNAME}:${USERNAME} /workspace

USER ${USERNAME}
