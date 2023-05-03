kops v1.25.4
```bash
sudo curl -sSLfk -o /usr/local/bin/kops https://github.com/kubernetes/kops/releases/download/v1.25.4/kops-linux-amd64

sudo chmod +x /usr/local/bin/kops

kops version
```

kubectl v1.25.8
```bash
sudo curl -sSLfk -o /usr/local/bin/kubectl https://dl.k8s.io/release/v1.25.8/bin/linux/amd64/kubectl

sudo chmod +x /usr/local/bin/kubectl
      
kubectl version
```

k9s v0.27.3
```bash
# down k9s binaries from Github
# https://github.com/derailed/k9s/releases

# unzip twice

# move to `/usr/local/bin/`

sudo chmod +x /usr/local/bin/k9s

k9s version
```