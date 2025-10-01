#!/usr/bin/env bash
set -e
echo "Running devcontainer post-create tasks..."

if [ -f package.json ]; then
  echo "Found package.json — running npm install"
  npm install --silent
else
  echo "No package.json found — skipping npm install"
fi

echo "Devcontainer post-create tasks complete."
