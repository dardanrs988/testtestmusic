# outputs.tf for AKS Module

output "cluster_id" {
  description = "The ID of the AKS cluster."
  value       = azurerm_kubernetes_cluster.main.id
}

output "cluster_name" {
  description = "The name of the AKS cluster."
  value       = azurerm_kubernetes_cluster.main.name
}

output "kube_config_raw" {
  description = "Raw Kubernetes configuration for `kubectl`."
  value       = azurerm_kubernetes_cluster.main.kube_config_raw
  sensitive   = true
}
