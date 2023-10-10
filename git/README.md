Git
===

## [Config](https://git-scm.com/docs/git-config)

Git configuration has mutiple [scopes](https://git-scm.com/docs/git-config#SCOPES).

The reading order of the scope in git config is as follows: `Repository > User > System.`

| Scope           | configuration Path | command               | reading order |
| --------------- | ------------------ | --------------------- | ------------- |
| System Wide     | `/etc/gitconfig`   | `git config --system` | 3rd           |
| User Wide       | `~/.gitconfig`     | `git config --global` | 2nd           |
| Repository Wide | `$GIT_DIR/config`  | `git config --local`  | 1st           |

My default config for user wide:
```bash
git config --global user.name ""
git config --global user.email ""
git config --global core.editor vim
git config --global http.sslVerify false
git config --global commit.template ~/.gitmessage
```

It will be stored in `~/.gitconfig`
```ini
[user]
    name = ""
    email = ""
[core]
    editor = vim
[http]
    sslVerify = false
[commit]
    template = ~/.gitmessage
```

## How to remove submodule
```bash
# add submodule
git submodule add -f --name lib/sdpClient git@git.ims.intra.acer.com:ki1040/sdp-client.git lib/sdpClient

# remove submodule
git submodule deinit -f -- lib/sdpClient    
rm -rf .git/modules/lib/sdpClient
git rm -f lib/sdpClient
```

## Get short commit hash
```bash
git rev-parse --short=8 HEAD
```

# Get remote repository url
```bash
git remote -v
```
