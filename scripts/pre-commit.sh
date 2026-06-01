#!/bin/sh
set -e
echo "[pre-commit] Building site..."
node "$(dirname "$0")/build.js"
echo "[pre-commit] Staging built output..."
git add index.html about.html contact.html projects.html projects/
echo "[pre-commit] Done."
