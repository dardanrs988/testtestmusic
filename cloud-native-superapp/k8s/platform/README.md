# Platform Services

This directory contains the Kubernetes configurations for platform-level services that support the main applications.

## Monitoring (Prometheus & Grafana)

We use the `kube-prometheus-stack` Helm chart to deploy a full monitoring stack into the `monitoring` namespace. This includes:
- **Prometheus**: For collecting and storing metrics from the cluster and applications.
- **Grafana**: For visualizing metrics in powerful dashboards.

### Accessing Grafana

After deployment, Grafana will be exposed via an Ingress. To access it:

1.  **Find the Ingress Host**: Check the host you configured in `k8s/platform/values/kube-prometheus-stack.yaml`. By default, it is `grafana.your-domain.com`. You will need to point this DNS record to your Ingress Controller's external IP address.

2.  **Login**:
    -   **Username**: `admin`
    -   **Password**: The password is set in the `values` file (default: `supersecretpassword`). **This is insecure and should be changed for production environments.**

Once logged in, you will find pre-configured dashboards for monitoring your Kubernetes cluster's health.
