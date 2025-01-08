# Extend the file system after resizing the EBS volume

1. Install cloud-guest-utils
   ```shell
   sudo apt install -y cloud-guest-utils
   ```
2. Extend the partition to the entire EBS
   ```shell
   sudo growpart /dev/nvme0n1 1
   ```
3. Verify if the partition has been extended
   ```shell
   sudo lsblk
   ```
4. Extend the file system
    ```shell
    sudo resize2fs /dev/nvme0n1p1
    ```
5. Verify the mount point size
    ```shell
    df -h
    ```