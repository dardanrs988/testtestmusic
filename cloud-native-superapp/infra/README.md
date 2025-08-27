# Infrastructure as Code (Terraform)

This directory contains all Terraform code for managing the cloud infrastructure on Azure.

## Structure

- `environments/`: Contains environment-specific configuration (`.tfvars`) for `dev`, `staging`, and `prod`.
- `modules/`: Contains reusable Terraform modules for creating specific pieces of infrastructure (e.g., AKS, Key Vault, VNet).
- `stacks/`: Composes the modules together to create the full infrastructure stack for an environment.

## Usage

1.  **Navigate to the environment directory:**
    ```bash
    cd infra/environments/dev
    ```

2.  **Initialize Terraform:**
    ```bash
    terraform init
    ```

3.  **Plan the changes:**
    ```bash
    terraform plan -var-file=backend.tfvars
    ```

4.  **Apply the changes:**
    ```bash
    terraform apply -var-file=backend.tfvars
    ```
