# Install MySQL Client
```bash
sudo apt update && sudo apt-get install -y mysql-client
```

# 安裝 MySQL/MariaDB 資料庫

```shell
# 更新 CentOS 套件
sudo yum update

# 安裝 MariaDB
sudo yum install mariadb-server
  
# 啟用 MariaDB 的 service（讓開機自動啟動）
sudo systemctl enable mariadb

# 立即啟動 MariaDB 的 service
sudo systemctl start mariadb

# 檢查 MariaDB 伺服器是否有正常啟動
systemctl status mariadb

# 登入 MariaDB (-p跟密碼之間沒有空白)
mysql -u root -pP@ssw0rd

# 登出
exit;
```

# 新增 MySQL/MariaDB 資料庫與使用者

```shell
# 建立資料庫
CREATE DATABASE `hybrid_cloud` DEFAULT CHARACTER SET utf8;

# 新增使用者帳號，並設定密碼
CREATE USER 'localadmin'@'localhost' identified by 'P@ssw0rd';

# 設定 localadmin 這個帳號可以使用 hybrid_cloud 這個資料庫
grant all on hybrid_cloud.* to 'localadmin'@'localhost';
```

# 新增資料表

```shell
# 切換資料庫
use hybrid_cloud;

# 建立資料表
CREATE TABLE `AWS_Billing` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `InvoiceID` varchar(255) DEFAULT NULL,
  `PayerAccountId` varchar(255) DEFAULT NULL,
  `LinkedAccountId` varchar(255) DEFAULT NULL,
  `RecordType` varchar(255) DEFAULT NULL,
  `RecordID` varchar(255) DEFAULT NULL,
  `BillingPeriodStartDate` varchar(255) DEFAULT NULL,
  `BillingPeriodEndDate` varchar(255) DEFAULT NULL,
  `InvoiceDate` varchar(255) DEFAULT NULL,
  `PayerAccountName` varchar(255) DEFAULT NULL,
  `LinkedAccountName` varchar(255) DEFAULT NULL,
  `TaxationAddress` varchar(255) DEFAULT NULL,
  `PayerPONumber` varchar(255) DEFAULT NULL,
  `ProductCode` varchar(255) DEFAULT NULL,
  `ProductName` varchar(255) DEFAULT NULL,
  `SellerOfRecord` varchar(255) DEFAULT NULL,
  `UsageType` varchar(255) DEFAULT NULL,
  `Operation` varchar(255) DEFAULT NULL,
  `RateId` varchar(255) DEFAULT NULL,
  `ItemDescription` varchar(255) DEFAULT NULL,
  `UsageStartDate` varchar(255) DEFAULT NULL,
  `UsageEndDate` varchar(255) DEFAULT NULL,
  `UsageQuantity` varchar(255) DEFAULT NULL,
  `BlendedRate` varchar(255) DEFAULT NULL,
  `CurrencyCode` varchar(255) DEFAULT NULL,
  `CostBeforeTax` varchar(255) DEFAULT NULL,
  `Credits` varchar(255) DEFAULT NULL,
  `TaxAmount` varchar(255) DEFAULT NULL,
  `TaxType` varchar(255) DEFAULT NULL,
  `TotalCost` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 列出資料表
show tables;
```

# 匯入 <code>*.sql</code> 檔

```shell
mysql -u testuser -pP@ssw0rd < data.sql
```

# 重設 MySQL/MariaDB 資料庫 root 密碼

```shell
# 停止 MySQL/MariaDB 資料庫
sudo systemctl stop mariadb

# 開啟 mysqld_safe 來設定 root 密碼
sudo mysqld_safe --skip-grant-tables &

# 重新登入 MySQL/MariaDB 資料庫
mysql -u root

# 重新設定 root 密碼
use mysql;
update user SET PASSWORD=PASSWORD("password") WHERE USER='root';
flush privileges;
exit;

# 重新啟動 MySQL/MariaDB 的服務
sudo systemctl start mariadb
```
