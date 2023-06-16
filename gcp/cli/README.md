# Google Cloud CLI

- [Document](https://cloud.google.com/sdk/docs/install-sdk?hl=zh-cn)

## Prepare
```bash
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates gnupg curl sudo
```

## Add apt source list
```bash
echo "deb https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
```

## Import the Google Cloud public key
```bash
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
```

## Install
```bash
sudo apt-get update && \
sudo apt-get install -y google-cloud-cli
```