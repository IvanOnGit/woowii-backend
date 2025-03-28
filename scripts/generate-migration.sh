#!/bin/bash

# Check if migration name was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a migration name"
  echo "Usage: ./new-migration.sh <migration_name>"
  exit 1
fi

# Get current timestamp in seconds
TIMESTAMP=$(date +%s)

# Create migrations directory if it doesn't exist
mkdir -p migrations

# Create migration file names
MIGRATION_NAME="${TIMESTAMP}_${1}"
UP_FILE="src/migrations/sql/${MIGRATION_NAME}.up.sql"
DOWN_FILE="src/migrations/sql/${MIGRATION_NAME}.down.sql"

# Create the up migration file with a basic template
echo "-- Up migration for ${1}" > "${UP_FILE}"
echo "-- Generated at $(date)" >> "${UP_FILE}"
echo "" >> "${UP_FILE}"
echo "-- Add your SQL here" >> "${UP_FILE}"

# Create the down migration file with a basic template
echo "-- Down migration for ${1}" > "${DOWN_FILE}"
echo "-- Generated at $(date)" >> "${DOWN_FILE}"
echo "" >> "${DOWN_FILE}"
echo "-- Revert the changes made in the up migration" >> "${DOWN_FILE}"

echo "Created migration files:"
echo "  ${UP_FILE}"
echo "  ${DOWN_FILE}"