export CI env
```bash
sudo apt install -y jq

curl -k -s -H "PRIVATE-TOKEN: {TOKEN}" "https://git.ims.intra.acer.com/api/v4/groups/3/variables?per_page=999" | jq '.[]' | jq -r '.key + "=" + .value' > envfile

# Remove all whitespace for `DOCKER_AUTH_CONFIG` in envfile
```