#!/bin/bash
set -e
set -u

DB_HOST="your-database-host.postgres.database.azure.com"
DB_NAME="your_database_name"
DB_USER="your_database_user"
export PGPASSWORD="your_database_password"

BACKUP_DIR="/tmp/backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILENAME="db_backup_${DB_NAME}_${TIMESTAMP}.sql.gz"
BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILENAME}"

echo "INFO: Starting database backup for '${DB_NAME}'..."

mkdir -p "$BACKUP_DIR"
echo "INFO: Backup directory is '${BACKUP_DIR}'."

echo "INFO: Creating backup file at '${BACKUP_PATH}'..."

pg_dump -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" --no-password | gzip > "$BACKUP_PATH"

unset PGPASSWORD

if [ ! -f "$BACKUP_PATH" ] || [ ! -s "$BACKUP_PATH" ]; then
    echo "ERROR: Backup file was not created or is empty."
    exit 1
fi

echo "✅ SUCCESS: Database backup completed successfully!"
echo "Backup file created at: ${BACKUP_PATH}"
