terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  backend "azurerm" {
    # This configuration will be filled in by the CI/CD pipeline
    # or a setup script.
    # resource_group_name  = "rg-tfstate"
    # storage_account_name = "sttfstate"
    # container_name       = "tfstate"
    # key                  = "superapp.dev.terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}
