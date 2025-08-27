# variables.tf for AKS Module

variable "cluster_name" {
  description = "The name of the AKS cluster."
  type        = string
}

variable "location" {
  description = "The Azure region where the cluster will be deployed."
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group in which to create the cluster."
  type        = string
}

variable "dns_prefix" {
  description = "The DNS prefix for the cluster."
  type        = string
}

variable "kubernetes_version" {
  description = "The version of Kubernetes to use."
  type        = string
  default     = "1.28.5"
}

variable "node_count" {
  description = "The initial number of nodes for the default node pool."
  type        = number
  default     = 2
}

variable "vm_size" {
  description = "The size of the virtual machines to use for the nodes."
  type        = string
  default     = "Standard_DS2_v2"
}

variable "tags" {
  description = "A map of tags to assign to the resource."
  type        = map(string)
  default     = {}
}
