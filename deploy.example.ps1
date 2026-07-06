#Requires -Version 5.1
# Copy to deploy.ps1 and create .env with your FTP credentials.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
    Write-Error @"
.env not found.

Create .env in this folder:
  FTP_SERVER=your-ftp-server
  FTP_USERNAME=your-username
  FTP_PASSWORD=your-password
  FTP_REMOTE_DIR=/path/to/public_html
"@
}

Get-Content $envFile -Encoding UTF8 | ForEach-Object {
    if ($_ -match '^\s*#' -or $_ -match '^\s*$') { return }
    if ($_ -match '^([^=]+)=(.*)$') {
        Set-Variable -Name $matches[1].Trim() -Value $matches[2].Trim() -Scope Script
    }
}

$remoteDir = $FTP_REMOTE_DIR.TrimEnd('/')
$files = @("lab.html", "lab.css", "lab.js")

foreach ($file in $files) {
    $uri = "ftp://${FTP_SERVER}${remoteDir}/${file}"
    Write-Host "Uploading $file ..."

    $request = [System.Net.FtpWebRequest]::Create($uri)
    $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    $request.Credentials = New-Object System.Net.NetworkCredential($FTP_USERNAME, $FTP_PASSWORD)
    $request.UseBinary = $true
    $request.UsePassive = $true
    $request.KeepAlive = $false

    $bytes = [System.IO.File]::ReadAllBytes((Join-Path $PSScriptRoot $file))
    $request.ContentLength = $bytes.Length

    $stream = $request.GetRequestStream()
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Close()

    $response = $request.GetResponse()
    Write-Host "  OK"
    $response.Close()
}

Write-Host "Done."
