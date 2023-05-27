# Guide to Let's Encrypt SSL Setup

## 1. Nginx
Install Nginx.
```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl status nginx
```

Append the following settings to the `/etc/nginx/nginx.conf`.
```
server {
    listen 80;
    server_name lets-encrypt.com;
    location / {
        proxy_pass http://192.168.56.10:80;
    }
}
```

Verify and reload the configuration.
```bash
sudo nginx -t
sudo systemctl reload nginx
```
Verify that Nginx has set up the custom domain.
```bash
curl http://lets-encrypt.com/
```

## 2. Snapd
`Snapd` is the package manager that allows the installation of `certbot` from `Let's Encrypt` for automatic certificate renewal.
```bash
sudo apt install -y snapd
sudo snap install core
sudo snap refresh core
```

## 3. Certbot
`certbot` is used to obtain and install the SSL certificate.
```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
certbot --version
```

## 4. Get and install certificates
```bash
sudo certbot certonly --standalone \
  --agree-tos \
  -m changyuchun159630@gmail.com \
  --no-eff-email \
  --redirect \
  --domains tw.wings-xiii.com
```
- --agree-tos : Agree to the ACME server's Subscriber Agreement
- -m EMAIL : Email address for important account notifications
- --no-eff-email : Don't share your e-mail address with EFF (default: None)
- --redirect : Automatically redirect all HTTP traffic to HTTPS for the newly authenticated vhost.
- --domains DOMAIN : Domain names to include.

## Reference
https://roadmap.sh/guides/setup-and-auto-renew-ssl-certificates