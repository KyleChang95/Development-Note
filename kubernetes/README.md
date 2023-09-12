kops v1.25.4
```bash
sudo curl -sSLfk -o /usr/local/bin/kops https://github.com/kubernetes/kops/releases/download/v1.25.4/kops-linux-amd64

sudo chmod +x /usr/local/bin/kops
```

kubectl v1.25.8
```bash
sudo curl -sSLfk -o /usr/local/bin/kubectl https://dl.k8s.io/release/v1.25.8/bin/linux/amd64/kubectl

sudo chmod +x /usr/local/bin/kubectl
```

k9s v0.27.3
```bash
sudo curl -O -L https://github.com/derailed/k9s/releases/download/v0.27.4/k9s_Linux_amd64.tar.gz

sudo tar -xzf k9s_Linux_amd64.tar.gz -C /usr/local/bin/ k9s
```