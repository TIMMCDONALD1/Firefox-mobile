#!/usr/bin/env bash
set -euo pipefail
echo "Running devcontainer post-create tasks..."

ROOT_DIR="$(dirname "$(realpath "$0")")/.."
cd "$ROOT_DIR"

# Node / npm setup
if [ -f package.json ]; then
  echo "Found package.json — running npm install"
  # ensure corepack is enabled (yarn/pnpm support)
  if command -v corepack >/dev/null 2>&1; then
    corepack enable || true
  fi
  npm install --silent
else
  echo "No package.json found — skipping npm install"
fi

# Python setup
if [ -f requirements.txt ]; then
  echo "Found requirements.txt — installing Python packages"
  if command -v python3 >/dev/null 2>&1; then
    python3 -m pip install --upgrade pip
    python3 -m pip install -r requirements.txt
  else
    echo "python3 not found — skipping Python requirements install"
  fi
else
  echo "No requirements.txt found — skipping Python package install"
fi

# Install common global npm dev tools if not already installed
GLOBAL_TOOLS=(eslint prettier jest typescript)
for tool in "${GLOBAL_TOOLS[@]}"; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "Installing global npm tool: $tool"
    npm install -g "$tool" --silent || true
  else
    echo "Global tool $tool already installed"
  fi
done

echo "Devcontainer post-create tasks complete."
