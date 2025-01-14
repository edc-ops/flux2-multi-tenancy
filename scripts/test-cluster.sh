#!/bin/bash

set -e

# Create a kind cluster
kind create cluster --name test-cluster

# Install Flux
flux install

export TEST_BRANCH="svarcoe/add-valero-backups"

# Bootstrap the cluster with the local configuration
flux bootstrap github \
  --context=kind-test-cluster \
  --token-auth=false \
  --read-write-key \
  --owner=edc-ops \
  --repository=flux2-multi-tenancy \
  --branch=$TEST_BRANCH \
  --path=clusters/staging

# Validate Flux bootstrap
echo "Validating Flux bootstrap..."
until flux get kustomizations --context=kind-test-cluster | grep -q 'Ready'; do
  echo "Waiting for Flux to bootstrap..."
  sleep 10
done
echo "Flux bootstrapped successfully."

# Validate Velero installation
echo "Validating Velero installation..."
until kubectl get pods -n velero --context=kind-test-cluster | grep -q 'Running'; do
  echo "Waiting for Velero to be ready..."
  sleep 10
done
echo "Velero installed successfully."

# Delete the kind cluster
echo "Deleting the kind cluster..."
kind delete cluster --name test-cluster
echo "Kind cluster deleted."
