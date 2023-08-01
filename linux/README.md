Linux
===

## CPU架構
- AMD64: 也稱為`x86-64`或`x64`，由AMD開發，被Intel採用
- ARM64: 也稱為`AArch64`
```bash
# 查看CPU架構
uname -i
```

## Command: `find`
```bash
# find {搜尋目錄} {指定檔名}

# 搜尋當前目錄
find . -name abc.txt

# 指定目錄
find /home abc.txt
```

## Mount NAS
```bash
# 安裝NFS套件
sudo apt update && sudo apt install -y nfs-common

# 新增資料夾當作掛載點
mkdir /home/vagrant/nas

# sudo mount -t nfs [Synology NAS IP 位址]:[共用資料夾的掛載路徑] /[NFS 用戶端上的掛載點]
sudo mount -t nfs 192.168.0.30:/volume1/justforfan /home/vagrant/nas

# 確認是否掛載成功
df

# 卸載之前先確認是否有掛載
mount |grep nas

# 卸載
sudo umount /home/vagrant/nas
```

## 升級Linux Kernel
```bash
# 參考資料
# https://ubuntu.com/security/CVE-2022-47939
# https://sysin.org/blog/ubuntu-2004-upgrade-kernel/

# 查詢Kernel當前版本
uname -r
# OR
cat /proc/version_signature

# 查詢OS版本
lsb_release -a

# 更新apt repository列表和升級套件
sudo apt update && sudo apt upgrade -y

# 重新開機
sudo reboot

# 移除舊版本Kernel套件
sudo apt autoremove -y

# 確認是否有殘留的舊版Kernel和套件
sudo apt list --installed linux*

# 只能手動刪除
sudo apt remove -y linux-aws-headers-5.4.0-1045
```

## 安裝.deb
```bash
# 下載.deb
curl -O <url_of_deb>
# or
wget <url_of_deb>

# 安裝.deb
sudo dpkg -i <filename.deb>
# or
sudo apt install <filename.deb>

# 卸載 .deb
sudo apt remove <filename>
```

## 新增軟連結
```bash
ln -s <原始文件或目录路径> <软链接路径>
```
