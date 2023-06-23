# one line format
# if (Get-Process VirtualBox -ErrorAction SilentlyContinue) { Write-Host "Stop Vagrant."; vagrant halt; Write-Host "Stop VirtualBox."; Stop-Process -Name VirtualBox; }

if (Get-Process VirtualBox -ErrorAction SilentlyContinue) { 
    Write-Host "Stop Vagrant.";
    vagrant halt;
    Write-Host "Stop VirtualBox.";
    Stop-Process -Name VirtualBox;
}