Git
===

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