GitHub Copilot
===

# How to resolve "self-signed certificate in certificate chain" error

![](./../image/self-signed%20certificate%20in%20certificate%20chain%20error.png)

1. Install [win-ca](https://marketplace.visualstudio.com/items?itemName=ukoloff.win-ca) extension and switch to `append` mode.
   ```jsonc
   // settings.json of VSCode
   {
      "win-ca.inject": "append"
   }
   ```
2. Download self-signed certificate chain that is signed by the company’s own private CA authority
   ```bash
   echo -n | openssl s_client -connect github.com:443 -showcerts | sed -ne "/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p" > github-copilot.crt
   ```
3. Add CA certificate to the trusted CA repository
   ```bash
   sudo chmod 644 github-copilot.crt
   sudo mv github-copilot.crt /usr/local/share/ca-certificates/github-copilot.crt
   sudo update-ca-certificates
   ```
4. Restart VSCode
5. Refrence
   - [Github](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-certificate-errors-for-github-copilot#handling-certificate-related-errors)
   - [Stackoverflow](https://stackoverflow.com/a/71973332)