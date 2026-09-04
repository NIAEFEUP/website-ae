#!/usr/bin/env bash

set -euo pipefail

DB_CONTAINER_NAME="website-ae-db"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed. Please install docker and try again."
  echo "Docker install guide: https://docs.docker.com/engine/install/"
  exit 1
fi

set -a
source .env
set +a

if [ -z "${POSTGRES_USER:-}" ] || [ -z "${POSTGRES_PASSWORD:-}" ] || [ -z "${POSTGRES_DB:-}" ]; then
  echo "POSTGRES_USER, POSTGRES_PASSWORD or POSTGRES_DB is not set in .env"
  exit 1
fi

if [ "$POSTGRES_PASSWORD" = "password" ]; then
  echo "You are using the default database password"
fi

if [ "$(docker ps -a -q -f name=^/${DB_CONTAINER_NAME}$)" ]; then
  docker start "$DB_CONTAINER_NAME"
  echo "Database container started"
  exit 0
fi

docker run --name "$DB_CONTAINER_NAME" \
  -e POSTGRES_USER="$POSTGRES_USER" \
  -e POSTGRES_PASSWORD="$POSTGRES_PASSWORD" \
  -e POSTGRES_HOST_AUTH_METHOD=trust \
  -e POSTGRES_DB="$POSTGRES_DB" \
  -d -p 5432:5432 docker.io/postgres

echo "Database container was successfully created"
echo "Container: $DB_CONTAINER_NAME"
echo "User: $POSTGRES_USER"
echo "Database: $POSTGRES_DB"
