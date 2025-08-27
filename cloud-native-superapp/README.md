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
    npm install --workspace=frontend
    ```

2.  **Start the Backend:**
    In a new terminal, run:
    ```bash
    cd backend
    poetry install
    poetry run uvicorn src.main:app --reload
    ```
    The backend will be available at `http://127.0.0.1:8000`.

3.  **Start the Frontend:**
    In another terminal, run:
    ```bash
    npm run dev:frontend
    ```
    The frontend will be available at `http://localhost:9002`.

## Architecture

For a detailed overview of the system architecture, please see [docs/architecture.md](./docs/architecture.md).
