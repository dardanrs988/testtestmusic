#!/bin/bash

# --- Manual Database Backup Script ---
#
# This script is a TEMPLATE for performing a manual backup of a database.
#
# IMPORTANT: The recommended production strategy is to use the automated,
# point-in-time backup and restore features of a managed cloud database service
# (as documented in ADR-0002). This script is intended for supplementary,

# on-demand backups if required.
#
# TO USE THIS SCRIPT:
# 1. Fill in the placeholder variables below with your actual database credentials.
# 2. Ensure you have the appropriate database client tool installed (e.g., pg_dump for PostgreSQL).
# 3. Handle secrets securely. Do not hardcode passwords in production scripts.
#    Use a secret management tool like Azure Key Vault, HashiCorp Vault, or environment variables.

# --- Configuration ---
# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u

# --- Placeholder Database Credentials (REPLACE THESE) ---
DB_HOST="your-database-host.postgres.database.azure.com"
DB_NAME="your_database_name"
DB_USER="your_database_user"
# WARNING: Do not hardcode passwords. This is for demonstration only.
# In a real environment, source this from a secure location.
export PGPASSWORD="your_database_password"

# --- Backup Configuration ---
BACKUP_DIR="/tmp/backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILENAME="db_backup_${DB_NAME}_${TIMESTAMP}.sql.gz"
BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILENAME}"

# --- Script Body ---
echo "INFO: Starting database backup for '${DB_NAME}'..."

# 1. Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"
echo "INFO: Backup directory is '${BACKUP_DIR}'."

# 2. Run the database dump command
# The command below is for PostgreSQL (pg_dump).
# If you are using a different database (e.g., MySQL), you will need to
# replace this command with the appropriate tool (e.g., mysqldump).
echo "INFO: Creating backup file at '${BACKUP_PATH}'..."

# pg_dump command example:
# It dumps the database content to stdout, which is then piped to gzip
# to create a compressed backup file.
pg_dump -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" --no-password | gzip > "$BACKUP_PATH"

# Unset the password variable for security
unset PGPASSWORD

# 3. Verify that the backup file was created
if [ ! -f "$BACKUP_PATH" ] || [ ! -s "$BACKUP_PATH" ]; then
    echo "ERROR: Backup file was not created or is empty."
    exit 1
fi

echo "✅ SUCCESS: Database backup completed successfully!"
echo "Backup file created at: ${BACKUP_PATH}"

# --- Next Steps ---
# In a real-world scenario, you would add steps here to:
# - Upload the backup file to a secure, durable storage location (e.g., Azure Blob Storage).
# - Implement a retention policy to delete old backups.
# - Send a notification (e.g., via email or Slack) on success or failure.

