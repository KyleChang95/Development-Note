# Generating a new SSH key
```bash
# -t : The type of keys, 
# -C : The comment of keys.
ssh-keygen -t ed25519 -C "changyuchun159630@acer.com"
```

The public and private keys will be added to the following location.
* ~/.ssh/id_ed25519
* ~/.ssh/id_ed25519.pub

# Generating a another SSH key
```bash
# -t : The type of keys,
# -f : The name of keys.
# -C : The comment of keys.
ssh-keygen -t ed25519 -f "id_ed25519.company" -C "company@abc.com"
```

The public and private keys will be added to the following location.
* ~/.ssh/id_ed25519.company
* ~/.ssh/id_ed25519.company.pub

# Add private key to SSH agent
```bash
ssh-add ~/.ssh/id_ed25519.company
```

# Setup SSH config
The default path of SSH config is `~/.ssh/config`, [option reference](https://www.ssh.com/academy/ssh/config).
```ini
Host vagrant
  HostName 192.168.56.10
  IdentityFile ~/.ssh/id_ed25519
  User vagrant

Host github
  HostName github.com
  IdentityFile ~/.ssh/id_ed25519
  User git

Host gitlab
  HostName gitlab.com
  IdentityFile ~/.ssh/id_ed25519.company
  User git
```

| Option       | Description              |
| ------------ | ------------------------ |
| Host         | The Alias.               |
| HostName     | The domain or IP.        |
| User         | The username.            |
| IdentityFile | The path of private key. |

# Testing if the SSH configuration is successful.
```bash
ssh -T git@github.com

# Use Alias
ssh -T github
```
