Node.js
===

## Install Node.js via [nvm](https://github.com/nvm-sh/nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Check last LTS versions of Node.js 18
nvm version-remote 18 --lts

# Install Node.js 18
nvm install 18 --lts

# If you have multiple Node.js versions installed.
nvm use 18 --lts
```

