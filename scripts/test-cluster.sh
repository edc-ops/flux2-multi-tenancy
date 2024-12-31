#!/bin/bash

set -e

# Create a kind cluster
kind create cluster --name test-cluster

# Install Flux
flux install

# Bootstrap the cluster with the local configuration
flux bootstrap github \
  --context=kind-test-cluster \
  --token-auth=false \
  --read-write-key \
  --owner=${GITHUB_USER} \
  --repository=${GITHUB_REPO} \
  --branch=main \
  --path=clusters/staging

# Install Valero
kubectl apply -f infrastructure/valero-backups/valero-install.yaml
kubectl apply -f infrastructure/valero-backups/valero-config.yaml

echo "Kind cluster created and bootstrapped with Flux and Valero."
