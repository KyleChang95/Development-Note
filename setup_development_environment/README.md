# Setup development environment

## 1. Create a SSH key
```bash
ssh-keygen -t ed25519
```

## 2. Install VritualBox & Extension Pack
- https://www.virtualbox.org/wiki/Downloads

## 3. Install Vagrant and plugin
- Vagrant:
    - download [binary](https://www.vagrantup.com/downloads), don't use homebrew
- [vagrant-disksize](https://github.com/sprotheroe/vagrant-disksize)
    ```bash
    `vagrant plugin install vagrant-disksize`
    ```

### 5. Install Visual Studio Code and extensions
- VSCode
    - https://code.visualstudio.com/Download
- Extensions
    - [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
    - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
    - [Markdown Plantuml Preview](https://marketplace.visualstudio.com/items?itemName=myml.vscode-markdown-plantuml-preview)
- Ref
    - https://plantuml.com/en/
    - https://c4model.com/
    - https://github.com/plantuml-stdlib/C4-PlantUML
    - https://github.com/awslabs/aws-icons-for-plantuml

### 6. Provision workspace VM for development
- Open `Windows Terminal`
- Run `mkdir -p ~/vagrant/workspace` command to create related directories.
- Run `cd ~/vagrant/workspace` to change current directory.
- Run `vagrant init ubuntu/focal64` to generate a new `Vagrantfile` for workspace.
- Run `code .` to edit the `Vagrantfile` through VSCode.
    - Example `Vagrantfile`:
```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/focal64"
  config.vm.hostname = "workspace"
  config.disksize.size = "128GB"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.56.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = false
    vb.name = "workspace"
    vb.check_guest_additions = true
  
    # Customize the amount of memory on the VM:
    vb.memory = 8192
    vb.cpus = 2
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
```
- Run `vagrant up` to launch workspace VM.
- Run `vagrant ssh` to ssh into workspace VM.
- Copy ssh public key (Windows) and append to `~/.ssh/authorized_keys` (Workspace).
- Open another `Windows Terminal` tab and run `ssh vagrant@192.168.56.10` to see if you could ssh into workspace without password.

### 7. Setup workspace as `Remote - SSH` host in VSCode
Ref: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh

---

## In Workspace VM

### 1. Install essential packages
```bash
sudo apt update && sudo apt install -y git curl build-essential python3-pip libkrb5-dev openjdk-11-jre
```

### 2. Setup `your` username/email for git
```bash
git config --global user.name "Kyle.Chang"
git config --global user.email "changyuchun159630@acer.com"
git config --global core.editor "vim"
git config --global http.sslVerify false
```

### 3. Install nodejs 16.x & yarn
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs
sudo npm install -g yarn
```

### 4. Install `docker` and `docker-compose`
```bash
curl -fsSL https://get.docker.com | sudo bash -
sudo usermod -aG docker $USER

sudo curl -k -fsSL "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### 5. Install pyhton virtual env and CLI tools
```bash
sudo pip3 install virtualenv
virtualenv -p python3 ~/venv
echo 'source ~/venv/bin/activate' >> ~/.bashrc
source ~/venv/bin/activate
pip3 install awscli aws-adfs
```

### 6. Setup AWS ADFS for CLI tools
```bash
# create a shell script for dev account (833007173615)
cat << EOF | tee ~/login_aws_dev.sh
#!/usr/bin/env bash

set -e

aws-adfs login --adfs-host=adfs.intra.acer.com --role-arn=arn:aws:iam::833007173615:role/ADFS_Admin --region=us-west-2 --output-format=json --no-ssl-verification --no-session-cache

export AWS_ACCESS_KEY_ID=$(aws configure get default.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get default.aws_secret_access_key)
export AWS_SESSION_TOKEN=$(aws configure get default.aws_session_token)
EOF

# make script executable
chmod +x ~/login_aws_dev.sh

# run script to get temporary access token (MFA)
source ~/login_aws_dev.sh

# run aws cli command for testing
aws s3 ls
```

### 7. Install postgresql client
```bash
# https://www.postgresql.org/download/linux/ubuntu/

# Create the file repository configuration:
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Update the package lists:
sudo apt-get update

sudo apt-get -y install postgresql-client
```

# If you want refreshing AWS credentials automatically when use SDK, CDK or CLI
1. set your AD account/password as an environment variable
    ```bash
    # Set your ADFS credentials as environment variables
    echo '
    # ADFS credential for `aws-adfs` parse
    export username={your_AD_accout}
    export password={your_AD_password}' \ >> ~/.bashrc

    # make environment variables readable
    source ~/.bashrc
    ```

2. modify your login script like below
    ```bash
    enableENV=''
    if [ ! -z $username ] && [ ! -z $password ]; then
        enableENV='--env'
    fi

    aws-adfs login \
        --adfs-host=adfs.intra.acer.com \
        --role-arn=arn:aws:iam::833007173615:role/ADFS_Admin \
        --region=us-west-2 \
        --output-format=json \
        --no-ssl-verification \
        --no-session-cache \
        $enableENV
    
    export AWS_ACCESS_KEY_ID=$(aws configure get default.aws_access_key_id)
    export AWS_SECRET_ACCESS_KEY=$(aws configure get default.aws_secret_access_key)
    export AWS_SESSION_TOKEN=$(aws configure get default.aws_session_token)
    ```

3. replace your `~/.aws/config` like below.  
    > According to [AWS policy](https://docs.aws.amazon.com/sdkref/latest/guide/feature-process-credentials.html) you must specify the full path instead of `~`.

    ```
    [default]
    ...
    ...
    credential_process=source /home/vagrant/login_aws_dev.sh
    ```
