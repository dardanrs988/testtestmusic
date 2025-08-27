# Cloud-Native SuperApp

This repository contains the source code for the Cloud-Native SuperApp, a project built with a modern, scalable, and resilient architecture.

## Overview

The project is structured as a monorepo containing:
- **`frontend/`**: A Next.js application for the user interface.
- **`backend/`**: A FastAPI service for the application's API and business logic.
- **`infra/`**: Terraform code for defining and managing cloud infrastructure on Azure.
- **`k8s/`**: Kubernetes manifests using Helm and Kustomize for application deployment.
- **`ci/`**: GitHub Actions workflows for continuous integration and deployment.
- **`docs/`**: Project documentation, including architectural decisions and runbooks.
- **`scripts/`**: Automation scripts for development and deployment tasks.

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/) (v20+)
- [Poetry](https://python-poetry.org/docs/#installation) (for backend Python dependencies)
- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Helm](https://helm.sh/docs/intro/install/)

### Local Development

1.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Frontend:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:9002`.

### Kubernetes Deployment

To deploy the application to your configured Kubernetes cluster:

1.  **Make the script executable:**
    ```bash
    chmod +x scripts/deploy.sh
    ```

2.  **Run the deployment script:**
    ```bash
    # Deploy to the 'dev' environment
    ./scripts/deploy.sh dev

    # Deploy to another environment (e.g., staging)
    ./scripts/deploy.sh staging
    ```
    The script uses `kubectl` and `kustomize` to apply the manifests from the specified overlay in the `k8s/overlays/` directory.

## Architecture

For a detailed overview of the system architecture, please see [docs/architecture.md](./docs/architecture.md).