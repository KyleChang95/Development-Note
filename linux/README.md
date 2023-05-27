Linux
===

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