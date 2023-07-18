# Control Vagrant and VirtualBox with PowerShell

> [PowerShell command reference](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/?view=powershell-7.3)

```PowerShell
# Start Vagrant and VirtualBox
if ( -not(Get-Process VirtualBox -ErrorAction SilentlyContinue)) {
    Write-Host "Start VirtualBox.";
    Start-Process VirtualBox;
    Write-Host "Start Vagrant.";
    vagrant up;
}

# Stop Vagrant and VirtualBox
if (Get-Process VirtualBox -ErrorAction SilentlyContinue) { 
    Write-Host "Stop Vagrant.";
    vagrant halt;
    Write-Host "Stop VirtualBox.";
    Stop-Process -Name VirtualBox;
}
```

* [-ErrorAction](https://learn.microsoft.com/zh-tw/powershell/scripting/developer/cmdlet/common-parameter-names?view=powershell-7.3#erroraction-alias-ea): specifies what action should take place when an error occurs
* [SilentlyContinue](https://learn.microsoft.com/en-us/dotnet/api/system.management.automation.actionpreference?view=powershellsdk-7.3.0#fields): ignore this event and continue