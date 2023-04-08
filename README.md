# Development_Notes

## Setup Environment

1. Install Visual Studio Code and extensions
	- [Visual Studio Code](https://code.visualstudio.com/Download)
	- [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
	- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
	- [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
	- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
	- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)
		- [MySQL/MariaDB Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.zqltools-driver-mysql)
		- [PostgreSQL/Cockroach Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg)
	- [Markdown Plantuml Preview](https://marketplace.visualstudio.com/items?itemName=myml.vscode-markdown-plantuml-preview)
	- [XML Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)

1. Install VritualBox `7.0.6` & extension Pack
    - [VirtualBox](https://download.virtualbox.org/virtualbox/7.0.6/VirtualBox-7.0.6-155176-OSX.dmg)
    - [Extension Pack](https://download.virtualbox.org/virtualbox/7.0.6/Oracle_VM_VirtualBox_Extension_Pack-7.0.6a-155176.vbox-extpack)

1. Install Vagrant `2.3.4` & plugins
    - [Vagrant](https://developer.hashicorp.com/vagrant/downloads)
        > Download binary, don't use homebrew.
    - [vagrant-disksize](https://github.com/sprotheroe/vagrant-disksize)
        ```shell
        vagrant plugin install vagrant-disksize
        ```

1. Create VM via vagrant
    ```shell
    # add an empty folder as a workspace
    mkdir ~/vagrant

    # switch directory
    cd ~/vagrant

    # create an initial Vagrantfile
    vagrant init ubuntu/focal64

    # launch VM
    vagrant up

    # SSH into VM
    vagrant ssh
    ```

1. Create new SSH key
    ```shell
    ssh-keygen -t ed25519
    ```

1. Append the SSH public key to `~/.ssh/authorized_keys` on the VM
    ```shell
    # test if key works
    ssh -T vagrant@192.168.56.10
    ```

1. Setup [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)