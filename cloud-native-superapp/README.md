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

- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (v20+)
- [Poetry](https://python-poetry.org/docs/#installation) (for backend Python dependencies)
- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Helm](https://helm.sh/docs/intro/install/)

### Local Development (Docker Compose)

The recommended way to run the application for local development is using Docker Compose.

1.  **Start the services:**
    ```bash
    docker-compose up --build
    ```
    This command will build the Docker images for the frontend and backend and start the containers.

    - The frontend will be available at `http://localhost:9002`.
    - The backend will be available at `http://localhost:8000`.

2.  **To stop the services:**
    ```bash
    docker-compose down
    ```

### Local Development (Manual)

If you prefer to run the services manually without Docker:

1.  **Install Frontend Dependencies:**
    ```bash
    # In the root of the project
    npm install
    ```

2.  **Start the Frontend:**
    ```bash
    npm run dev
    ```

3.  **Install Backend Dependencies & Start:**
    ```bash
    cd backend
    poetry install
    poetry run uvicorn src.main:app --reload
    ```

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
