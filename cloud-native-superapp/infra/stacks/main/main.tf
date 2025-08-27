# Placeholder for the main Terraform stack
# This file would compose all the modules from the `modules/` directory
# to build the complete infrastructure for an environment.

# variable "resource_group_name" {
#   description = "The name of the resource group."
# }
# variable "location" {
#   description = "The Azure region to deploy to."
# }

# resource "azurerm_resource_group" "main" {
#   name     = var.resource_group_name
#   location = var.location
# }

# module "aks" {
#   source = "../../modules/aks"
#
#   resource_group_name = azurerm_resource_group.main.name
#   location            = azurerm_resource_group.main.location
#   cluster_name        = "superapp-aks"
# }
