#!/bin/bash
cd "$(dirname "$0")/.."
set -x
if test -f ./.prod.env; then
  . ./.prod.env
fi
npm run start-prod
