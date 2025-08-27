#!/bin/bash

# Deploys the application to the specified environment using kubectl and kustomize.
#
# Usage: ./deploy.sh <environment>
# Example: ./deploy.sh dev
#
# The script will apply the manifests located in k8s/overlays/<environment>

# --- Configuration ---
# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u

# --- Functions ---
function print_usage() {
  echo "Usage: ./deploy.sh <environment>"
  echo "  <environment>: The name of the environment to deploy to (e.g., dev, staging, prod)."
  echo "                 This corresponds to a directory in k8s/overlays/"
}

# --- Script Body ---
# Check if an environment was provided
if [ -z "${1-}" ]; then
  echo "Error: No environment specified."
  print_usage
  exit 1
fi

ENV=$1
KUSTOMIZE_PATH="k8s/overlays/$ENV"

echo "INFO: Starting deployment to environment: '$ENV'"

# 1. Check if the kubectl command exists
if ! command -v kubectl &> /dev/null; then
    echo "Error: kubectl command not found. Please install kubectl and ensure it's in your PATH."
    exit 1
fi

# 2. Check if the kustomize overlay directory exists
if [ ! -d "$KUSTOMIZE_PATH" ]; then
    echo "Error: Environment '$ENV' not found. Directory '$KUSTOMIZE_PATH' does not exist."
    exit 1
fi

# 3. Check kubectl context
echo "INFO: Using kubectl context: '$(kubectl config current-context)'"
read -p "INFO: Is this the correct context? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "WARN: Deployment cancelled by user."
    exit 1
fi

# 4. Deploy using kubectl and kustomize
echo "INFO: Applying manifests from '$KUSTOMIZE_PATH'..."
if ! kubectl apply -k "$KUSTOMIZE_PATH"; then
  echo "Error: kubectl apply command failed."
  exit 1
fi

echo "✅ SUCCESS: Deployment to environment '$ENV' initiated successfully."
echo "INFO: It may take a few minutes for all resources to be created and pods to become ready."
echo "INFO: You can monitor the status with: kubectl get all -n app"
