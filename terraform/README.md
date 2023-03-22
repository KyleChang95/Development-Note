# Terraform

## [Install Terraform for Ubuntu](https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli)
```shell
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common

# install the HashiCorp GPG key
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg

# verify the key's fingerprint
gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint

# add the official HashiCorp repository to your system
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list

# install Terraform from the new repository.
sudo apt update && sudo apt-get install -y terraform

# verify the installation
terraform -version
```
