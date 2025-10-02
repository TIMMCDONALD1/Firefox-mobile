param(
  [string]$webhookUrl = $env:DISCORD_WEBHOOK_URL,
  [string]$message = $env:DISCORD_MESSAGE
)

if (-not $webhookUrl) {
  Write-Error "No webhook URL provided. Set the DISCORD_WEBHOOK_URL env var or pass -webhookUrl argument."
  exit 1
}

if (-not $message) {
  $message = "Hello from the repository!"
}

$body = @{ content = $message } | ConvertTo-Json
try {
  Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $body -ContentType 'application/json'
  Write-Output "Message sent"
} catch {
  Write-Error "Failed to send message: $_"
  exit 2
}
