# Simple PowerShell script: scripts/dar--1.ps1
# Prints "hello" and any provided arguments

if ($args.Count -gt 0) {
    Write-Output "hello $($args -join ' ')"
} else {
    Write-Output "hello"
}
