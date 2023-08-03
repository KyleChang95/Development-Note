# Generating a new SSH key
```bash
# -t : The type of keys, 
# -C : The comment of keys.
ssh-keygen -t ed25519 -C "changyuchun159630@acer.com"
```

The public and private keys will be added to the following location.
- ~/.ssh/id_ed25519
- ~/.ssh/id_ed25519.pub

# Generating a another SSH key
```bash
# -t : The type of keys,
# -f : The name of keys.
# -C : The comment of keys.
ssh-keygen -t ed25519 -f "id_ed25519.another" -C "another@abc.com"
```

The following public and private keys will be generated in the current directory.
- ./id_ed25519.another
- ./id_ed25519.another.pub

Move another SSH keys to `~/.ssh`
```bash
mv id_ed25519.another id_ed25519.another.pub ~/.ssh
```

# Setup SSH config
