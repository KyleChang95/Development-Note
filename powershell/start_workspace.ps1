# one line format
# if ( -not(Get-Process VirtualBox -ErrorAction SilentlyContinue)) { Write-Host "Start VirtualBox."; Start-Process VirtualBox; Write-Host "Start Vagrant."; vagrant up; }

if ( -not(Get-Process VirtualBox -ErrorAction SilentlyContinue)) {
    Write-Host "Start VirtualBox.";
    Start-Process VirtualBox;
    Write-Host "Start Vagrant.";
    vagrant up;
}